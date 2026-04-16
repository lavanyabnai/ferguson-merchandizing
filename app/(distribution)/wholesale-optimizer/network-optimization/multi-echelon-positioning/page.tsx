import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const POLICY_SUMMARY = [
  { policy: "carry", label: "Carry at branch", count: 2840, pct: "35%", cost: "$8.2M", color: "bg-green-100 text-green-800" },
  { policy: "hub_replenish", label: "Hub replenish", count: 2400, pct: "30%", cost: "$3.1M", color: "bg-blue-100 text-blue-800" },
  { policy: "regional_replenish", label: "Regional DC replenish", count: 1280, pct: "16%", cost: "$1.8M", color: "bg-violet-100 text-violet-800" },
  { policy: "special_order", label: "Special order", count: 960, pct: "12%", cost: "$0.4M", color: "bg-amber-100 text-amber-800" },
  { policy: "drop_ship", label: "Drop ship", count: 520, pct: "7%", cost: "$0.2M", color: "bg-slate-100 text-slate-800" },
];

export default function MultiEchelonPositioningPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L1 · Network Optimization · Quarterly · FLAGSHIP</p>
        <h1 className="text-2xl font-bold tracking-tight">Multi-Echelon Positioning</h1>
        <p className="text-muted-foreground mt-1">
          MILP (OR-Tools) assigns a stocking policy to every SKU × branch pair across the 4-echelon hierarchy. Minimizes total holding + stockout + transfer cost subject to contractor-tier fill-rate constraints and DC capacity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-sm text-muted-foreground font-normal">Total inventory cost</CardTitle>
            <p className="text-3xl font-bold">$13.7M</p>
          </CardHeader>
          <CardContent><p className="text-xs text-muted-foreground">Southeast region · copper fittings · Q2 2024</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-sm text-muted-foreground font-normal">Weighted fill rate</CardTitle>
            <p className="text-3xl font-bold text-green-600">98.4%</p>
          </CardHeader>
          <CardContent><p className="text-xs text-muted-foreground">vs. 95.1% baseline (current state)</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-sm text-muted-foreground font-normal">Solve time</CardTitle>
            <p className="text-3xl font-bold">4m 18s</p>
          </CardHeader>
          <CardContent><p className="text-xs text-muted-foreground">8,000 SKUs × 180 branches · MILP gap 0.3%</p></CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Policy Distribution — Copper Fittings, Southeast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {POLICY_SUMMARY.map(({ label, count, pct, cost, color }) => (
              <div key={label} className="flex items-center gap-4">
                <Badge className={`text-xs w-36 justify-center ${color}`}>{label}</Badge>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div className="bg-current h-2 rounded-full" style={{ width: pct }} />
                </div>
                <span className="text-sm font-medium w-8">{pct}</span>
                <span className="text-sm text-muted-foreground w-20 text-right">{count.toLocaleString()} SKU-branches</span>
                <span className="text-sm font-semibold w-16 text-right">{cost}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">MILP Formulation</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p><span className="font-medium text-foreground">Decision variables:</span> x[s,b] ∈ &#123;carry, hub, special_order, drop_ship&#125;, stock[s,b] ≥ 0</p>
          <p><span className="font-medium text-foreground">Objective:</span> minimize Σ holding_cost[s,b] + Σ stockout_cost[s,b] + Σ transfer_cost[s,b]</p>
          <p><span className="font-medium text-foreground">Constraints:</span> fill_rate[tier] ≥ target[tier] ∀ tier; DC capacity ≤ max_capacity; working_capital ≤ budget</p>
          <p><span className="font-medium text-foreground">Solver:</span> OR-Tools CP-SAT / MILP · Benders decomposition for large instances · Gap ≤ 0.5%</p>
        </CardContent>
      </Card>
    </div>
  );
}
