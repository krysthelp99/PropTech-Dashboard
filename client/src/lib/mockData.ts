import { 
  Users, 
  Building, 
  FileCheck, 
  BarChart3, 
  Wallet, 
  Clock, 
  AlertCircle 
} from "lucide-react";

export const MOCK_STATS = [
  { label: "Active Projects", value: "12", icon: Building, trend: "+2 this month" },
  { label: "Pending Verifications", value: "8", icon: FileCheck, trend: "Urgent action required", alert: true },
  { label: "Total Units Sold", value: "842", icon: Users, trend: "+45 this month" },
  { label: "Monthly Engagement", value: "2.4k", icon: BarChart3, trend: "+12% vs last month" },
];

export const ACTION_ITEMS = [
  { id: 1, type: "Verification", message: "3 SPAs pending verification for Project Alpha", time: "2 hours ago" },
  { id: 2, type: "Financial", message: "Stage 2a Disbursement ready for approval", time: "5 hours ago" },
  { id: 3, type: "Inventory", message: "Occupancy tracker update due for Q4", time: "1 day ago" },
];

export const INVENTORY_DATA = [
  { id: "A-101", unit: "A-101", type: "2BR Suite", size: "850 sqft", price: "$680,000", status: "Sold", buyer: "John D.", date: "2024-01-15" },
  { id: "A-102", unit: "A-102", type: "2BR Suite", size: "850 sqft", price: "$680,000", status: "Available", buyer: "-", date: "-" },
  { id: "B-205", unit: "B-205", type: "3BR Penthouse", size: "1,200 sqft", price: "$1,250,000", status: "Pending", buyer: "Sarah L.", date: "2024-01-20" },
  { id: "C-304", unit: "C-304", type: "1BR Studio", size: "550 sqft", price: "$450,000", status: "Available", buyer: "-", date: "-" },
  { id: "C-305", unit: "C-305", type: "1BR Studio", size: "550 sqft", price: "$450,000", status: "Sold", buyer: "Mike R.", date: "2024-01-10" },
];

export const PAYOUTS = [
  { id: 1, project: "Skyline Residences", stage: "Stage 2a (Foundation)", amount: "$1,250,000", status: "Pending Approval", date: "2024-02-01" },
  { id: 2, project: "Ocean View", stage: "Stage 3 (Framework)", amount: "$850,000", status: "Processed", date: "2024-01-15" },
];

export const ANALYTICS_DATA = [
  { name: 'Week 1', views: 400, leads: 24 },
  { name: 'Week 2', views: 300, leads: 18 },
  { name: 'Week 3', views: 550, leads: 35 },
  { name: 'Week 4', views: 480, leads: 28 },
];

export const COMPARISON_DATA = [
  { metric: "Yield", project: "4.5%", market: "4.2%" },
  { metric: "Price PSF", project: "$850", market: "$820" },
  { metric: "Occupancy", project: "92%", market: "88%" },
];