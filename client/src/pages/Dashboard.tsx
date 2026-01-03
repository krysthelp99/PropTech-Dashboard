import { MOCK_STATS, ACTION_ITEMS } from "@/lib/mockData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, Clock } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">Welcome back, here's what's happening today.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {MOCK_STATS.map((stat, i) => (
          <Card key={i} className="metric-card border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-y-0 pb-2">
                <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                <stat.icon className={`h-4 w-4 ${stat.alert ? 'text-destructive' : 'text-primary'}`} />
              </div>
              <div className="text-2xl font-bold font-display mt-2">{stat.value}</div>
              <p className={`text-xs mt-1 ${stat.alert ? 'text-destructive font-medium' : 'text-muted-foreground'}`}>
                {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Action Required Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-display font-semibold text-foreground flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-destructive" />
          Action Required
        </h2>
        
        <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
          {ACTION_ITEMS.map((item, index) => (
            <div 
              key={item.id}
              className={`p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-muted/30 transition-colors ${
                index !== ACTION_ITEMS.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <div className="flex items-start md:items-center gap-4">
                <div className={`
                  w-2 h-2 mt-2 md:mt-0 rounded-full flex-shrink-0
                  ${item.type === 'Verification' ? 'bg-destructive' : 'bg-orange-500'}
                `} />
                <div>
                  <h3 className="font-medium text-foreground">{item.message}</h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <span className="bg-muted px-2 py-0.5 rounded text-foreground font-medium">{item.type}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.time}</span>
                  </div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="shrink-0 group">
                Review Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="h-64 flex flex-col justify-center items-center bg-gradient-to-br from-primary/5 to-transparent border-dashed">
             <div className="p-6 text-center">
                <h3 className="font-semibold text-lg text-primary mb-2">Create New Project</h3>
                <p className="text-sm text-muted-foreground mb-4">Start listing a new development phase.</p>
                <Button>Get Started</Button>
             </div>
        </Card>
         <Card className="h-64 flex flex-col justify-center items-center bg-muted/20 border-dashed">
             <div className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">View Analytics Report</h3>
                <p className="text-sm text-muted-foreground mb-4">Download the latest monthly summary.</p>
                <Button variant="outline">Download PDF</Button>
             </div>
        </Card>
      </div>
    </div>
  );
}