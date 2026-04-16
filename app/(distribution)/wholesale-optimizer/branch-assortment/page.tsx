import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, PackageSearch, AlertTriangle, BarChart3 } from "lucide-react";

const MODULES = [
  {
    title: "Branch Clustering",
    description: "KMeans segmentation on contractor mix (residential/commercial/industrial), purchase volume, and geography. Groups 180 branches into 6 archetypes.",
    href: "/wholesale-optimizer/branch-assortment/branch-clustering",
    icon: Cpu,
  },
  {
    title: "Stocking Policy Optimizer",
    description: "Greedy classifier assigns carry / hub-replenish / special-order per SKU-branch pair subject to service-level and capital constraints.",
    href: "/wholesale-optimizer/branch-assortment/stocking-policy-optimizer",
    icon: PackageSearch,
  },
  {
    title: "Delist Analysis",
    description: "Dead stock identification: zero-velocity SKUs over 180 days with supplier return eligibility scoring.",
    href: "/wholesale-optimizer/branch-assortment/delist-analysis",
    icon: AlertTriangle,
  },
  {
    title: "Assortment Simulation",
    description: "Monte Carlo fill-rate distribution under proposed branch assortment — 5,000 demand trials, P5/P50/P95 confidence intervals.",
    href: "/wholesale-optimizer/branch-assortment/assortment-simulation",
    icon: BarChart3,
  },
];

export default function BranchAssortmentPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L2 · Monthly</p>
        <h1 className="text-2xl font-bold tracking-tight">Branch Assortment</h1>
        <p className="text-muted-foreground mt-1">
          Per-branch carry / hub-replenish / special-order classification constrained by service-level targets. A branch doesn&apos;t &quot;assort&quot; SKUs — it decides the fulfillment path for each SKU.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MODULES.map(({ title, description, href, icon: Icon }) => (
          <Link key={title} href={href}>
            <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-2">
                <Icon className="h-5 w-5 text-violet-600" />
                <CardTitle className="text-base mt-1">{title}</CardTitle>
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
