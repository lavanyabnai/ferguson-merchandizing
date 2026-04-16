import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CLUSTERS = [
  { id: 1, label: "Residential New Construction", branches: 54, residential_pct: "78%", commercial_pct: "16%", avg_revenue: "$2.8M", top_skus: "Copper press, CPVC, PEX", color: "bg-green-100 text-green-800" },
  { id: 2, label: "Commercial Mechanical", branches: 38, residential_pct: "22%", commercial_pct: "62%", avg_revenue: "$4.1M", top_skus: "Grooved fittings, flanges, valves", color: "bg-blue-100 text-blue-800" },
  { id: 3, label: "Mixed Urban Contractor", branches: 31, residential_pct: "45%", commercial_pct: "38%", avg_revenue: "$3.4M", top_skus: "Press fittings, solder, ball valves", color: "bg-violet-100 text-violet-800" },
  { id: 4, label: "Industrial MRO", branches: 22, residential_pct: "12%", commercial_pct: "24%", avg_revenue: "$5.2M", top_skus: "Stainless, brass fittings, gauges", color: "bg-amber-100 text-amber-800" },
  { id: 5, label: "Rural / Low-Volume", branches: 28, residential_pct: "65%", commercial_pct: "18%", avg_revenue: "$0.9M", top_skus: "Basic copper, CPVC cement", color: "bg-slate-100 text-slate-800" },
  { id: 6, label: "Renovation Specialist", branches: 7, residential_pct: "55%", commercial_pct: "28%", avg_revenue: "$3.1M", top_skus: "Push-fit, Sharkbite, PEX crimp", color: "bg-rose-100 text-rose-800" },
];

export default function BranchClusteringPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L2 · Branch Assortment · Monthly</p>
        <h1 className="text-2xl font-bold tracking-tight">Branch Clustering</h1>
        <p className="text-muted-foreground mt-1">
          KMeans (k=6) segmentation on contractor mix (residential/commercial/industrial %), purchase volume, and geography. 180 Southeast branches segmented into 6 archetypes. Archetype drives default stocking policy and assortment depth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {CLUSTERS.map(({ id, label, branches, residential_pct, commercial_pct, avg_revenue, top_skus, color }) => (
          <Card key={id}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge className={`text-xs ${color}`}>Cluster {id}</Badge>
                <span className="text-sm text-muted-foreground">{branches} branches</span>
              </div>
              <CardTitle className="text-sm mt-1">{label}</CardTitle>
            </CardHeader>
            <CardContent className="text-xs space-y-1 text-muted-foreground">
              <p>Residential: <span className="font-semibold text-foreground">{residential_pct}</span> · Commercial: <span className="font-semibold text-foreground">{commercial_pct}</span></p>
              <p>Avg. branch revenue: <span className="font-semibold text-foreground">{avg_revenue}</span></p>
              <p>Top SKU types: {top_skus}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Clustering Features</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <p>KMeans on 8 normalized features: residential_pct, commercial_pct, industrial_pct, annual_revenue, sku_breadth, avg_order_value, platinum_contractor_count, geographic_density. Silhouette score: 0.68 at k=6 (elbow method confirmed).</p>
        </CardContent>
      </Card>
    </div>
  );
}
