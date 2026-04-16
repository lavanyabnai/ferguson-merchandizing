import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Boxes, TrendingUp } from "lucide-react";

const MODULES = [
  {
    title: "Multi-Echelon Positioning",
    description: "MILP assigns carry / hub-replenish / regional-replenish / special-order / drop-ship for every SKU-branch pair across the Central DC → Regional DC → Hub → Spoke hierarchy.",
    href: "/wholesale-optimizer/network-optimization/multi-echelon-positioning",
    icon: Network,
    flagship: true,
  },
  {
    title: "Safety Stock Optimizer",
    description: "Service-level constrained safety stock calculation by SKU × location × contractor tier. Respects platinum 99%, gold 97%, silver 95%, transactional 92% fill targets.",
    href: "/wholesale-optimizer/network-optimization/safety-stock-optimizer",
    icon: Boxes,
    flagship: false,
  },
  {
    title: "Fill Rate vs. Cost Tradeoff",
    description: "Pareto frontier: total inventory investment (working capital) vs. achieved weighted fill rate. Interactive slider for capital budget constraint.",
    href: "/wholesale-optimizer/network-optimization/service-level-cost-tradeoff",
    icon: TrendingUp,
    flagship: false,
  },
];

export default function NetworkOptimizationPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L1 · Quarterly</p>
        <h1 className="text-2xl font-bold tracking-tight">Network Optimization</h1>
        <p className="text-muted-foreground mt-1">
          Multi-echelon inventory positioning — the flagship WholesaleOS module. Inventory positioning is the wholesale equivalent of space allocation, but 10× higher stakes. Every dollar of working capital in the wrong branch is a dollar not earning margin.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {MODULES.map(({ title, description, href, icon: Icon, flagship }) => (
          <Link key={title} href={href}>
            <Card className={`h-full hover:shadow-md transition-shadow cursor-pointer ${flagship ? "border-indigo-300 bg-indigo-50/40" : ""}`}>
              <CardHeader className="pb-2">
                <Icon className={`h-5 w-5 ${flagship ? "text-indigo-600" : "text-slate-500"}`} />
                <div className="flex items-center gap-2 mt-1">
                  <CardTitle className="text-base">{title}</CardTitle>
                  {flagship && <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full font-medium">Flagship</span>}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
