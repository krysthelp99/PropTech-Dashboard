import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { User, Building, Shield, Bell, Key, History } from "lucide-react";

export default function Settings() {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Changes Saved",
      description: "Your settings have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold">Settings & Privacy</h1>
        <p className="text-muted-foreground mt-2">Manage your account preferences and security settings.</p>
      </div>

      <Tabs defaultValue="profile" className="w-full space-y-6">
        <TabsList className="bg-muted/50 p-1">
          <TabsTrigger value="profile" className="gap-2">
            <User className="w-4 h-4" /> Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <Bell className="w-4 h-4" /> Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2">
            <Shield className="w-4 h-4" /> Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your contact details and professional role.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-6 mb-6">
                  <Avatar className="w-20 h-20 border-2 border-primary/10">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary/5 text-primary text-xl font-bold">JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm">Change Avatar</Button>
                    <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size of 2MB</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="John Developer" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title</Label>
                    <Input id="title" defaultValue="Senior Project Manager" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" defaultValue="john@bnsc-dev.com" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Company Details</CardTitle>
                <CardDescription>Verified organizational information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">Company Name</Label>
                  <p className="font-medium">BNSC Developments Sdn Bhd</p>
                </div>
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">Developer License No.</Label>
                  <p className="font-medium">DL-2024-8839-X</p>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Building className="w-3 h-3" /> Contact admin to update company info.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-end">
            <Button onClick={handleSave}>Save Profile Changes</Button>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Workflow Alerts</CardTitle>
              <CardDescription>Choose how you want to be notified about project updates.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { title: "Booking Confirmations", desc: "Notify me when a Booking is confirmed.", default: true },
                { title: "SPA Uploads", desc: "Notify me when an Agent uploads an SPA.", default: true },
                { title: "Payout Readiness", desc: "Notify me when Stage Payouts are ready for approval.", default: false },
                { title: "Engagement Reports", desc: "Weekly Engagement Report emails.", default: true }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <Label className="text-base">{item.title}</Label>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <Switch defaultChecked={item.default} />
                </div>
              ))}
            </CardContent>
          </Card>
          <div className="flex justify-end">
            <Button onClick={handleSave}>Update Preferences</Button>
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Password Management</CardTitle>
                <CardDescription>Ensure your account is using a long, random password.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current">Current Password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new">New Password</Label>
                  <Input id="new" type="password" />
                </div>
                <Button className="w-full mt-2" onClick={handleSave}>Update Password</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>Add an extra layer of security to your account.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-primary/5 border border-primary/10 rounded-lg">
                  <div className="space-y-1">
                    <p className="font-medium">Authenticator App</p>
                    <p className="text-sm text-muted-foreground">Use an app like Google Authenticator.</p>
                  </div>
                  <Switch />
                </div>
                <p className="text-xs text-muted-foreground">
                  When enabled, you'll be prompted for a secure, random token during login.
                </p>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <History className="w-5 h-5 text-primary" />
                  <CardTitle>Recent Activity</CardTitle>
                </div>
                <CardDescription>A log of recent login attempts to your account.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>IP Address</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { date: "2024-01-20 09:42", ip: "192.168.1.1", loc: "Kuala Lumpur, MY", status: "Success" },
                      { date: "2024-01-19 14:15", ip: "192.168.1.1", loc: "Kuala Lumpur, MY", status: "Success" },
                      { date: "2024-01-18 18:22", ip: "203.0.113.5", loc: "Petaling Jaya, MY", status: "Success" }
                    ].map((log, i) => (
                      <TableRow key={i}>
                        <TableCell className="text-sm">{log.date}</TableCell>
                        <TableCell className="text-sm font-mono">{log.ip}</TableCell>
                        <TableCell className="text-sm">{log.loc}</TableCell>
                        <TableCell><span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Success</span></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}