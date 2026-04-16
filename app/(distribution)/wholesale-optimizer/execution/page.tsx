import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, AlertTriangle, BarChart3, TrendingUp, Package } from "lucide-react";

const MODULES = [
  {
    title: "Fill-Rate Dashboard",
    description: "Live fill rate by branch / category / contractor tier. Daily refresh. Drill from region → DC → branch → SKU.",
    href: "/wholesale-optimizer/execution/fill-rate-dashboard",
    icon: Activity,
  },
  {
    title: "Stockout Alerts",
    description: "Exception-based alerts when on-hand inventory drops below safety stock threshold. Slack and email notifications.",
    href: "/wholesale-optimizer/execution/stockout-alerts",
    icon: AlertTriangle,
  },
  {
    title: "Dead-Stock Flags",
    description: "Real-time flagging of SKU-locations crossing 90 / 180 / 365-day zero-velocity thresholds.",
    href: "/wholesale-optimizer/execution/dead-stock-flags",
    icon: Package,
  },
  {
    title: "Supplier SLA Tracking",
    description: "On-time delivery rate, lead-time variance, and fill rate by supplier. Weekly scorecards with trend.",
    href: "/wholesale-optimizer/execution/supplier-sla-tracking",
    icon: BarChart3,
  },
  {
    title: "Contractor Service Levels",
    description: "Per-tier fill rate actuals vs. targets. Platinum 99%, Gold 97%, Silver 95%, Transactional 92%.",
    href: "/wholesale-optimizer/execution/contractor-service-levels",
    icon: TrendingUp,
  },
];

export default function ExecutionPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L4 · Daily</p>
        <h1 className="text-2xl font-bold tracking-tight">Execution Monitoring</h1>
        <p className="text-muted-foreground mt-1">
          Daily operational dashboards and exception alerts. Closes the loop from L1 network decisions back to observed fill rates, stockouts, and supplier SLAs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {MODULES.map(({ title, description, href, icon: Icon }) => (
          <Link key={title} href={href}>
            <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-2">
                <Icon className="h-5 w-5 text-green-600" />
                <CardTitle className="text-base mt-1">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
