'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function FinancePage() {
  const [savings, setSavings] = useState(0);
  const goal = 1000;

  const addSavings = () => {
    setSavings(prev => Math.min(prev + 100, goal));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Finance Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Savings Goal</CardTitle>
          <CardDescription>Track your progress towards your savings goal</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Progress value={(savings / goal) * 100} />
            <p className="text-sm text-muted-foreground">
              ${savings} saved out of ${goal} goal
            </p>
          </div>
          <Button onClick={addSavings} className="mt-4">
            <PlusCircle className="mr-2 h-4 w-4" /> Add $100
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}