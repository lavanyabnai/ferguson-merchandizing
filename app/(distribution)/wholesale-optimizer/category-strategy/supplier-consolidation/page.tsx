import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SupplierConsolidationPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L0 · Category Strategy · Annual</p>
        <h1 className="text-2xl font-bold tracking-tight">Supplier Consolidation</h1>
        <p className="text-muted-foreground mt-1">
          Identify consolidation opportunities across overlapping suppliers within copper fittings. Target: reduce active suppliers from 14 to 8 while maintaining 98%+ category fill rate.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Active suppliers</CardTitle>
            <p className="text-3xl font-bold">14</p>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Across copper fittings category, Southeast region</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">Consolidation target</CardTitle>
            <p className="text-3xl font-bold text-amber-600">8</p>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Projected 6.2% cost reduction from volume concentration</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-normal">SKUs at risk</CardTitle>
            <p className="text-3xl font-bold text-red-600">312</p>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">SKUs supplied exclusively by candidates for consolidation</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Consolidation Candidates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { supplier: "Mueller Industries", overlap: "High", revenue: "$4.2M", recommendation: "Retain — strategic", status: "keep" },
              { supplier: "Nibco", overlap: "High", revenue: "$3.8M", recommendation: "Retain — strategic", status: "keep" },
              { supplier: "Streamline Cooper", overlap: "Medium", revenue: "$1.1M", recommendation: "Consolidate into Mueller", status: "consolidate" },
              { supplier: "Elkhart Products", overlap: "High", revenue: "$890K", recommendation: "Evaluate — sole-source risk on 48 SKUs", status: "evaluate" },
              { supplier: "Regional Distributor A", overlap: "Low", revenue: "$210K", recommendation: "Phase out", status: "remove" },
            ].map(({ supplier, overlap, revenue, recommendation, status }) => (
              <div key={supplier} className="flex items-center justify-between py-2 border-b last:border-0 text-sm">
                <div>
                  <p className="font-medium">{supplier}</p>
                  <p className="text-muted-foreground text-xs">{recommendation}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">{revenue}</span>
                  <Badge variant="outline" className="text-xs">{overlap} overlap</Badge>
                  <Badge className={status === "keep" ? "bg-green-100 text-green-800" : status === "consolidate" ? "bg-amber-100 text-amber-800" : status === "evaluate" ? "bg-blue-100 text-blue-800" : "bg-red-100 text-red-800"}>
                    {status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
