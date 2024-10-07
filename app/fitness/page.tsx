'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function FitnessPage() {
  const [steps, setSteps] = useState(0);
  const goal = 10000;

  const addSteps = () => {
    setSteps(prev => Math.min(prev + 1000, goal));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Fitness Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Daily Step Goal</CardTitle>
          <CardDescription>Track your progress towards your daily step goal</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Progress value={(steps / goal) * 100} />
            <p className="text-sm text-muted-foreground">
              {steps} steps out of {goal} goal
            </p>
          </div>
          <Button onClick={addSteps} className="mt-4">
            <PlusCircle className="mr-2 h-4 w-4" /> Add 1000 Steps
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}