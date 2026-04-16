import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, BarChart3, Layers, PackageSearch, Warehouse, Activity } from "lucide-react";

const LAYERS = [
  {
    layer: "L0",
    label: "Category Strategy",
    cadence: "Annual",
    description: "Strategic category segmentation, supplier consolidation plan, and project-BOM affinity graph.",
    href: "/wholesale-optimizer/category-strategy",
    icon: Layers,
    color: "bg-teal-50 border-teal-200",
    badge: "bg-teal-100 text-teal-800",
  },
  {
    layer: "L0.5",
    label: "Demand Intelligence",
    cadence: "Continuous",
    description: "Hierarchical demand forecasting with Croston / SBA / TSB for lumpy-demand SKUs and external leading signals.",
    href: "/wholesale-optimizer/demand-intelligence",
    icon: BarChart3,
    color: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-800",
  },
  {
    layer: "L1",
    label: "Network Optimization",
    cadence: "Quarterly",
    description: "Multi-echelon inventory positioning: which SKUs stock at branch / regional DC / central DC / drop-ship.",
    href: "/wholesale-optimizer/network-optimization",
    icon: Network,
    color: "bg-indigo-50 border-indigo-200",
    badge: "bg-indigo-100 text-indigo-800",
  },
  {
    layer: "L2",
    label: "Branch Assortment",
    cadence: "Monthly",
    description: "Per-branch carry / hub-replenish / special-order classification constrained by service-level targets.",
    href: "/wholesale-optimizer/branch-assortment",
    icon: PackageSearch,
    color: "bg-violet-50 border-violet-200",
    badge: "bg-violet-100 text-violet-800",
  },
  {
    layer: "L3",
    label: "Branch Layout",
    cadence: "Weekly",
    description: "ABC velocity slotting, pick-path optimization, zone assignments, and will-call staging.",
    href: "/wholesale-optimizer/branch-layout",
    icon: Warehouse,
    color: "bg-amber-50 border-amber-200",
    badge: "bg-amber-100 text-amber-800",
  },
  {
    layer: "L4",
    label: "Execution Monitoring",
    cadence: "Daily",
    description: "Fill-rate, stockout, dead-stock, and supplier SLA tracking with exception alerts.",
    href: "/wholesale-optimizer/execution",
    icon: Activity,
    color: "bg-green-50 border-green-200",
    badge: "bg-green-100 text-green-800",
  },
];

export default function WholesaleOptimizerPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">WholesaleOS — Distribution Optimizer</h1>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          Six-layer optimization platform for wholesale distributors. Demo scenario:{" "}
          <span className="font-medium text-foreground">
            Ferguson Southeast Region — Copper Fittings (180 branches · 3 regional DCs · ~8,000 SKUs)
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {LAYERS.map(({ layer, label, cadence, description, href, icon: Icon, color, badge }) => (
          <Link key={layer} href={href}>
            <Card className={`h-full border hover:shadow-md transition-shadow cursor-pointer ${color}`}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    <span className="text-xs font-mono font-semibold">{layer}</span>
                  </div>
                  <Badge variant="secondary" className={`text-xs ${badge}`}>
                    {cadence}
                  </Badge>
                </div>
                <CardTitle className="text-base mt-1">{label}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="rounded-lg border bg-muted/30 p-4">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Demo scenario:</span> FL / GA / AL / SC / NC · 60% residential plumbing contractors · 25% commercial · 15% industrial MRO · 20% Q2/Q3 seasonal lift from new construction · FL/GA housing starts as leading indicator.
        </p>
      </div>
    </div>
  );
}
