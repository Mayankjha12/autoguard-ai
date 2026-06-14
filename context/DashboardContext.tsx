'use client';
import React, {
  createContext,
  useContext,
  useState,
} from 'react';

interface DashboardData {
  suppliers: number;
  riskSuppliers: number;
  inventoryHealth: number;
  potentialSavings: string;
  demandForecast: { month: string; demand: number }[];
  supplyHealth: { supplier: string; score: number }[];
  riskDistribution: { risk: string; value: number }[];
  alerts: { title: string; severity: string; timestamp: string }[];
}

interface SearchInput {
  productCategory?: string;
  region?: string;
  riskLevel?: string;
  supplierType?: string;

  supplierName?: string;
  country?: string;
}

interface DashboardContextType {
  data: DashboardData;
  searchInput: SearchInput;
  setSearchInput: (input: SearchInput) => void;
  updateDashboard: (input: SearchInput) => void;
  resetDashboard: () => void;
}

const defaultData: DashboardData = {
  suppliers: 100,
  riskSuppliers: 12,
  inventoryHealth: 84,
  potentialSavings: '$5.5M',

  demandForecast: [
    { month: 'Jan', demand: 4000 },
    { month: 'Feb', demand: 3000 },
    { month: 'Mar', demand: 2000 },
    { month: 'Apr', demand: 2780 },
    { month: 'May', demand: 1890 },
    { month: 'Jun', demand: 2390 },
  ],

  supplyHealth: [
    { supplier: 'Supplier A', score: 85 },
    { supplier: 'Supplier B', score: 72 },
    { supplier: 'Supplier C', score: 90 },
  ],

  riskDistribution: [
    { risk: 'Low', value: 65 },
    { risk: 'Medium', value: 20 },
    { risk: 'High', value: 15 },
  ],

  alerts: [
    {
      title: 'Supply disruption detected',
      severity: 'High',
      timestamp: '2 hours ago',
    },
    {
      title: 'Price spike alert',
      severity: 'Medium',
      timestamp: '4 hours ago',
    },
  ],
};

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export function DashboardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<DashboardData>(defaultData);

  const [searchInput, setSearchInput] = useState<SearchInput>({});
  

  const generateDataFromInput = (
    input: SearchInput
  ): DashboardData => {
  
    const highRisk =
      input.riskLevel?.toLowerCase() === "high";
  
    const mediumRisk =
      input.riskLevel?.toLowerCase() === "medium";
  
    const region =
      input.region?.toLowerCase() || "";
  
    let suppliers = 247;
    let riskSuppliers = 12;
    let inventoryHealth = 91;
    let savings = "$3.4M";
  
    if (highRisk) {
      riskSuppliers = 22;
      inventoryHealth = 72;
      savings = "$6.8M";
    } else if (mediumRisk) {
      riskSuppliers = 14;
      inventoryHealth = 84;
      savings = "$5.1M";
    }
  
    if (
      region.includes("china") ||
      region.includes("taiwan")
    ) {
      riskSuppliers += 5;
      inventoryHealth -= 7;
    }
  
    if (
      region.includes("india") ||
      region.includes("vietnam")
    ) {
      inventoryHealth += 4;
    }
  
    return {
      suppliers,
  
      riskSuppliers,
  
      inventoryHealth,
  
      potentialSavings: savings,
  
      demandForecast: [
        { month: "Jan", demand: inventoryHealth * 45 },
        { month: "Feb", demand: inventoryHealth * 47 },
        { month: "Mar", demand: inventoryHealth * 50 },
        { month: "Apr", demand: inventoryHealth * 53 },
        { month: "May", demand: inventoryHealth * 57 },
        { month: "Jun", demand: inventoryHealth * 61 },
      ],
  
      supplyHealth: [
        {
          supplier:
            input.supplierName ||
            "Samsung SDI",
          score: inventoryHealth,
        },
        {
          supplier: "Panasonic Energy",
          score: inventoryHealth - 4,
        },
        {
          supplier: "Shanghai SemiTech",
          score: inventoryHealth - 18,
        },
      ],
  
      riskDistribution: [
        {
          risk: 'Low',
          value: suppliers - riskSuppliers - 25,
        },
        {
          risk: 'Medium',
          value: 25,
        },
        {
          risk: 'High',
          value: riskSuppliers,
        },
      ],
  
      alerts: [
        {
          title:
            highRisk
              ? "Taiwan semiconductor disruption risk"
              : "Supplier performance stable",
  
          severity:
            highRisk
              ? "High"
              : "Low",
  
          timestamp: "15 min ago",
        },
  
        {
          title:
            mediumRisk
              ? "Logistics delay detected"
              : "Inventory levels healthy",
  
          severity:
            mediumRisk
              ? "Medium"
              : "Low",
  
          timestamp: "30 min ago",
        },
  
        {
          title:
            inventoryHealth < 80
              ? "Urgent procurement review recommended"
              : "Supply chain operating normally",
  
          severity:
            inventoryHealth < 80
              ? "High"
              : "Low",
  
          timestamp: "1 hour ago",
        },
      ],
    };
  };

  const updateDashboard = (input: SearchInput) => {
    setSearchInput(input);

    const newData = generateDataFromInput(input);

    setData(newData);
  };

  const resetDashboard = () => {
    setSearchInput({});
    setData(defaultData);
  };

  return (
    <DashboardContext.Provider
      value={{
        data,
        searchInput,
        setSearchInput,
        updateDashboard,
        resetDashboard,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error(
      'useDashboard must be used within DashboardProvider'
    );
  }

  return context;
}