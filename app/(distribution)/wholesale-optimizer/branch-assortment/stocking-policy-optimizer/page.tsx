import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StockingPolicyOptimizerPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L2 · Branch Assortment · Monthly</p>
        <h1 className="text-2xl font-bold tracking-tight">Stocking Policy Optimizer</h1>
        <p className="text-muted-foreground mt-1">
          Greedy service-level constrained classifier. For each SKU-branch pair: compute marginal fill-rate gain per $ of inventory. Assign &quot;carry&quot; until fill-rate target is met, then downgrade remaining SKUs to hub-replenish or special-order.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-sm text-muted-foreground font-normal">SKU-branch pairs evaluated</CardTitle>
            <p className="text-3xl font-bold">1.44M</p>
          </CardHeader>
          <CardContent><p className="text-xs text-muted-foreground">8,000 SKUs × 180 branches</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-sm text-muted-foreground font-normal">Policy changes vs. prior run</CardTitle>
            <p className="text-3xl font-bold text-amber-600">+4,820</p>
          </CardHeader>
          <CardContent><p className="text-xs text-muted-foreground">Driven by Q2 demand forecast update</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-sm text-muted-foreground font-normal">Working capital saved</CardTitle>
            <p className="text-3xl font-bold text-green-600">$2.1M</p>
          </CardHeader>
          <CardContent><p className="text-xs text-muted-foreground">vs. blanket carry-all baseline</p></CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Policy Logic — Decision Hierarchy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          {[
            { policy: "carry", trigger: "Fill-rate contribution per $ exceeds threshold AND branch cluster demands ≥ 4 units/yr", color: "bg-green-100 text-green-800" },
            { policy: "hub_replenish", trigger: "Same-day delivery from hub branch achievable AND demand < carry threshold", color: "bg-blue-100 text-blue-800" },
            { policy: "regional_replenish", trigger: "Next-day delivery from regional DC acceptable AND hub can't stock", color: "bg-violet-100 text-violet-800" },
            { policy: "special_order", trigger: "Annual demand < 2 units OR category tier = Commodity", color: "bg-amber-100 text-amber-800" },
            { policy: "drop_ship", trigger: "Supplier offers direct-ship AND order lead time < customer SLA", color: "bg-slate-100 text-slate-800" },
          ].map(({ policy, trigger, color }) => (
            <div key={policy} className="flex items-start gap-3">
              <Badge className={`text-xs mt-0.5 shrink-0 ${color}`}>{policy}</Badge>
              <p className="text-muted-foreground">{trigger}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
