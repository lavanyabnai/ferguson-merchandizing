import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SIGNALS = [
  { type: "Housing Starts", region: "FL Metro", period: "2024-W14", value: "14,820 units annualized", change: "+8.3%", source: "Census Bureau", lag: "4 weeks" },
  { type: "Housing Starts", region: "GA Metro", period: "2024-W14", value: "9,410 units annualized", change: "+5.1%", source: "Census Bureau", lag: "4 weeks" },
  { type: "Building Permits", region: "FL Statewide", period: "2024-03", value: "18,240", change: "+12.1%", source: "Census Bureau", lag: "6 weeks" },
  { type: "Building Permits", region: "GA Statewide", period: "2024-03", value: "11,680", change: "+7.4%", source: "Census Bureau", lag: "6 weeks" },
  { type: "Construction Spending", region: "Southeast", period: "2024-03", value: "$42.1B annualized", change: "+3.8%", source: "Census Bureau", lag: "8 weeks" },
  { type: "Weather Forecast", region: "FL", period: "2024-W16", value: "No severe events", change: "—", source: "NOAA", lag: "Real-time" },
];

export default function ExternalSignalsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L0.5 · Demand Intelligence · Continuous</p>
        <h1 className="text-2xl font-bold tracking-tight">External Signals</h1>
        <p className="text-muted-foreground mt-1">
          Leading indicators from Census Bureau and NOAA integrated into the L0.5 demand model. Housing starts lead copper fittings demand by ~6 weeks in the Southeast.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Active Signal Feed — Southeast Region</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {SIGNALS.map(({ type, region, period, value, change, source, lag }) => (
              <div key={`${type}-${region}`} className="flex items-center justify-between py-2 border-b last:border-0 text-sm">
                <div>
                  <p className="font-medium">{type}</p>
                  <p className="text-xs text-muted-foreground">{region} · {period} · Source: {source}</p>
                </div>
                <div className="flex items-center gap-3 text-right">
                  <div>
                    <p className="font-semibold">{value}</p>
                    <p className={`text-xs ${change.startsWith("+") ? "text-green-600" : "text-muted-foreground"}`}>{change} YoY</p>
                  </div>
                  <Badge variant="outline" className="text-xs">Lag: {lag}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Correlation with Copper Fittings Demand</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2 text-muted-foreground">
          <p>FL housing starts at 6-week lag: <span className="font-semibold text-foreground">r = 0.74</span></p>
          <p>GA building permits at 8-week lag: <span className="font-semibold text-foreground">r = 0.68</span></p>
          <p>Southeast construction spend at 10-week lag: <span className="font-semibold text-foreground">r = 0.61</span></p>
          <p className="pt-2">Signals are included as external regressors in the LightGBM regional forecast. Branch-level models use the nearest MSA permit data with an adaptive lag estimated via cross-correlation analysis.</p>
        </CardContent>
      </Card>
    </div>
  );
}
