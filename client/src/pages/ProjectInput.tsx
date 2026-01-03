import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Upload, Save, CheckCircle } from "lucide-react";
import generatedImage from '@assets/generated_images/modern_high-rise_residential_building_render.png';

export default function ProjectInput() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold">Project Management</h1>
          <p className="text-muted-foreground mt-2">Manage project details, inventory, and pricing structures.</p>
        </div>
        <Button className="gap-2">
          <Save className="w-4 h-4" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="details" className="w-full space-y-6">
        <TabsList className="bg-muted/50 p-1">
          <TabsTrigger value="details">Project Details</TabsTrigger>
          <TabsTrigger value="usp">USP Editor</TabsTrigger>
          <TabsTrigger value="inventory">Inventory Setup</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>General Information</CardTitle>
              <CardDescription>Basic details about the development project.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Project Name</Label>
                  <Input placeholder="e.g. Skyline Residences" defaultValue="Skyline Residences" />
                </div>
                <div className="space-y-2">
                  <Label>Developer License No.</Label>
                  <Input placeholder="e.g. DL-2024-8839" />
                </div>
                <div className="space-y-2">
                  <Label>Project Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="condo">Condominium</SelectItem>
                      <SelectItem value="landed">Landed Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Completion Date</Label>
                  <Input type="date" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea className="h-32" placeholder="Describe the project..." defaultValue="A luxury high-rise development in the heart of the city, featuring world-class amenities and breathtaking skyline views." />
              </div>

              <div className="space-y-2">
                <Label>Project Hero Image</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center bg-muted/20 hover:bg-muted/30 transition-colors cursor-pointer relative overflow-hidden group">
                  <img src={generatedImage} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity" alt="Project Hero" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-sm mb-3">
                        <Upload className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">Click to replace image</span>
                    <span className="text-xs text-muted-foreground mt-1">Recommended: 1920x1080px</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usp" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Unique Selling Propositions (USPs)</CardTitle>
              <CardDescription>Define key differentiators for the sales team.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-muted/30 rounded-lg border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">
                    {i}
                  </div>
                  <div className="flex-1 space-y-2">
                    <Input placeholder="USP Title (e.g. Freehold Status)" />
                    <Textarea placeholder="Detailed description..." className="h-20" />
                  </div>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                    <span className="sr-only">Delete</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2 w-4 h-4"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                  </Button>
                </div>
              ))}
              <Button variant="outline" className="w-full border-dashed">
                <Plus className="w-4 h-4 mr-2" />
                Add New USP
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-6">
          <Card>
             <CardHeader>
                <CardTitle>Unit Mix & Rebates</CardTitle>
                <CardDescription>Configure base prices and rebate structures.</CardDescription>
             </CardHeader>
             <CardContent>
                 <div className="space-y-4">
                    <div className="flex items-center justify-between bg-muted/30 p-4 rounded-lg">
                        <span className="font-medium">Early Bird Rebate</span>
                        <div className="flex items-center gap-4">
                            <Input className="w-32" defaultValue="5%" />
                            <span className="text-sm text-muted-foreground">Active until Jan 31</span>
                        </div>
                    </div>
                     <div className="flex items-center justify-between bg-muted/30 p-4 rounded-lg">
                        <span className="font-medium">Bumiputera Lot Discount</span>
                        <div className="flex items-center gap-4">
                            <Input className="w-32" defaultValue="7%" />
                            <span className="text-sm text-muted-foreground">Fixed Regulatory</span>
                        </div>
                    </div>
                 </div>
             </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}