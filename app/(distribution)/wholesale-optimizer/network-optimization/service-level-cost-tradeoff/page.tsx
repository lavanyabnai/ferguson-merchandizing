import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TRADEOFF_POINTS = [
  { fill_rate: "92.0%", inventory_cost: "$8.4M", tier_miss: "Silver, Transactional", label: "Budget min" },
  { fill_rate: "95.0%", inventory_cost: "$10.2M", tier_miss: "Platinum partial", label: "" },
  { fill_rate: "97.0%", inventory_cost: "$11.8M", tier_miss: "None", label: "Gold threshold" },
  { fill_rate: "98.4%", inventory_cost: "$13.7M", tier_miss: "None", label: "Optimal (current plan)" },
  { fill_rate: "99.0%", inventory_cost: "$16.1M", tier_miss: "None", label: "Platinum full" },
  { fill_rate: "99.5%", inventory_cost: "$20.8M", tier_miss: "None", label: "Upper bound" },
];

export default function ServiceLevelCostTradeoffPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L1 · Network Optimization · Quarterly</p>
        <h1 className="text-2xl font-bold tracking-tight">Fill Rate vs. Cost Tradeoff</h1>
        <p className="text-muted-foreground mt-1">
          Pareto frontier of inventory investment vs. achieved weighted fill rate. Service level is a hard constraint per contractor tier — cost is the objective. This curve reveals the working capital cost of each tier&apos;s fill-rate promise.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Pareto Frontier — Copper Fittings, Southeast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="grid grid-cols-4 text-xs font-medium text-muted-foreground pb-2 border-b">
              <span>Fill Rate</span>
              <span>Inventory $</span>
              <span>Tier Constraints</span>
              <span>Label</span>
            </div>
            {TRADEOFF_POINTS.map(({ fill_rate, inventory_cost, tier_miss, label }) => (
              <div
                key={fill_rate}
                className={`grid grid-cols-4 py-2 border-b last:border-0 ${label === "Optimal (current plan)" ? "bg-indigo-50 rounded px-2 font-semibold" : ""}`}
              >
                <span className={label === "Optimal (current plan)" ? "text-indigo-700" : ""}>{fill_rate}</span>
                <span>{inventory_cost}</span>
                <span className={tier_miss === "None" ? "text-green-600" : "text-amber-600"}>{tier_miss === "None" ? "All met" : `Miss: ${tier_miss}`}</span>
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Moving from 97% to 98.4% fill rate requires $1.9M additional inventory. Each 0.5% fill-rate gain above 98% costs ~$2.1M in incremental working capital. This is the explicit price of the platinum contractor promise.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
