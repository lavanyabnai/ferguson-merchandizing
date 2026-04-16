import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DelistAnalysisPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L2 · Branch Assortment · Monthly</p>
        <h1 className="text-2xl font-bold tracking-tight">Delist Analysis</h1>
        <p className="text-muted-foreground mt-1">
          Dead stock identification across 180 branches. SKUs with zero velocity over 180 days, scored for supplier return eligibility and capital recovery potential.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Dead SKU-locations", value: "3,840", sub: "≥180 days zero velocity" },
          { label: "Capital tied up", value: "$4.2M", sub: "At cost, Southeast region" },
          { label: "Supplier returnable", value: "$1.8M", sub: "43% recovery opportunity" },
          { label: "Write-off candidates", value: "$0.9M", sub: "No return program available" },
        ].map(({ label, value, sub }) => (
          <Card key={label}>
            <CardHeader className="pb-1">
              <CardTitle className="text-sm text-muted-foreground font-normal">{label}</CardTitle>
              <p className="text-2xl font-bold">{value}</p>
            </CardHeader>
            <CardContent><p className="text-xs text-muted-foreground">{sub}</p></CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Top Dead Stock SKUs — Copper Fittings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            {[
              { sku: "6\" Cu Press Reducing Tee", branches: 14, days_zero: 284, value: "$48K", returnable: true, reason: "Spec change — replaced by grooved" },
              { sku: "5\" Cu Solder 90° Elbow", branches: 8, days_zero: 312, value: "$31K", returnable: true, reason: "Non-standard size, low demand" },
              { sku: "4\" Cu Press Union", branches: 22, days_zero: 241, value: "$62K", returnable: false, reason: "Discontinued SKU, no return program" },
              { sku: "3.5\" Cu Solder Cap", branches: 6, days_zero: 410, value: "$12K", returnable: true, reason: "Superseded by 4\" adapter" },
            ].map(({ sku, branches, days_zero, value, returnable, reason }) => (
              <div key={sku} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">{sku}</p>
                  <p className="text-xs text-muted-foreground">{branches} branches · {days_zero} days zero velocity · {reason}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold">{value}</span>
                  <Badge className={returnable ? "bg-green-100 text-green-800 text-xs" : "bg-red-100 text-red-800 text-xs"}>
                    {returnable ? "Returnable" : "Write-off"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
