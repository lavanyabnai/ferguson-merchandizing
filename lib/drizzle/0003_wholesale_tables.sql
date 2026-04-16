-- WholesaleOS Phase 1 — Branch hierarchy, projects, stocking policy,
-- contractor tiering, demand classification, external signals,
-- and multi-echelon network positioning tables.

CREATE TABLE "branches" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"branch_type" varchar(30) NOT NULL,
	"parent_branch_id" integer,
	"latitude" double precision,
	"longitude" double precision,
	"region" varchar(100),
	"square_footage" integer,
	"contractor_mix_residential_pct" numeric(5, 2),
	"contractor_mix_commercial_pct" numeric(5, 2),
	"active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "branches_name_unique" UNIQUE("name"),
	CONSTRAINT "branches_branch_type_check" CHECK ("branch_type" IN ('central_dc', 'regional_dc', 'hub', 'spoke'))
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"customer_id" integer NOT NULL,
	"project_type" varchar(30) NOT NULL,
	"project_value" numeric(15, 2),
	"start_date" date,
	"expected_completion" date,
	"status" varchar(20) DEFAULT 'active',
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "projects_project_type_check" CHECK ("project_type" IN ('residential_new', 'residential_reno', 'commercial', 'industrial', 'maintenance'))
);
--> statement-breakpoint
CREATE TABLE "project_line_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_id" integer NOT NULL,
	"sku_id" integer NOT NULL,
	"quantity" numeric(15, 4) NOT NULL,
	"fulfillment_branch_id" integer,
	"fulfillment_date" date,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "sku_branch_policy" (
	"id" serial PRIMARY KEY NOT NULL,
	"sku_id" integer NOT NULL,
	"branch_id" integer NOT NULL,
	"stocking_policy" varchar(25) NOT NULL,
	"target_service_level" numeric(5, 4),
	"safety_stock" numeric(12, 4),
	"reorder_point" numeric(12, 4),
	"max_stock" numeric(12, 4),
	"last_optimized_at" timestamp,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "sku_branch_policy_stocking_policy_check" CHECK ("stocking_policy" IN ('carry', 'hub_replenish', 'regional_replenish', 'special_order', 'drop_ship'))
);
--> statement-breakpoint
CREATE TABLE "customer_tier" (
	"id" serial PRIMARY KEY NOT NULL,
	"customer_id" integer NOT NULL,
	"tier" varchar(20) NOT NULL,
	"service_level_target" numeric(5, 4) NOT NULL,
	"annual_revenue" numeric(15, 2),
	"primary_branch_id" integer,
	"tier_assigned_at" timestamp DEFAULT now(),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "customer_tier_customer_id_unique" UNIQUE("customer_id"),
	CONSTRAINT "customer_tier_tier_check" CHECK ("tier" IN ('platinum', 'gold', 'silver', 'transactional'))
);
--> statement-breakpoint
CREATE TABLE "sku_demand_profile" (
	"id" serial PRIMARY KEY NOT NULL,
	"sku_id" integer NOT NULL,
	"adi" numeric(10, 4),
	"cv_squared" numeric(10, 6),
	"classification" varchar(20) NOT NULL,
	"recommended_method" varchar(20) NOT NULL,
	"last_classified_at" timestamp DEFAULT now(),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "sku_demand_profile_sku_id_unique" UNIQUE("sku_id"),
	CONSTRAINT "sku_demand_profile_classification_check" CHECK ("classification" IN ('smooth', 'intermittent', 'erratic', 'lumpy')),
	CONSTRAINT "sku_demand_profile_method_check" CHECK ("recommended_method" IN ('croston', 'sba', 'tsb', 'lightgbm', 'ets'))
);
--> statement-breakpoint
CREATE TABLE "external_signals" (
	"id" serial PRIMARY KEY NOT NULL,
	"signal_type" varchar(50) NOT NULL,
	"region" varchar(100) NOT NULL,
	"period" varchar(20) NOT NULL,
	"value" numeric(20, 6) NOT NULL,
	"source" varchar(100),
	"loaded_at" timestamp DEFAULT now(),
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "external_signals_signal_type_check" CHECK ("signal_type" IN ('housing_starts', 'building_permits', 'construction_spending', 'weather_forecast'))
);
--> statement-breakpoint
CREATE TABLE "network_positioning_scenarios" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"objective_value" numeric(20, 6),
	"total_inventory_cost" numeric(20, 2),
	"avg_fill_rate" numeric(6, 4),
	"solve_time_seconds" numeric(10, 3),
	"status" varchar(20) DEFAULT 'pending',
	"notes" text,
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "network_positioning_decisions" (
	"id" serial PRIMARY KEY NOT NULL,
	"scenario_id" integer NOT NULL,
	"sku_id" integer NOT NULL,
	"branch_id" integer NOT NULL,
	"policy" varchar(25) NOT NULL,
	"stock_level" numeric(12, 4),
	"flow_from_branch_id" integer,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "network_positioning_decisions_policy_check" CHECK ("policy" IN ('carry', 'hub_replenish', 'regional_replenish', 'special_order', 'drop_ship'))
);
--> statement-breakpoint
ALTER TABLE "branches" ADD CONSTRAINT "branches_parent_branch_id_fkey"
	FOREIGN KEY ("parent_branch_id") REFERENCES "branches"("id") ON DELETE SET NULL;
--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_customer_id_fkey"
	FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE CASCADE;
--> statement-breakpoint
ALTER TABLE "project_line_items" ADD CONSTRAINT "project_line_items_project_id_fkey"
	FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE;
--> statement-breakpoint
ALTER TABLE "project_line_items" ADD CONSTRAINT "project_line_items_sku_id_fkey"
	FOREIGN KEY ("sku_id") REFERENCES "products"("id") ON DELETE CASCADE;
--> statement-breakpoint
ALTER TABLE "project_line_items" ADD CONSTRAINT "project_line_items_branch_id_fkey"
	FOREIGN KEY ("fulfillment_branch_id") REFERENCES "branches"("id") ON DELETE SET NULL;
--> statement-breakpoint
ALTER TABLE "sku_branch_policy" ADD CONSTRAINT "sku_branch_policy_sku_id_fkey"
	FOREIGN KEY ("sku_id") REFERENCES "products"("id") ON DELETE CASCADE;
--> statement-breakpoint
ALTER TABLE "sku_branch_policy" ADD CONSTRAINT "sku_branch_policy_branch_id_fkey"
	FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE CASCADE;
--> statement-breakpoint
ALTER TABLE "customer_tier" ADD CONSTRAINT "customer_tier_customer_id_fkey"
	FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE CASCADE;
--> statement-breakpoint
ALTER TABLE "customer_tier" ADD CONSTRAINT "customer_tier_branch_id_fkey"
	FOREIGN KEY ("primary_branch_id") REFERENCES "branches"("id") ON DELETE SET NULL;
--> statement-breakpoint
ALTER TABLE "sku_demand_profile" ADD CONSTRAINT "sku_demand_profile_sku_id_fkey"
	FOREIGN KEY ("sku_id") REFERENCES "products"("id") ON DELETE CASCADE;
--> statement-breakpoint
ALTER TABLE "network_positioning_decisions" ADD CONSTRAINT "net_pos_dec_scenario_id_fkey"
	FOREIGN KEY ("scenario_id") REFERENCES "network_positioning_scenarios"("id") ON DELETE CASCADE;
--> statement-breakpoint
ALTER TABLE "network_positioning_decisions" ADD CONSTRAINT "net_pos_dec_sku_id_fkey"
	FOREIGN KEY ("sku_id") REFERENCES "products"("id") ON DELETE CASCADE;
--> statement-breakpoint
ALTER TABLE "network_positioning_decisions" ADD CONSTRAINT "net_pos_dec_branch_id_fkey"
	FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE CASCADE;
--> statement-breakpoint
ALTER TABLE "network_positioning_decisions" ADD CONSTRAINT "net_pos_dec_flow_branch_id_fkey"
	FOREIGN KEY ("flow_from_branch_id") REFERENCES "branches"("id") ON DELETE SET NULL;
--> statement-breakpoint
CREATE UNIQUE INDEX "idx_sku_branch_policy_unique" ON "sku_branch_policy" ("sku_id", "branch_id");
--> statement-breakpoint
CREATE UNIQUE INDEX "idx_ext_signals_unique" ON "external_signals" ("signal_type", "region", "period");
--> statement-breakpoint
CREATE UNIQUE INDEX "idx_net_pos_dec_unique" ON "network_positioning_decisions" ("scenario_id", "sku_id", "branch_id");
--> statement-breakpoint
CREATE INDEX "idx_branches_type" ON "branches" ("branch_type");
--> statement-breakpoint
CREATE INDEX "idx_branches_region" ON "branches" ("region");
--> statement-breakpoint
CREATE INDEX "idx_branches_parent" ON "branches" ("parent_branch_id");
--> statement-breakpoint
CREATE INDEX "idx_branches_lat_long" ON "branches" ("latitude", "longitude");
--> statement-breakpoint
CREATE INDEX "idx_projects_customer_id" ON "projects" ("customer_id");
--> statement-breakpoint
CREATE INDEX "idx_projects_type" ON "projects" ("project_type");
--> statement-breakpoint
CREATE INDEX "idx_projects_status" ON "projects" ("status");
--> statement-breakpoint
CREATE INDEX "idx_project_line_items_project" ON "project_line_items" ("project_id");
--> statement-breakpoint
CREATE INDEX "idx_project_line_items_sku" ON "project_line_items" ("sku_id");
--> statement-breakpoint
CREATE INDEX "idx_project_line_items_branch" ON "project_line_items" ("fulfillment_branch_id");
--> statement-breakpoint
CREATE INDEX "idx_sku_branch_policy_policy" ON "sku_branch_policy" ("stocking_policy");
--> statement-breakpoint
CREATE INDEX "idx_sku_branch_policy_branch" ON "sku_branch_policy" ("branch_id");
--> statement-breakpoint
CREATE INDEX "idx_customer_tier_tier" ON "customer_tier" ("tier");
--> statement-breakpoint
CREATE INDEX "idx_customer_tier_branch" ON "customer_tier" ("primary_branch_id");
--> statement-breakpoint
CREATE INDEX "idx_sku_demand_profile_class" ON "sku_demand_profile" ("classification");
--> statement-breakpoint
CREATE INDEX "idx_sku_demand_profile_method" ON "sku_demand_profile" ("recommended_method");
--> statement-breakpoint
CREATE INDEX "idx_ext_signals_type" ON "external_signals" ("signal_type");
--> statement-breakpoint
CREATE INDEX "idx_ext_signals_region" ON "external_signals" ("region");
--> statement-breakpoint
CREATE INDEX "idx_ext_signals_period" ON "external_signals" ("period");
--> statement-breakpoint
CREATE INDEX "idx_net_pos_scenario_name" ON "network_positioning_scenarios" ("name");
--> statement-breakpoint
CREATE INDEX "idx_net_pos_scenario_status" ON "network_positioning_scenarios" ("status");
--> statement-breakpoint
CREATE INDEX "idx_net_pos_scenario_created" ON "network_positioning_scenarios" ("created_at");
--> statement-breakpoint
CREATE INDEX "idx_net_pos_dec_scenario" ON "network_positioning_decisions" ("scenario_id");
--> statement-breakpoint
CREATE INDEX "idx_net_pos_dec_sku" ON "network_positioning_decisions" ("sku_id");
--> statement-breakpoint
CREATE INDEX "idx_net_pos_dec_branch" ON "network_positioning_decisions" ("branch_id");
