import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { ANALYTICS_DATA, COMPARISON_DATA } from "@/lib/mockData";
import { TrendingUp, Users, Eye, MousePointerClick, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Analytics & Market Intelligence</h1>
          <p className="text-muted-foreground mt-2">Track project performance and compare against market benchmarks.</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline">Export Report</Button>
            <Button>Market Settings</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Project Views</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold flex items-center gap-2">
                    1,284 <Eye className="w-4 h-4 text-primary" />
                </div>
                <p className="text-xs text-emerald-600 font-medium mt-1">+12% from last week</p>
            </CardContent>
         </Card>
         <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Agent Engagement</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold flex items-center gap-2">
                    86 <Users className="w-4 h-4 text-primary" />
                </div>
                <p className="text-xs text-emerald-600 font-medium mt-1">24 Active agents this week</p>
            </CardContent>
         </Card>
         <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Conversion Rate</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold flex items-center gap-2">
                    3.2% <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Industry avg: 2.8%</p>
            </CardContent>
         </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
            <CardHeader>
                <CardTitle>Engagement Trends</CardTitle>
                <CardDescription>Views vs Leads Generated (Anonymized Data)</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={ANALYTICS_DATA}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                            itemStyle={{ color: 'hsl(var(--foreground))' }}
                        />
                        <Line type="monotone" dataKey="views" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="leads" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Market Comparison</CardTitle>
                <CardDescription>Live data synced from iProperty / PropertyGuru</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {COMPARISON_DATA.map((item, i) => (
                        <div key={i} className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="font-medium text-muted-foreground">{item.metric}</span>
                            </div>
                            <div className="relative h-4 bg-muted/50 rounded-full overflow-hidden">
                                <div className="absolute top-0 left-0 h-full bg-primary" style={{ width: '60%' }}></div>
                                <div className="absolute top-0 left-0 h-full w-0.5 bg-white z-10" style={{ left: '60%' }}></div>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span>Your Project: <strong className="text-primary">{item.project}</strong></span>
                                <span>Market Avg: <strong className="text-muted-foreground">{item.market}</strong></span>
                            </div>
                        </div>
                    ))}

                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900 flex gap-3 mt-6">
                         <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                         <div>
                             <p className="text-sm font-medium text-blue-900 dark:text-blue-300">Buyer Data Protection</p>
                             <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">Detailed buyer demographics are locked until booking confirmation rate exceeds 20%.</p>
                         </div>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}