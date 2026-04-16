# UI Components & Analysis Summary

## Table of Contents
1. [Shared Components](#1-shared-components)
2. [Merchandizing Optimizer Routes](#2-merchandizing-optimizer-routes)
3. [SNOP (S&OP) Modules](#3-snop-sop-modules)
4. [Risk Analysis Suite](#4-risk-analysis-suite)
5. [Map & Flow Components](#5-map--flow-components)
6. [Data Table System](#6-data-table-system)
7. [Feature Modules](#7-feature-modules)
8. [Analysis Data (Kendo Charts)](#8-analysis-data-kendo-charts)
9. [AG Grid SNOP Data Generators](#9-ag-grid-snop-data-generators)

---

## 1. Shared Components

### Layout & Navigation
| Component | Description |
|-----------|-------------|
| `CardLayout.jsx` | Generic card-based page layout |
| `CardLayoutChat.jsx` | Card layout variant with integrated chat panel |
| `HeaderBlue.tsx` | Blue-themed section header |
| `SidebarDemo.tsx` | Collapsible navigation sidebar |
| `mobile-sidebar.tsx` | Responsive sidebar for mobile viewports |
| `providers.tsx` | Root React context providers setup |

### Utilities
| Component | Description |
|-----------|-------------|
| `global-search.tsx` | Global search interface across entities |
| `mega-dropdown-categories.tsx` | Large multi-level dropdown for category selection |
| `date-picker.tsx` | Date selection with calendar popup |
| `icon-tooltip.tsx` | Icon with accessible tooltip wrapper |
| `select.tsx` | Styled select input |
| `upload-button.tsx` | File upload trigger button |
| `theme-provider.tsx` | Dark/light theme context |
| `theme-toggle.tsx` | Theme switch button |

### UI Kit (`ui/`)
shadcn/ui primitives — buttons, inputs, dialogs, tabs, dropdowns, toasts, badges, sliders, progress bars, and all Radix UI compositions.

---

## 2. Merchandizing Optimizer Routes

All routes live under `app/(inventory)/merchandizing-optimizer/`.

| Route | Purpose |
|-------|---------|
| `/` (root) | CDT Analysis landing page |
| `/dashboard` | Multi-tab dashboard: Dashboard, CDT, Optimizer, Simulation, Clustering, Planogram |
| `/cdt-analysis` | Category Demand & Trends — category-level performance metrics |
| `/cdt` | CDT detail view with store/subcategory filters |
| `/clustering` | Store clustering engine — segment stores by purchase behavior |
| `/optimization` | Assortment optimization solver — selects best-performing SKUs |
| `/simulation` | Monte Carlo demand/sales forecasting simulation |
| `/space-allocation-optimizer` | Shelf space allocation optimizer |
| `/space-elasticity` | Price and space elasticity analysis |
| `/sku-optimizer` | SKU rationalization and scoring |
| `/mnl-demand-model` | Multinomial Logit (MNL) demand model |
| `/monte-carlo-simulation` | Advanced Monte Carlo simulation runner |
| `/store-clustering-engine` | Store segmentation analysis |
| `/planogram` | Planogram generation — physical shelf layouts |
| `/data` | Data upload and management interface |
| `/scenarios` | Scenario history list |
| `/scenarios/[id]` | Single scenario detail view |
| `/solver-approaches` | Solver algorithm comparison and documentation |
| `/docs/clustering` | Clustering algorithm documentation |
| `/docs/optimization` | Optimization solver documentation |
| `/docs/simulation` | Simulation methodology documentation |

### Shared Sub-components (`_components/`)
| Component | Description |
|-----------|-------------|
| `AssortmentTabs.tsx` | Tab switcher for dashboard view sections |
| `AssortmentSidebarWrapper.tsx` | Sidebar layout wrapper for optimizer pages |
| `StoreSelector.tsx` | Store/location dropdown filter |
| `SubcategoryFilter.tsx` | Product subcategory filter |

---

## 3. SNOP (S&OP) Modules

Located in `components/snop/`. Five independent optimization engines, each with its own dashboard, inputs, results, and cost analysis.

### Input Forms (`input/`)
| Form | Description |
|------|-------------|
| `SnopForm.tsx` | Master S&OP input form |
| `demand-form.tsx` | Demand input and forecasting parameters |
| `cost-form.tsx` | Cost parameters |
| `empcost-form.tsx` | Employee cost inputs |
| `outcost-form.tsx` | Outsourcing cost parameters |
| `constraint-form.tsx` | Capacity and resource constraints |
| `empconstraint-form.tsx` | Employee constraints |
| `proconstraint-form.tsx` | Production constraints |
| `truck-form.tsx` | Truck and logistics parameters |
| `admin-form.tsx` | Administrative settings |

### DRP — Distribution Requirements Planning (`drp/`)
| Component | Description |
|-----------|-------------|
| `drp-dashboard.tsx` | Main DRP optimization dashboard |
| `dashboard-header.tsx` | KPI summary header |
| `network-view.tsx` | Supply network topology visualization |
| `warehouse-planning.tsx` | Warehouse/DC planning view |
| `inventory-analysis.tsx` | Inventory KPIs and metrics |
| `order-analysis.tsx` | Order pattern optimization |
| `service-level-analysis.tsx` | Service level metrics |

### MRP — Material Requirements Planning (`mrp/`)
| Component | Description |
|-----------|-------------|
| `mrp-dashboard.tsx` | Production scheduling optimizer dashboard |
| `model-inputs.tsx` | MRP input parameters |
| `optimization-results.tsx` | Optimized production schedule output |
| `production-schedule.tsx` | Planned order releases |
| `inventory-analysis.tsx` | Component/ingredient inventory view |
| `supply-chain-visualization.tsx` | Supply network for MRP |
| `cost-summary.tsx` | Production cost breakdown |

### Omni-Channel (`omni/`)
| Component | Description |
|-----------|-------------|
| `omni-channel-dashboard.tsx` | Multi-channel distribution optimization |
| `scenario-comparison.tsx` | Channel/scenario comparison |
| `cost-breakdown.tsx` | Cost analysis by channel |
| `network-flow.tsx` | Network topology view |
| `transport-costs.tsx` | Transportation costs by channel |
| `supply-chain-flow.tsx` | Flow visualization |

### Production Planning (`prodPlan/`)
| Component | Description |
|-----------|-------------|
| `supply-chain-dashboard.tsx` | Production planning main dashboard |
| `production-schedule.tsx` | Factory production schedules |
| `inventory-analysis.tsx` | Raw material/WIP inventory |
| `cost-analysis.tsx` | Production cost breakdowns |
| `model-inputs.tsx` | Planning parameters |
| `model-results.tsx` | Optimization results output |

### Reverse Logistics (`reverse/`)
| Component | Description |
|-----------|-------------|
| `reverse-logistics-dashboard.tsx` | Returns and reverse flow optimization |
| `facility-analysis.tsx` | Return center performance metrics |
| `cost-breakdown.tsx` | Reverse logistics cost structure |
| `supply-chain-flow.tsx` | Reverse flow network visualization |
| `scenario-comparison.tsx` | Multi-scenario comparison |

### Scenario Data Table (`scenario/`)
Reusable editable table for S&OP scenario parameters — includes columns, toolbar, pagination, faceted filters, row actions, and form submission.

---

## 4. Risk Analysis Suite

Located in `components/risk/`. Covers supply chain risk modeling, simulation, and scenario comparison.

### Core Pages
| Component | Description |
|-----------|-------------|
| `RunScenario.tsx` | Create and configure risk scenarios (demand variation types, optimization settings, problem types) |
| `ResultDashboard.tsx` | Full results display: product flows, site states, costs, fulfillment metrics |
| `ResultOverall.tsx` | Summary results overview |
| `overallDashboard.jsx` | Executive KPI dashboard |
| `Comparing.tsx` | Side-by-side scenario comparison |
| `AlltablesMail.tsx` | Consolidated email/report table |

### Analysis Views
| Component | Description |
|-----------|-------------|
| `Orders.tsx` | Order analytics |
| `Product.tsx` | Product-level analysis |
| `Ratio.tsx` | KPI ratio calculations |
| `Time.tsx` | Time-series analysis |
| `finances.tsx` | Financial metrics |

### Experiment Settings (`experiment-settings/`)
| Component | Experiment Type |
|-----------|----------------|
| `risk-experiment.tsx` | Demand uncertainty, supply disruption, lead-time factors |
| `safety-stock-experiment.tsx` | Safety stock optimization parameters |
| `simulation-experiment.tsx` | Monte Carlo simulation settings |
| `variation-experiment.tsx` | Product and demand variation testing |
| `comparison-experiment.tsx` | Multi-scenario comparison configuration |

### Results Dashboards (`results/`)
| Component | Description |
|-----------|-------------|
| `risk-dashboard.tsx` | Risk analysis results |
| `safety-stock-dashboard.tsx` | Safety stock optimization results |
| `simulation-dashboard.tsx` | Monte Carlo results visualization |
| `variation-dashboard.tsx` | Variation experiment results |
| `comparison-dashboard.tsx` | Scenario comparison results |
| Financial, fulfillment, inventory, lead-time, profit-loss, service-level views | Specialized metric breakdowns |

### Static Risk Data (`risk-data/` — 17 JSON files)
Base simulation data: `demand.json`, `inventory.json`, `customers.json`, `demand-management.json`, `demand-periods.json`, `demand-policies.json`, `products.json`, `suppliers.json`, `distribution-centers.json`, `transportation.json`, `events.json`, `expenses.json`, `groups.json`, `locations.json`, `policies.json`, `vehicles.json`, `product-conversions.json`, `transportation-routes.json`

---

## 5. Map & Flow Components

### Supply Chain Maps (`map/`)
| Component | Description |
|-----------|-------------|
| `supply-chain-map.tsx` | Interactive supply chain network map |
| `leaflet-map.tsx` | Leaflet-based geographic map |
| `facility-detail.tsx` | Facility detail popup |

### Interactive Maps (`intermap/`)
| Component | Description |
|-----------|-------------|
| `interactive-supply-chain-map.tsx` | Real-time supply chain map with entity management |
| `interactive-customer-map.tsx` | Customer location network map |
| `extensible-supply-chain-map.tsx` | Extensible map framework |
| `create-entity-modal.tsx` | Add supplier/facility/customer modal |
| `entity-detail.tsx` | Entity information panel |
| `new-location-sheet.tsx` | New location slide-over dialog |

### Process Flows (`flow/`)
| Component | Description |
|-----------|-------------|
| `flow-chart.tsx` | React Flow-based process flow diagrams |
| `CustomNode.jsx` | Custom-styled flow nodes |
| `CustomNodeTail.jsx` | Tailwind-styled flow nodes |

### Product Flows (`productFlow/`)
| Component | Description |
|-----------|-------------|
| `product-flow-chart.tsx` | Product routing visualization |
| `product-flow-map.tsx` | Geographic product flow map |

### Service Flows (`serviceFlow/`)
| Component | Description |
|-----------|-------------|
| `InteractiveTree.tsx` | Hierarchical order/service tree |
| `custom-node.tsx` | Tree node components |

### UK Map (`ukmap/`)
UK region and location visualization components.

---

## 6. Data Table System

Located in `components/datatable/`. 22 components forming a reusable, variant-based table system built on TanStack React Table.

### Table Variants
| Variant | Columns File | Use Case |
|---------|-------------|----------|
| Standard | `columns.tsx` | General task and entity data |
| Incident | `columns-inci.tsx` | Exception tracking |
| Meeting | `columns-meeting.tsx` | Meeting logistics |
| Insights | `data-table-insights.tsx` | KPI and metrics display |
| Link | `columns-link.tsx` | Relationship data |
| Trace Overall | `columns-trace-overall.tsx` | End-to-end tracking |
| Demand Ref | `data-table-ref-demandcolumns.tsx` | Demand/inventory cross-references |

### Shared Table Infrastructure
| Component | Description |
|-----------|-------------|
| `data-table.tsx` | Core table with sorting, filtering, pagination |
| `data-table-column-header.tsx` | Sortable/filterable column header |
| `data-table-faceted-filter.tsx` | Multi-value faceted filter |
| `data-table-toolbar.tsx` | Search bar + filter + view options |
| `data-table-pagination.tsx` | Page size and navigation controls |
| `data-table-row-actions.tsx` | Edit/delete row action menu |
| `data-table-row-submit.tsx` | Inline row form submission |
| `data-table-view-options-inci.tsx` | Column visibility toggle |

---

## 7. Feature Modules

Located in `features/`. 54 feature modules, each typically structured as:
```
features/<name>/
  api/       — TanStack Query hooks (use-get-*, use-create-*, use-edit-*, use-delete-*)
  components/ — Feature-specific forms and dialogs
  hooks/     — Custom React hooks
  schemas/   — Zod validation schemas
```

### Large Features (>10 files)
| Feature | Files | Description |
|---------|-------|-------------|
| `assortment` | 93 | CDT, clustering, optimization, simulation, planogram, SKU, space allocation, MNL models |
| `locations` | 13 | Location/facility master data |
| `products` | 12 | Product catalog and master data |
| `customers` | 12 | Customer master data |
| `suppliers` | 12 | Supplier master data |
| `facilities` | 12 | Facility/warehouse data |
| `demands` | 12 | Demand forecasting and patterns |
| `inventorys` | 12 | On-hand inventory, movements, projections |
| `net_scenario` | 12 | Network scenario management for risk modeling |
| `snop` | 12 | S&OP planning modules |

### Supply Chain Entity Features
`vehicleTypes`, `vehicleselections`, `units`, `unitconversions`, `shipping`, `sourcing`, `tariffs`, `timewindow`, `paymentterms`, `paths`, `orderingrules`, `periods`, `periodgroups`, `processingcost`, `processingtime`, `productflows`, `productgroups`, `production_no`, `productstorages`, `salesbatches`, `sitestatechanges`, `loadingunloadinggates`, `locationgroups`, `milkruns`, `linearranges`, `indicatorconstraints`, `customconstraints`, `co2facilities`, `co2processings`, `coglocations`, `boms`, `bomcomponents`, `assetsconstraints`, `demandforecast`, `demandfuilfillment`, `demandbydistance`, `distancebydemands`, `events`, `facilityexpenses`, `factories`, `fleets`, `groups`

---

## 8. Analysis Data (Kendo Charts)

Located in `app/data/analysis/`. 34 JSX files providing structured data for Kendo React chart components across the analytics dashboards.

### Demand & Sales
| File | Metrics |
|------|---------|
| `demandData.jsx` | Bookings, revenue trends, top customer analysis, on-time shipment performance |
| `pipelineData.jsx` | Sales pipeline stages and conversion |
| `quoteData.jsx` | Quote win/loss rates |
| `winData.jsx` / `wonData.jsx` | Sales won and win-rate analysis |
| `shapedemand.jsx` | Demand shaping scenarios |

### Inventory & Supply
| File | Metrics |
|------|---------|
| `inventoryData.jsx` | On-hand by items/DCs/categories, movements by region, waterfall charts |
| `inventorycostData.jsx` | Cost trends, inventory valuation, item cost analysis |
| `safetyData.jsx` | Safety stock levels and calculations |
| `supplyData.jsx` | Supply chain performance metrics |
| `underData.jsx` | Underutilization analysis |

### Financial & Cost
| File | Metrics |
|------|---------|
| `costData.jsx` | Cost breakdown and trending |
| `profitData.jsx` | Profit and margin analysis |
| `expenseData.jsx` | Operational expenses |
| `opexpenseData.jsx` | Operating expense analysis |
| `savingsData.jsx` | Cost savings tracking |
| `cashaccounts.jsx` | Cash account data |
| `payableData.jsx` | Payables and vendor metrics |

### Procurement & Sourcing
| File | Metrics |
|------|---------|
| `procureData.jsx` | Procurement KPIs and spend |
| `agreementData.jsx` | Contract and SLA metrics |
| `offContractData.jsx` | Off-contract spend analysis |
| `poGoverData.jsx` | PO governance metrics |
| `spendData.jsx` | Spend analytics by category/vendor |

### Operations & Manufacturing
| File | Metrics |
|------|---------|
| `performanceData.jsx` | KPI dashboards and performance metrics |
| `serviceData.jsx` | Service level metrics |
| `proEfficencyData.jsx` | Production efficiency KPIs |
| `mfgperData.jsx` | Manufacturing performance |
| `mfgquaData.jsx` | Manufacturing quality |
| `ontimeData.jsx` | On-time delivery metrics |
| `workerData.jsx` | Labor and workforce metrics |

### SKU & Category
| File | Metrics |
|------|---------|
| `skuData.jsx` | SKU-level analytics |
| `skuProData.jsx` | SKU profitability |
| `categoryData.jsx` | Category performance |

### Executive / Overview
| File | Metrics |
|------|---------|
| `scmOverviewData.jsx` | SCM executive overview dashboard |
| `actionData.jsx` | Action items tracking |

---

## 9. AG Grid SNOP Data Generators

Located in `app/data/agGrid/snop/`. High-dimensional JavaScript data generators powering the AG Grid pivot/grouping views in the S&OP dashboards.

### Demand Module (`demand/`)
| File | Dimensions |
|------|-----------|
| `consensusForecast.js` | Items × Customers × Sites × Forecast Types (Sales / Marketing / Financial) × Months |
| `forecastAccuracy.js` | Forecast vs Actual comparison with accuracy percentage metrics |

### Inventory Module (`inventory/`)
| File | Dimensions |
|------|-----------|
| `inventoryOnHand.js` | Items × Customers × Sites × Measures (Opening / Inbound / Outbound / Closing) × Months |
| `inventoryProjection.js` | Future inventory projections by period |
| `demandHeatMap.js` | Demand pattern heatmap across locations and time |
| `excessDeficit.js` | Excess/deficit inventory flags by item and location |
| `simulationChart.js` | Monte Carlo simulation result charting data |

---

## Summary

| Area | Count |
|------|-------|
| Shared UI components | 140+ files |
| Merchandizing optimizer routes | 20 pages |
| SNOP optimization engines | 5 (DRP, MRP, Omni, Production, Reverse) |
| Risk scenario/experiment types | 5 |
| Map/flow component groups | 5 |
| Data table variants | 7 |
| Feature modules | 54 |
| Analysis data files (Kendo) | 34 |
| AG Grid data generators | 7 |
