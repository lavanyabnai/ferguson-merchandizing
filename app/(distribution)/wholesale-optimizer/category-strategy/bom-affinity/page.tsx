import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BomAffinityPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L0 · Category Strategy · Annual</p>
        <h1 className="text-2xl font-bold tracking-tight">BOM Affinity Graph</h1>
        <p className="text-muted-foreground mt-1">
          Project bill-of-materials co-purchase analysis. Identifies SKU bundles and cross-sell opportunities from 12,400 contractor job tickets in the Southeast region.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Job tickets analyzed</CardTitle>
            <p className="text-3xl font-bold">12,400</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Strong affinity pairs</CardTitle>
            <p className="text-3xl font-bold text-indigo-600">847</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Bundle opportunities</CardTitle>
            <p className="text-3xl font-bold text-teal-600">23</p>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Top SKU Affinity Pairs — Copper Fittings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            {[
              { sku_a: "1/2\" Cu Press 90° Elbow", sku_b: "1/2\" Cu Press Coupling", lift: 4.2, support: "38%", project: "Residential new" },
              { sku_a: "3/4\" Cu Press Tee", sku_b: "3/4\" Cu Press Ball Valve", lift: 3.8, support: "31%", project: "Commercial" },
              { sku_a: "1\" Cu Solder 90° Elbow", sku_b: "1\" Cu Solder Coupling", lift: 3.5, support: "29%", project: "Residential reno" },
              { sku_a: "1/2\" CPVC Tee", sku_b: "1/2\" CPVC Cement Kit", lift: 6.1, support: "44%", project: "Residential new" },
              { sku_a: "2\" Cu Press Reducer", sku_b: "2\" Cu Press Coupling", lift: 2.9, support: "22%", project: "Commercial" },
            ].map(({ sku_a, sku_b, lift, support, project }) => (
              <div key={sku_a} className="flex items-center justify-between py-2 border-b last:border-0">
                <div className="flex-1">
                  <p className="font-medium">{sku_a}</p>
                  <p className="text-muted-foreground text-xs">+ {sku_b}</p>
                </div>
                <div className="flex items-center gap-3 text-right">
                  <div>
                    <p className="font-semibold text-indigo-600">Lift {lift}×</p>
                    <p className="text-xs text-muted-foreground">Support {support}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">{project}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
