import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TEMPLATES = [
  { name: "Branch Master", format: "CSV", columns: "branch_id, name, branch_type, parent_branch_id, latitude, longitude, region, square_footage, contractor_mix_residential_pct, contractor_mix_commercial_pct", required: true },
  { name: "SKU Demand History", format: "CSV", columns: "sku_id, branch_id, date, quantity, order_id, customer_id", required: true },
  { name: "Current Inventory Positions", format: "CSV", columns: "sku_id, branch_id, on_hand, on_order, safety_stock, reorder_point", required: true },
  { name: "Contractor Accounts", format: "CSV", columns: "customer_id, name, tier, primary_branch_id, annual_revenue, contractor_type", required: true },
  { name: "Supplier Lead Times", format: "CSV", columns: "supplier_id, sku_id, quoted_lead_time_days, actual_lead_time_history", required: false },
  { name: "External Signals", format: "CSV", columns: "signal_type, region, period, value, source", required: false },
  { name: "Project / Job Tickets", format: "CSV", columns: "project_id, customer_id, project_type, sku_id, quantity, expected_date", required: false },
];

export default function WholesaleDataPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Data Upload</h1>
        <p className="text-muted-foreground mt-1">
          Upload source data to initialize or refresh the WholesaleOS models. Required uploads must be completed before running L1 Network Optimization.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Upload Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            {TEMPLATES.map(({ name, format, columns, required }) => (
              <div key={name} className="flex items-start justify-between py-2 border-b last:border-0 gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{name}</p>
                    <Badge variant="outline" className="text-xs">{format}</Badge>
                    {required && <Badge className="bg-red-100 text-red-800 text-xs">Required</Badge>}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 font-mono">{columns}</p>
                </div>
                <button className="shrink-0 text-xs text-blue-600 hover:underline">Download template</button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Last Upload Status</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <p>Branch Master: <span className="text-green-600 font-medium">180 branches loaded · 2024-04-01</span></p>
          <p>SKU Demand History: <span className="text-green-600 font-medium">8,000 SKUs × 52 weeks · 2024-04-14</span></p>
          <p>Current Inventory: <span className="text-green-600 font-medium">1.44M positions · 2024-04-15</span></p>
          <p>Contractor Accounts: <span className="text-green-600 font-medium">1,375 accounts · 2024-04-01</span></p>
        </CardContent>
      </Card>
    </div>
  );
}
