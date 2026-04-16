import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DOCS = [
  { title: "Intermittent Demand Classification", href: "/wholesale-optimizer/docs/demand-classification", description: "ADI/CV² matrix, method selection rules, Croston/SBA/TSB algorithm details, MASE benchmarks." },
  { title: "Multi-Echelon MILP Formulation", href: "/wholesale-optimizer/docs/milp-formulation", description: "Full MILP model, variable/constraint definitions, Benders decomposition approach, OR-Tools configuration." },
  { title: "Branch Clustering Methodology", href: "/wholesale-optimizer/docs/branch-clustering", description: "Feature engineering, KMeans configuration, silhouette analysis, archetype profiles, retraining cadence." },
  { title: "Safety Stock Derivation", href: "/wholesale-optimizer/docs/safety-stock", description: "Service-factor tables by tier, lead-time variance estimation, cycle stock vs. safety stock split." },
  { title: "Hierarchical Reconciliation (MinT)", href: "/wholesale-optimizer/docs/hierarchy-reconciliation", description: "MinT method, covariance matrix estimation, coherency properties, WRMSSE improvement benchmarks." },
];

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Documentation</h1>
        <p className="text-muted-foreground mt-1">
          Algorithm documentation and methodology references for each WholesaleOS optimization layer.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DOCS.map(({ title, href, description }) => (
          <Link key={title} href={href}>
            <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
