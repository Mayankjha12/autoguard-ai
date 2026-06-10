'use client';

import React, { createContext, useContext, useState } from 'react';

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
  suppliers: 247,
  riskSuppliers: 18,
  inventoryHealth: 82,
  potentialSavings: '$4.2M',

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
    const multiplier = input.region || input.country ? 1.5 : 1;

    const riskFactor =
      input.riskLevel === 'high'
        ? 0.8
        : input.riskLevel === 'medium'
        ? 0.5
        : 0.2;

    return {
      suppliers: Math.floor(247 * multiplier),

      riskSuppliers: Math.floor(18 * riskFactor),

      inventoryHealth: Math.floor(
        82 - riskFactor * 20
      ),

      potentialSavings: `$${(
        4.2 * multiplier
      ).toFixed(1)}M`,

      demandForecast: [
        {
          month: 'Jan',
          demand: 4000 + Math.floor(Math.random() * 2000),
        },
        {
          month: 'Feb',
          demand: 3000 + Math.floor(Math.random() * 2000),
        },
        {
          month: 'Mar',
          demand: 2000 + Math.floor(Math.random() * 2000),
        },
        {
          month: 'Apr',
          demand: 2780 + Math.floor(Math.random() * 2000),
        },
        {
          month: 'May',
          demand: 1890 + Math.floor(Math.random() * 2000),
        },
        {
          month: 'Jun',
          demand: 2390 + Math.floor(Math.random() * 2000),
        },
      ],

      supplyHealth: [
        {
          supplier:
            input.supplierName ||
            input.supplierType ||
            'Supplier A',
          score: 85 + Math.floor(Math.random() * 10),
        },
        {
          supplier: 'Supplier B',
          score: 72 + Math.floor(Math.random() * 10),
        },
        {
          supplier: 'Supplier C',
          score: 90 + Math.floor(Math.random() * 5),
        },
      ],

      riskDistribution: [
        {
          risk: 'Low',
          value: Math.floor(65 * multiplier),
        },
        {
          risk: 'Medium',
          value: Math.floor(20 * multiplier),
        },
        {
          risk: 'High',
          value: Math.floor(15 * riskFactor),
        },
      ],

      alerts: [
        {
          title: `Supply disruption in ${
            input.country || input.region || 'Asia'
          }`,
          severity: 'High',
          timestamp: '2 hours ago',
        },
        {
          title: `${
            input.productCategory || 'Electronics'
          } price spike alert`,
          severity: 'Medium',
          timestamp: '4 hours ago',
        },
        {
          title: `${
            input.supplierName || 'Supplier'
          } performance review required`,
          severity: 'Low',
          timestamp: '6 hours ago',
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