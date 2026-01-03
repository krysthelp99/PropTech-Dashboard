import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Lock } from "lucide-react";
import { INVENTORY_DATA } from "@/lib/mockData";

export default function Inventory() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Inventory Management</h1>
          <p className="text-muted-foreground mt-2">Real-time view of sold and available units.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search units..." className="pl-9 w-[250px]" />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
             <div>
                <CardTitle>Master Inventory List</CardTitle>
                <CardDescription>Update quarterly occupancy trackers here.</CardDescription>
             </div>
             <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span>Available</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <span>Sold</span>
                </div>
             </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Unit ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Buyer</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {INVENTORY_DATA.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.unit}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.size}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>
                    <Badge variant={
                      item.status === 'Sold' ? 'destructive' : 
                      item.status === 'Available' ? 'default' : 'secondary'
                    } className={
                        item.status === 'Available' ? 'bg-emerald-500 hover:bg-emerald-600' : ''
                    }>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {item.buyer === '-' ? (
                      <span className="text-muted-foreground">-</span>
                    ) : (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Lock className="w-3 h-3" />
                        <span className="blur-[4px] select-none">{item.buyer}</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Manage</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6 flex items-center justify-between">
            <div>
                <h3 className="font-semibold text-foreground">Occupancy Tracker Update Required</h3>
                <p className="text-sm text-muted-foreground">Q4 2025 occupancy data is pending submission.</p>
            </div>
            <Button>Update Now</Button>
        </CardContent>
      </Card>
    </div>
  );
}