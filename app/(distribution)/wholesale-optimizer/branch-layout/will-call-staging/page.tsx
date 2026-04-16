import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WillCallStagingPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L3 · Branch Layout · Weekly</p>
        <h1 className="text-2xl font-bold tracking-tight">Will-Call Staging</h1>
        <p className="text-muted-foreground mt-1">
          Contractor pickup prioritization and staging lane assignment. Platinum contractors get dedicated staging lanes with reserved spots. Reduces average will-call wait from 12 minutes to 4 minutes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { tier: "Platinum", lanes: 2, reserved: true, avg_wait: "2 min", color: "bg-slate-100" },
          { tier: "Gold", lanes: 2, reserved: false, avg_wait: "4 min", color: "bg-yellow-50" },
          { tier: "Silver / Transactional", lanes: 3, reserved: false, avg_wait: "7 min", color: "bg-slate-50" },
          { tier: "Counter sales", lanes: 1, reserved: false, avg_wait: "5 min", color: "bg-slate-50" },
        ].map(({ tier, lanes, reserved, avg_wait, color }) => (
          <Card key={tier} className={color}>
            <CardHeader className="pb-1">
              <CardTitle className="text-sm">{tier}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              <p><span className="text-muted-foreground">Lanes:</span> {lanes}</p>
              <p><span className="text-muted-foreground">Avg wait:</span> <span className="font-semibold">{avg_wait}</span></p>
              {reserved && <Badge className="bg-slate-200 text-slate-800 text-xs">Reserved</Badge>}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Peak Hour Staging Queue — Atlanta Hub (7:00–9:00 AM)</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2 text-muted-foreground">
          <p>Peak will-call demand: 34 contractor pickups/hour. Lane utilization at peak: Platinum 88%, Gold 72%, Silver/Transactional 91%.</p>
          <p>Pre-staged percentage (orders staged before contractor arrival): <span className="font-semibold text-foreground">84%</span> — driven by contractor ETA text notifications sent 30 min before estimated arrival.</p>
          <p>Lines per will-call transaction (copper fittings): avg 8.4 lines / 22 units.</p>
        </CardContent>
      </Card>
    </div>
  );
}
