import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StockoutAlertsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L4 · Execution · Daily</p>
        <h1 className="text-2xl font-bold tracking-tight">Stockout Alerts</h1>
        <p className="text-muted-foreground mt-1">
          Exception-based alerts triggered when on-hand inventory at a branch drops below the safety stock threshold. Platinum-tier SKUs trigger immediate Slack notification to branch manager.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Active alerts", value: "28", color: "text-red-600" },
          { label: "Platinum-tier alerts", value: "4", color: "text-red-600" },
          { label: "Avg days to resupply", value: "1.4", color: "text-amber-600" },
        ].map(({ label, value, color }) => (
          <Card key={label}>
            <CardHeader className="pb-1">
              <CardTitle className="text-sm text-muted-foreground font-normal">{label}</CardTitle>
              <p className={`text-3xl font-bold ${color}`}>{value}</p>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Active Stockout Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            {[
              { sku: "3/4\" Cu Press Ball Valve", branch: "Tampa Spoke", on_hand: 0, safety_stock: 12, tier: "Platinum", age_hrs: 6 },
              { sku: "1\" Cu Press 90° Elbow", branch: "Savannah Spoke", on_hand: 3, safety_stock: 18, tier: "Gold", age_hrs: 14 },
              { sku: "1/2\" Cu Press Tee", branch: "Charlotte Hub", on_hand: 8, safety_stock: 24, tier: "Platinum", age_hrs: 2 },
              { sku: "2\" Cu Press Coupling", branch: "Mobile Spoke", on_hand: 1, safety_stock: 8, tier: "Silver", age_hrs: 28 },
            ].map(({ sku, branch, on_hand, safety_stock, tier, age_hrs }) => (
              <div key={`${sku}-${branch}`} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">{sku}</p>
                  <p className="text-xs text-muted-foreground">{branch} · On-hand: {on_hand} / SS: {safety_stock} · Alert age: {age_hrs}h</p>
                </div>
                <Badge className={tier === "Platinum" ? "bg-red-100 text-red-800 text-xs" : tier === "Gold" ? "bg-amber-100 text-amber-800 text-xs" : "bg-blue-100 text-blue-800 text-xs"}>
                  {tier}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
