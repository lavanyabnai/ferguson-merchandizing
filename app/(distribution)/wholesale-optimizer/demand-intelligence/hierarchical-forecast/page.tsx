import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HierarchicalForecastPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L0.5 · Demand Intelligence · Continuous</p>
        <h1 className="text-2xl font-bold tracking-tight">Hierarchical Forecast</h1>
        <p className="text-muted-foreground mt-1">
          Region → regional DC → branch → SKU reconciliation via MinT (minimum trace reconciliation). Ensures forecasts are coherent — branch forecasts sum to DC totals, DC totals sum to region.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { level: "Region (Southeast)", nodes: 1, method: "LightGBM + external signals", mape: "4.2%" },
          { level: "Regional DC", nodes: 3, method: "ETS / Croston per category", mape: "6.8%" },
          { level: "Branch", nodes: 180, method: "SBA / TSB per SKU class", mape: "14.1%" },
        ].map(({ level, nodes, method, mape }) => (
          <Card key={level}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">{level}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              <p><span className="text-muted-foreground">Nodes:</span> {nodes}</p>
              <p><span className="text-muted-foreground">Method:</span> {method}</p>
              <p><span className="text-muted-foreground">MAPE:</span> <span className="font-semibold">{mape}</span></p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Reconciliation — MinT Method</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>MinT reconciliation minimizes the trace of the covariance matrix of reconciliation errors, producing coherent forecasts that are also more accurate than base forecasts at the branch level.</p>
          <p>For the copper fittings category: 13.4% reduction in WRMSSE vs. unreconciled branch forecasts in backtesting over 52 weeks (FL/GA branches, 2023 holdout).</p>
          <p className="font-medium text-foreground">Seasonal adjustment: +18% Q2 (Apr-Jun), +22% Q3 (Jul-Sep) based on housing permit cycle in FL/GA.</p>
        </CardContent>
      </Card>
    </div>
  );
}
