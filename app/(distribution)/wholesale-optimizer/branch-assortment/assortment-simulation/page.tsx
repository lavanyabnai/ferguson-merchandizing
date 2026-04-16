import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AssortmentSimulationPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L2 · Branch Assortment · Monthly</p>
        <h1 className="text-2xl font-bold tracking-tight">Assortment Simulation</h1>
        <p className="text-muted-foreground mt-1">
          Monte Carlo fill-rate distribution under the proposed branch assortment. 5,000 demand trials using SKU-level intermittent demand parameters. Outputs P5/P50/P95 fill-rate confidence intervals per contractor tier.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Trials", value: "5,000" },
          { label: "SKUs modeled", value: "8,000" },
          { label: "Branches", value: "180" },
        ].map(({ label, value }) => (
          <Card key={label}>
            <CardHeader className="pb-1">
              <CardTitle className="text-sm text-muted-foreground font-normal">{label}</CardTitle>
              <p className="text-3xl font-bold">{value}</p>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Simulated Fill Rate — P5 / P50 / P95 by Contractor Tier</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="grid grid-cols-5 text-xs font-medium text-muted-foreground pb-2 border-b">
              <span>Tier</span>
              <span className="text-right">Target</span>
              <span className="text-right">P5</span>
              <span className="text-right">P50 (median)</span>
              <span className="text-right">P95</span>
            </div>
            {[
              { tier: "Platinum", target: "99.0%", p5: "97.8%", p50: "98.9%", p95: "99.6%", met: true },
              { tier: "Gold", target: "97.0%", p5: "96.1%", p50: "97.4%", p95: "98.3%", met: true },
              { tier: "Silver", target: "95.0%", p5: "93.8%", p50: "95.6%", p95: "97.1%", met: true },
              { tier: "Transactional", target: "92.0%", p5: "90.2%", p50: "92.8%", p95: "94.9%", met: true },
            ].map(({ tier, target, p5, p50, p95, met }) => (
              <div key={tier} className="grid grid-cols-5 py-2 border-b last:border-0">
                <span className="font-medium">{tier}</span>
                <span className="text-right text-muted-foreground">{target}</span>
                <span className={`text-right ${met ? "text-amber-600" : "text-red-600"}`}>{p5}</span>
                <span className="text-right font-semibold text-green-600">{p50}</span>
                <span className="text-right text-green-600">{p95}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            P5 represents the 5th-percentile outcome — worst-case 1-in-20 demand scenario. Target is met at the P50 level for all tiers, with platinum approaching target at P5.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
