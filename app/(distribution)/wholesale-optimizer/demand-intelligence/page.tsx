import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Activity, MapPin } from "lucide-react";

const MODULES = [
  {
    title: "Intermittent Demand Model",
    description: "Croston, SBA, and TSB methods purpose-built for lumpy wholesale SKUs. Auto-selects method by ADI / CV² classification.",
    href: "/wholesale-optimizer/demand-intelligence/intermittent-demand-model",
    icon: BarChart3,
  },
  {
    title: "Hierarchical Forecast",
    description: "Region → regional DC → branch → SKU top-down reconciliation via MinT (optimal reconciliation). Coherent forecasts across all levels.",
    href: "/wholesale-optimizer/demand-intelligence/hierarchical-forecast",
    icon: TrendingUp,
  },
  {
    title: "External Signals",
    description: "Housing starts, building permits, and construction spending as leading indicators. FL/GA Census Bureau data feeds the Southeast scenario.",
    href: "/wholesale-optimizer/demand-intelligence/external-signals",
    icon: Activity,
  },
  {
    title: "Contractor Demand",
    description: "Top-account modeling for platinum and gold contractors. Captures project pipeline visibility that aggregate demand misses.",
    href: "/wholesale-optimizer/demand-intelligence/contractor-demand",
    icon: MapPin,
  },
];

export default function DemandIntelligencePage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-muted-foreground">L0.5 · Continuous</p>
        <h1 className="text-2xl font-bold tracking-tight">Demand Intelligence</h1>
        <p className="text-muted-foreground mt-1">
          Hierarchical demand forecasting with intermittent-demand models and external signals. 60–70% of wholesale SKUs are intermittent or erratic — standard retail methods silently fail on these.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MODULES.map(({ title, description, href, icon: Icon }) => (
          <Link key={title} href={href}>
            <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-2">
                <Icon className="h-5 w-5 text-blue-600" />
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
