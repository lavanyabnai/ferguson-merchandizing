"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Network,
  BarChart3,
  Layers,
  PackageSearch,
  Warehouse,
  Activity,
  Boxes,
  TrendingUp,
  AlertTriangle,
  MapPin,
  GitBranch,
  Cpu,
} from "lucide-react";

import { MegaDropdownCategories } from "@/components/mega-dropdown-categories";
import { MobileSidebar } from "@/components/mobile-sidebar";

const BASE = "/wholesale-optimizer";

export const HeaderBlueWholesale = () => {
  const categories = [
    {
      category: "L0 — Category Strategy",
      items: [
        {
          name: "Category Tiers",
          description: "Classify categories by strategic importance and supplier leverage",
          shortDescription: "Tier Map",
          to: `${BASE}/category-strategy/category-tiers`,
          icon: Layers,
          highlight: true,
          iconBackground: "bg-teal-100",
          iconForeground: "text-teal-700",
        },
        {
          name: "Supplier Consolidation",
          description: "Reduce supplier count per category while protecting service levels",
          shortDescription: "Supplier Strategy",
          to: `${BASE}/category-strategy/supplier-consolidation`,
          icon: GitBranch,
          highlight: true,
          iconBackground: "bg-violet-100",
          iconForeground: "text-violet-700",
        },
        {
          name: "BOM Affinity Graph",
          description: "Project bill-of-materials affinity for cross-sell and bundling",
          shortDescription: "Project BOM Affinity",
          to: `${BASE}/category-strategy/bom-affinity`,
          icon: Network,
          highlight: true,
          iconBackground: "bg-cyan-100",
          iconForeground: "text-cyan-700",
        },
      ],
    },
    {
      category: "L0.5 — Demand Intelligence",
      items: [
        {
          name: "Intermittent Demand Model",
          description: "Croston, SBA, TSB — purpose-built for lumpy wholesale demand patterns",
          shortDescription: "Croston / SBA / TSB",
          to: `${BASE}/demand-intelligence/intermittent-demand-model`,
          icon: BarChart3,
          highlight: true,
          iconBackground: "bg-blue-100",
          iconForeground: "text-blue-700",
        },
        {
          name: "Hierarchical Forecast",
          description: "Region → branch → SKU top-down reconciliation with MinT",
          shortDescription: "Reconciled Forecast",
          to: `${BASE}/demand-intelligence/hierarchical-forecast`,
          icon: TrendingUp,
          highlight: true,
          iconBackground: "bg-amber-100",
          iconForeground: "text-amber-700",
        },
        {
          name: "External Signals",
          description: "Housing starts, building permits, construction spend as leading indicators",
          shortDescription: "Housing / Permit Signals",
          to: `${BASE}/demand-intelligence/external-signals`,
          icon: Activity,
          highlight: true,
          iconBackground: "bg-orange-100",
          iconForeground: "text-orange-700",
        },
        {
          name: "Contractor Demand",
          description: "Top-account modeling — platinum/gold contractor purchase patterns",
          shortDescription: "Account-Level Demand",
          to: `${BASE}/demand-intelligence/contractor-demand`,
          icon: MapPin,
          highlight: true,
          iconBackground: "bg-rose-100",
          iconForeground: "text-rose-700",
        },
      ],
    },
    {
      category: "L1 — Network Optimization",
      items: [
        {
          name: "Multi-Echelon Positioning",
          description: "MILP assigns carry / hub-replenish / drop-ship by SKU-branch pair across all echelons",
          shortDescription: "SKU-Branch Assignment",
          to: `${BASE}/network-optimization/multi-echelon-positioning`,
          icon: Network,
          highlight: true,
          iconBackground: "bg-indigo-100",
          iconForeground: "text-indigo-700",
        },
        {
          name: "Safety Stock Optimizer",
          description: "Service-level constrained safety stock by SKU × location × contractor tier",
          shortDescription: "Safety Stock",
          to: `${BASE}/network-optimization/safety-stock-optimizer`,
          icon: Boxes,
          highlight: true,
          iconBackground: "bg-sky-100",
          iconForeground: "text-sky-700",
        },
        {
          name: "Fill Rate vs. Cost Tradeoff",
          description: "Pareto frontier: inventory dollar investment vs. achieved fill rate by tier",
          shortDescription: "Tradeoff Curve",
          to: `${BASE}/network-optimization/service-level-cost-tradeoff`,
          icon: TrendingUp,
          highlight: true,
          iconBackground: "bg-emerald-100",
          iconForeground: "text-emerald-700",
        },
      ],
    },
    {
      category: "L2 — Branch Assortment",
      items: [
        {
          name: "Branch Clustering",
          description: "KMeans segmentation on contractor mix, volume, and geography",
          shortDescription: "Branch Segments",
          to: `${BASE}/branch-assortment/branch-clustering`,
          icon: Cpu,
          highlight: true,
          iconBackground: "bg-pink-100",
          iconForeground: "text-pink-700",
        },
        {
          name: "Stocking Policy Optimizer",
          description: "Classify each SKU-branch pair: carry / hub-replenish / special-order",
          shortDescription: "Policy Classifier",
          to: `${BASE}/branch-assortment/stocking-policy-optimizer`,
          icon: PackageSearch,
          highlight: true,
          iconBackground: "bg-lime-100",
          iconForeground: "text-lime-700",
        },
        {
          name: "Delist Analysis",
          description: "Identify dead stock — zero velocity SKUs with supplier return options",
          shortDescription: "Dead Stock Flags",
          to: `${BASE}/branch-assortment/delist-analysis`,
          icon: AlertTriangle,
          highlight: true,
          iconBackground: "bg-red-100",
          iconForeground: "text-red-700",
        },
        {
          name: "Assortment Simulation",
          description: "Monte Carlo fill-rate distribution under proposed branch assortment",
          shortDescription: "Fill Rate Simulation",
          to: `${BASE}/branch-assortment/assortment-simulation`,
          icon: BarChart3,
          highlight: true,
          iconBackground: "bg-fuchsia-100",
          iconForeground: "text-fuchsia-700",
        },
      ],
    },
    {
      category: "L3 — Branch Layout",
      items: [
        {
          name: "ABC Slotting",
          description: "Velocity-based zone assignment — A items at primary pick, C items in reserve",
          shortDescription: "ABC Zones",
          to: `${BASE}/branch-layout/abc-slotting`,
          icon: Warehouse,
          highlight: true,
          iconBackground: "bg-yellow-100",
          iconForeground: "text-yellow-700",
        },
        {
          name: "Pick-Path Optimizer",
          description: "CP-SAT walk-sequence minimization for warehouse pick routes",
          shortDescription: "Pick Walk",
          to: `${BASE}/branch-layout/pick-path-optimizer`,
          icon: MapPin,
          highlight: true,
          iconBackground: "bg-teal-100",
          iconForeground: "text-teal-700",
        },
        {
          name: "Will-Call Staging",
          description: "Contractor pickup prioritization and staging lane assignment",
          shortDescription: "Will-Call Layout",
          to: `${BASE}/branch-layout/will-call-staging`,
          icon: PackageSearch,
          highlight: true,
          iconBackground: "bg-violet-100",
          iconForeground: "text-violet-700",
        },
      ],
    },
    {
      category: "L4 — Execution",
      items: [
        {
          name: "Fill-Rate Dashboard",
          description: "Live fill rate by branch / category / contractor tier — daily refresh",
          shortDescription: "Fill Rate",
          to: `${BASE}/execution/fill-rate-dashboard`,
          icon: Activity,
          highlight: true,
          iconBackground: "bg-green-100",
          iconForeground: "text-green-700",
        },
        {
          name: "Stockout Alerts",
          description: "Exception alerts when on-hand drops below safety stock threshold",
          shortDescription: "Stockout Exceptions",
          to: `${BASE}/execution/stockout-alerts`,
          icon: AlertTriangle,
          highlight: true,
          iconBackground: "bg-red-100",
          iconForeground: "text-red-700",
        },
        {
          name: "Supplier SLA Tracking",
          description: "On-time delivery, lead-time variance, fill rate by supplier",
          shortDescription: "Supplier SLAs",
          to: `${BASE}/execution/supplier-sla-tracking`,
          icon: BarChart3,
          highlight: true,
          iconBackground: "bg-blue-100",
          iconForeground: "text-blue-700",
        },
        {
          name: "Contractor Service Levels",
          description: "Per-tier fill rate actuals vs. targets — platinum 99%, gold 97%, silver 95%",
          shortDescription: "Tier Service Levels",
          to: `${BASE}/execution/contractor-service-levels`,
          icon: TrendingUp,
          highlight: true,
          iconBackground: "bg-amber-100",
          iconForeground: "text-amber-700",
        },
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="py-4 px-6 flex items-center justify-between bg-[#00446a]">
        <div className="flex items-center gap-x-2">
          <MobileSidebar />
          <Link href="/wholesale-optimizer" className="flex items-center gap-2">
            <Image
              className="block lg:hidden"
              src="/assets/ferguson-logo.jpeg"
              alt="Ferguson logo"
              width={40}
              height={40}
            />
            <Image
              className="hidden lg:block"
              src="/assets/ferguson-light.svg"
              alt="Ferguson"
              width={142}
              height={18}
            />
          </Link>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="ml-6 hidden lg:block">
            <h1 className="text-lg font-semibold text-white">
              WholesaleOS — Distribution Optimizer
            </h1>
          </div>
          <MegaDropdownCategories categories={categories} />
        </div>
      </nav>
    </header>
  );
};
