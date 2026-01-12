import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { UserCheck, UserX, Clock, Shield } from "lucide-react";
import { useState } from "react";

const PENDING_USERS = [
  { id: 1, name: "Sarah Chen", email: "sarah.chen@devco.com", dateRequested: "2024-01-18", status: "pending" },
  { id: 2, name: "Michael Tan", email: "m.tan@propertygroup.my", dateRequested: "2024-01-19", status: "pending" },
  { id: 3, name: "Aisha Rahman", email: "aisha.r@realestateplus.com", dateRequested: "2024-01-20", status: "pending" },
  { id: 4, name: "James Wong", email: "jwong@urbandev.sg", dateRequested: "2024-01-20", status: "pending" },
];

export default function UserApproval() {
  const { toast } = useToast();
  const [users, setUsers] = useState(PENDING_USERS);

  const handleAction = (id: number, action: "approve" | "reject") => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, status: action === "approve" ? "approved" : "rejected" } : user
    ));
    toast({
      title: action === "approve" ? "User Approved" : "Request Rejected",
      description: action === "approve" 
        ? "The user now has access to the Admin dashboard." 
        : "The access request has been denied.",
    });
  };

  const pendingCount = users.filter(u => u.status === "pending").length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <h1 className="text-3xl font-display font-bold">User Approval</h1>
          </div>
          <p className="text-muted-foreground mt-2">Review and manage admin access requests.</p>
        </div>
        {pendingCount > 0 && (
          <Badge variant="destructive" className="text-sm px-4 py-2">
            {pendingCount} Pending Request{pendingCount > 1 ? 's' : ''}
          </Badge>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold">{users.filter(u => u.status === "pending").length}</p>
              </div>
              <Clock className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Approved</p>
                <p className="text-2xl font-bold text-emerald-600">{users.filter(u => u.status === "approved").length}</p>
              </div>
              <UserCheck className="w-8 h-8 text-emerald-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Rejected</p>
                <p className="text-2xl font-bold text-destructive">{users.filter(u => u.status === "rejected").length}</p>
              </div>
              <UserX className="w-8 h-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Access Requests</CardTitle>
          <CardDescription>New admin users awaiting your approval.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Date Requested</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell className="text-muted-foreground">{user.email}</TableCell>
                  <TableCell>{user.dateRequested}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        user.status === "approved" ? "default" : 
                        user.status === "rejected" ? "destructive" : "secondary"
                      }
                      className={user.status === "approved" ? "bg-emerald-500" : ""}
                    >
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {user.status === "pending" ? (
                      <div className="flex justify-end gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-destructive hover:bg-destructive/10 border-destructive/20"
                          onClick={() => handleAction(user.id, "reject")}
                        >
                          <UserX className="w-4 h-4 mr-1" /> Reject
                        </Button>
                        <Button 
                          size="sm" 
                          className="bg-emerald-600 hover:bg-emerald-700"
                          onClick={() => handleAction(user.id, "approve")}
                        >
                          <UserCheck className="w-4 h-4 mr-1" /> Approve
                        </Button>
                      </div>
                    ) : (
                      <span className="text-sm text-muted-foreground">—</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}