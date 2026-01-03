import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, FileText, Clock, AlertTriangle, Fingerprint, Lock } from "lucide-react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

export default function Verification() {
  const [confirmedSteps, setConfirmedSteps] = useState<string[]>([]);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const toggleStep = (step: string) => {
    if (confirmedSteps.includes(step)) {
      setConfirmedSteps(confirmedSteps.filter(s => s !== step));
    } else {
      setConfirmedSteps([...confirmedSteps, step]);
    }
  };

  const allConfirmed = confirmedSteps.length === 3;

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-display font-bold">Document Verification</h1>
        <p className="text-muted-foreground mt-2">Review pending SPAs and verify buyer details.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
        {/* Left Col: Document List & Status */}
        <div className="lg:col-span-1 flex flex-col gap-6 overflow-y-auto pr-2">
           <Card className="border-l-4 border-l-orange-500">
             <CardHeader className="pb-3">
               <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">Unit A-101</CardTitle>
                    <CardDescription>Pending Verification</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-orange-500 border-orange-200 bg-orange-50">Action Req.</Badge>
               </div>
             </CardHeader>
             <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <FileText className="w-8 h-8 text-primary" />
                    <div className="overflow-hidden">
                      <p className="font-medium text-sm truncate">SPA_Unit_A101_Signed.pdf</p>
                      <p className="text-xs text-muted-foreground">Uploaded 2 hours ago</p>
                    </div>
                  </div>
                   <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <FileText className="w-8 h-8 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Bank_Offer_Letter.pdf</p>
                      <p className="text-xs text-muted-foreground">Uploaded 2 hours ago</p>
                    </div>
                  </div>
                </div>
             </CardContent>
           </Card>

           <Card>
              <CardHeader>
                <CardTitle>Verification Workflow</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div 
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${confirmedSteps.includes('booking') ? 'bg-emerald-50 border-emerald-200' : 'bg-background hover:bg-muted'}`}
                    onClick={() => toggleStep('booking')}
                 >
                    <div className="flex items-center gap-3">
                       <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${confirmedSteps.includes('booking') ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-muted-foreground'}`}>
                          {confirmedSteps.includes('booking') && <Check className="w-4 h-4" />}
                       </div>
                       <div className="flex-1">
                          <p className="font-medium">Confirm Booking</p>
                          <p className="text-xs text-muted-foreground">Verify unit selection matches SPA</p>
                       </div>
                    </div>
                 </div>

                 <div 
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${confirmedSteps.includes('identity') ? 'bg-emerald-50 border-emerald-200' : 'bg-background hover:bg-muted'}`}
                    onClick={() => toggleStep('identity')}
                 >
                    <div className="flex items-center gap-3">
                       <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${confirmedSteps.includes('identity') ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-muted-foreground'}`}>
                          {confirmedSteps.includes('identity') && <Check className="w-4 h-4" />}
                       </div>
                       <div className="flex-1">
                          <p className="font-medium">Verify Identity</p>
                          <p className="text-xs text-muted-foreground">Check IC/Passport matches Buyer</p>
                       </div>
                    </div>
                 </div>

                 <div 
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${confirmedSteps.includes('commission') ? 'bg-emerald-50 border-emerald-200' : 'bg-background hover:bg-muted'}`}
                    onClick={() => toggleStep('commission')}
                 >
                    <div className="flex items-center gap-3">
                       <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${confirmedSteps.includes('commission') ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-muted-foreground'}`}>
                          {confirmedSteps.includes('commission') && <Check className="w-4 h-4" />}
                       </div>
                       <div className="flex-1">
                          <p className="font-medium">Acknowledge Commission</p>
                          <p className="text-xs text-muted-foreground">Confirm 2% agent payout structure</p>
                       </div>
                    </div>
                 </div>

                 <Separator />
                 
                 <Button className="w-full" disabled={!allConfirmed} onClick={() => setIsUnlocked(true)}>
                    {isUnlocked ? (
                        <>
                            <Check className="w-4 h-4 mr-2" />
                            Verified & Unlocked
                        </>
                    ) : (
                        <>
                            <Fingerprint className="w-4 h-4 mr-2" />
                            Digitally Sign & Approve
                        </>
                    )}
                 </Button>
                 
                 {isUnlocked && (
                    <div className="text-xs text-center text-muted-foreground space-y-1">
                        <p className="flex justify-center items-center gap-1">
                             <Clock className="w-3 h-3" /> System Timestamp: {new Date().toLocaleString()}
                        </p>
                        <p className="flex justify-center items-center gap-1 text-emerald-600 font-medium">
                             <Check className="w-3 h-3" /> Developer Action: {new Date().toLocaleString()}
                        </p>
                    </div>
                 )}
              </CardContent>
           </Card>
        </div>

        {/* Right Col: Document Viewer */}
        <div className="lg:col-span-2 bg-muted/20 rounded-xl border border-border flex flex-col items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 flex gap-2">
                 <Badge variant="secondary">Page 1 of 14</Badge>
                 <Button size="icon" variant="ghost" className="h-6 w-6"><X className="w-4 h-4" /></Button>
            </div>

            {/* Simulated Doc */}
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-sm aspect-[1/1.4] p-12 text-xs text-justify leading-relaxed relative">
                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] rotate-[-45deg]">
                    <span className="text-9xl font-bold uppercase">Confidential</span>
                </div>

                <div className="mb-8 text-center border-b pb-4">
                    <h2 className="text-xl font-serif font-bold mb-2">SALE AND PURCHASE AGREEMENT</h2>
                    <p>DATED THIS {new Date().toLocaleDateString()}</p>
                </div>

                <p className="mb-4">
                    THIS AGREEMENT is made on the day and year stated in Section 1 of the First Schedule hereto BETWEEN the party whose name and description are stated in Section 2 of the First Schedule (hereinafter called "the Vendor") of the one part AND the party whose name and description are stated in Section 3 of the First Schedule (hereinafter called "the Purchaser") of the other part.
                </p>
                
                <p className="mb-4">
                    WHEREAS the Vendor is the registered proprietor of all that piece of land described in Section 4 of the First Schedule (hereinafter called "the said Land") AND WHEREAS the Vendor is developing the said Land into a housing development known as <strong>SKYLINE RESIDENCES</strong>.
                </p>

                <div className="my-8 p-4 bg-muted/10 border border-muted rounded">
                    <h3 className="font-bold mb-2">FIRST SCHEDULE</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="font-semibold">Section 1</div>
                        <div className="col-span-2">Date of Agreement: {new Date().toLocaleDateString()}</div>
                        
                        <div className="font-semibold">Section 2</div>
                        <div className="col-span-2">Vendor: BNSC DEVELOPMENTS SDN BHD</div>

                        <div className="font-semibold">Section 3</div>
                        <div className="col-span-2 flex items-center gap-2">
                             Purchaser: 
                             {isUnlocked ? (
                                <span className="font-bold font-mono">JOHN DOE (IC: 880101-14-1234)</span>
                             ) : (
                                <span className="bg-slate-200 text-transparent rounded px-1 select-none">HIDDEN DATA LOCKED</span>
                             )}
                             {!isUnlocked && <Lock className="w-3 h-3 text-muted-foreground" />}
                        </div>
                    </div>
                </div>

                <p>
                    NOW IT IS HEREBY AGREED as follows: The Vendor shall sell and the Purchaser shall purchase the said Parcel free from encumbrances subject to the conditions of title...
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}