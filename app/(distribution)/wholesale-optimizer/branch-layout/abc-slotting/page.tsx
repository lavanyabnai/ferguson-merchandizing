import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AbcSlottingPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L3 · Branch Layout · Weekly</p>
        <h1 className="text-2xl font-bold tracking-tight">ABC Slotting</h1>
        <p className="text-muted-foreground mt-1">
          Velocity-based zone assignment for the Atlanta hub branch (26,000 sq ft). A items (top 20% pick frequency) at golden zone; B items at secondary; C items in reserve racking.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { zone: "A — Golden Zone", skus: 1600, pct_picks: "72%", location: "Rows 1-4, ground level", color: "bg-green-50 border-green-200" },
          { zone: "B — Secondary Zone", skus: 2400, pct_picks: "22%", location: "Rows 5-12, all levels", color: "bg-amber-50 border-amber-200" },
          { zone: "C — Reserve", skus: 4000, pct_picks: "6%", location: "Rows 13-24, upper levels", color: "bg-slate-50 border-slate-200" },
        ].map(({ zone, skus, pct_picks, location, color }) => (
          <Card key={zone} className={`border ${color}`}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">{zone}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              <p><span className="text-muted-foreground">SKUs:</span> <span className="font-semibold">{skus.toLocaleString()}</span></p>
              <p><span className="text-muted-foreground">Pick volume:</span> <span className="font-semibold">{pct_picks}</span></p>
              <p className="text-xs text-muted-foreground">{location}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Top A-Zone SKUs — Atlanta Hub Branch</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            {[
              { sku: "1/2\" Cu Press 90° Elbow", picks_week: 284, slot: "A-01-001", weight_kg: 0.08 },
              { sku: "3/4\" Cu Press 90° Elbow", picks_week: 241, slot: "A-01-002", weight_kg: 0.14 },
              { sku: "1/2\" Cu Press Coupling", picks_week: 218, slot: "A-01-003", weight_kg: 0.06 },
              { sku: "1/2\" Cu Press Tee", picks_week: 196, slot: "A-01-004", weight_kg: 0.11 },
              { sku: "3/4\" Cu Press Coupling", picks_week: 184, slot: "A-01-005", weight_kg: 0.12 },
            ].map(({ sku, picks_week, slot, weight_kg }) => (
              <div key={sku} className="flex items-center justify-between py-2 border-b last:border-0">
                <p className="font-medium">{sku}</p>
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span>{picks_week} picks/wk</span>
                  <span>{weight_kg} kg</span>
                  <Badge variant="outline" className="font-mono text-xs">{slot}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
