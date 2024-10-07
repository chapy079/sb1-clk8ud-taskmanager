"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const overviewData = [
    { name: 'Finance', value: 65, color: 'hsl(var(--chart-1))' },
    { name: 'Fitness', value: 80, color: 'hsl(var(--chart-2))' },
    { name: 'Relationships', value: 70, color: 'hsl(var(--chart-3))' },
  ];

  const pillars = [
    { name: 'Finance', progress: 65, tasksCompleted: 13, totalTasks: 20 },
    { name: 'Fitness', progress: 80, tasksCompleted: 16, totalTasks: 20 },
    { name: 'Relationships', progress: 70, tasksCompleted: 14, totalTasks: 20 },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="fitness">Fitness</TabsTrigger>
          <TabsTrigger value="relationships">Relationships</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Overall Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={overviewData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {overviewData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            {pillars.map((pillar) => (
              <Card key={pillar.name}>
                <CardHeader>
                  <CardTitle>{pillar.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={pillar.progress} className="mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {pillar.tasksCompleted} / {pillar.totalTasks} tasks completed
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {['finance', 'fitness', 'relationships'].map((pillar) => (
          <TabsContent key={pillar} value={pillar}>
            <Card>
              <CardHeader>
                <CardTitle className="capitalize">{pillar} Details</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Detailed information and metrics for {pillar} will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}