import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PAYOUTS } from "@/lib/mockData";
import { CheckCircle2, XCircle, BrainCircuit } from "lucide-react";

export default function Financials() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Financial Oversight</h1>
          <p className="text-muted-foreground mt-2">Manage payouts, disbursements, and rebate matching.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Payout Confirmations</CardTitle>
                    <CardDescription>Approve staged disbursements for active projects.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Project</TableHead>
                                <TableHead>Stage</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {PAYOUTS.map((payout) => (
                                <TableRow key={payout.id}>
                                    <TableCell className="font-medium">{payout.project}</TableCell>
                                    <TableCell>{payout.stage}</TableCell>
                                    <TableCell>{payout.amount}</TableCell>
                                    <TableCell>
                                        <Badge variant={payout.status === 'Pending Approval' ? 'outline' : 'secondary'} className={payout.status === 'Pending Approval' ? 'border-orange-500 text-orange-500' : ''}>
                                            {payout.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {payout.status === 'Pending Approval' && (
                                            <div className="flex justify-end gap-2">
                                                <Button size="sm" variant="outline" className="text-destructive hover:bg-destructive/10 border-destructive/20">Reject</Button>
                                                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">Approve</Button>
                                            </div>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>

        <div className="lg:col-span-1">
            <Card className="bg-gradient-to-b from-primary/5 to-transparent border-primary/10">
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <BrainCircuit className="w-5 h-5 text-primary" />
                        <CardTitle>AI Rebate Matcher</CardTitle>
                    </div>
                    <CardDescription>Automated loan eligibility matching.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="p-4 bg-background rounded-lg border shadow-sm space-y-3">
                         <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Buyer: Unit A-102</span>
                            <Badge className="bg-emerald-500">98% Match</Badge>
                         </div>
                         <div className="space-y-2">
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>Income Requirement</span>
                                <span className="text-foreground">Pass</span>
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>DSR Limit</span>
                                <span className="text-foreground">Optimal</span>
                            </div>
                         </div>
                         <div className="pt-2 border-t mt-2">
                             <p className="text-xs font-medium text-primary">Recommendation: Approve Standard Rebate Package</p>
                         </div>
                    </div>

                    <div className="p-4 bg-background rounded-lg border shadow-sm space-y-3 opacity-70">
                         <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Buyer: Unit C-304</span>
                            <Badge variant="secondary">65% Match</Badge>
                         </div>
                         <div className="space-y-2">
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>Income Requirement</span>
                                <span className="text-orange-500">Borderline</span>
                            </div>
                         </div>
                         <div className="pt-2 border-t mt-2">
                             <p className="text-xs font-medium text-orange-600">Recommendation: Requires Manual Review</p>
                         </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}