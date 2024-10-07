'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function RelationshipsPage() {
  const [interactions, setInteractions] = useState(0);
  const goal = 5;

  const addInteraction = () => {
    setInteractions(prev => Math.min(prev + 1, goal));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Relationships Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Daily Social Interactions</CardTitle>
          <CardDescription>Track your progress towards meaningful daily interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Progress value={(interactions / goal) * 100} />
            <p className="text-sm text-muted-foreground">
              {interactions} interactions out of {goal} goal
            </p>
          </div>
          <Button onClick={addInteraction} className="mt-4">
            <PlusCircle className="mr-2 h-4 w-4" /> Add Interaction
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}