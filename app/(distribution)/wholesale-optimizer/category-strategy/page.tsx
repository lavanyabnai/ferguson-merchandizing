import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, GitBranch, Network } from "lucide-react";

const MODULES = [
  {
    title: "Category Tiers",
    description: "Classify product categories by strategic importance (critical / leverage / routine / commodity) and define supplier strategy per tier.",
    href: "/wholesale-optimizer/category-strategy/category-tiers",
    icon: Layers,
  },
  {
    title: "Supplier Consolidation",
    description: "Identify consolidation opportunities across overlapping suppliers within a category while protecting fill-rate and lead-time commitments.",
    href: "/wholesale-optimizer/category-strategy/supplier-consolidation",
    icon: GitBranch,
  },
  {
    title: "BOM Affinity Graph",
    description: "Mine project bill-of-materials for co-purchase patterns. Identifies SKU bundles and cross-sell opportunities from contractor job tickets.",
    href: "/wholesale-optimizer/category-strategy/bom-affinity",
    icon: Network,
  },
];

export default function CategoryStrategyPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L0 · Annual</p>
        <h1 className="text-2xl font-bold tracking-tight">Category Strategy</h1>
        <p className="text-muted-foreground mt-1">
          Strategic category segmentation, supplier consolidation planning, and project-BOM affinity analysis for the copper fittings category.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {MODULES.map(({ title, description, href, icon: Icon }) => (
          <Link key={title} href={href}>
            <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-2">
                <Icon className="h-5 w-5 text-teal-600" />
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
