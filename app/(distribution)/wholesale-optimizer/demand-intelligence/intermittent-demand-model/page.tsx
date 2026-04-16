import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SKU_SAMPLE = [
  { sku: "1/2\" Cu Press 90° Elbow", adi: 1.1, cv2: 0.08, classification: "smooth", method: "ets", color: "bg-green-100 text-green-800" },
  { sku: "3\" Cu Press Reducing Tee", adi: 2.4, cv2: 0.62, classification: "intermittent", method: "sba", color: "bg-blue-100 text-blue-800" },
  { sku: "4\" Cu Press 45° Elbow", adi: 4.8, cv2: 0.38, classification: "intermittent", method: "croston", color: "bg-blue-100 text-blue-800" },
  { sku: "1.5\" Cu Press Union", adi: 3.2, cv2: 1.45, classification: "erratic", method: "tsb", color: "bg-amber-100 text-amber-800" },
  { sku: "6\" Cu Press Coupling", adi: 6.1, cv2: 2.10, classification: "lumpy", method: "tsb", color: "bg-red-100 text-red-800" },
  { sku: "8\" Cu Press End Cap", adi: 9.3, cv2: 3.40, classification: "lumpy", method: "lightgbm", color: "bg-red-100 text-red-800" },
];

export default function IntermittentDemandModelPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L0.5 · Demand Intelligence · Continuous</p>
        <h1 className="text-2xl font-bold tracking-tight">Intermittent Demand Model</h1>
        <p className="text-muted-foreground mt-1">
          ADI / CV² classification matrix routes each SKU to the appropriate forecasting method: ETS (smooth), Croston (intermittent), SBA (intermittent), TSB (lumpy/erratic), or LightGBM (extreme lumpy).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Smooth", count: "2,841", pct: "35%", color: "bg-green-50 border-green-200" },
          { label: "Intermittent", count: "2,480", pct: "31%", color: "bg-blue-50 border-blue-200" },
          { label: "Erratic", count: "1,680", pct: "21%", color: "bg-amber-50 border-amber-200" },
          { label: "Lumpy", count: "1,000", pct: "13%", color: "bg-red-50 border-red-200" },
        ].map(({ label, count, pct, color }) => (
          <Card key={label} className={`border ${color}`}>
            <CardHeader className="pb-1">
              <CardTitle className="text-sm">{label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{count}</p>
              <p className="text-xs text-muted-foreground">{pct} of copper fittings SKUs</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">SKU Classification Sample — ADI × CV² Matrix</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-muted-foreground text-xs">
                  <th className="text-left py-2 pr-4">SKU</th>
                  <th className="text-right pr-4">ADI</th>
                  <th className="text-right pr-4">CV²</th>
                  <th className="text-left pr-4">Class</th>
                  <th className="text-left">Method</th>
                </tr>
              </thead>
              <tbody>
                {SKU_SAMPLE.map(({ sku, adi, cv2, classification, method, color }) => (
                  <tr key={sku} className="border-b last:border-0">
                    <td className="py-2 pr-4 font-medium">{sku}</td>
                    <td className="text-right pr-4 font-mono text-xs">{adi}</td>
                    <td className="text-right pr-4 font-mono text-xs">{cv2}</td>
                    <td className="pr-4"><Badge className={`text-xs ${color}`}>{classification}</Badge></td>
                    <td><span className="font-mono text-xs bg-muted px-2 py-0.5 rounded">{method}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            ADI &gt; 1.32 → non-smooth demand. CV² &gt; 0.49 → variable demand size. Boundary: ADI=1.32, CV²=0.49 (Syntetos-Boylan).
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
