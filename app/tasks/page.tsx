"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Save $100', completed: false, pillar: 'finance' },
    { id: 2, title: 'Go for a 30-minute run', completed: false, pillar: 'fitness' },
    { id: 3, title: 'Call a friend', completed: false, pillar: 'relationships' },
  ]);

  const [newTask, setNewTask] = useState({ title: '', pillar: 'finance' });

  const addTask = () => {
    if (newTask.title.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), title: newTask.title, completed: false, pillar: newTask.pillar }]);
      setNewTask({ title: '', pillar: 'finance' });
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Tasks</h1>

      <Card>
        <CardHeader>
          <CardTitle>Add New Task</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="task-title">Task Title</Label>
            <Input
              id="task-title"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              placeholder="Enter task title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="task-pillar">Pillar</Label>
            <Select
              value={newTask.pillar}
              onValueChange={(value) => setNewTask({ ...newTask, pillar: value })}
            >
              <SelectTrigger id="task-pillar">
                <SelectValue placeholder="Select a pillar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="fitness">Fitness</SelectItem>
                <SelectItem value="relationships">Relationships</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={addTask}>Add Task</Button>
        </CardContent>
      </Card>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Tasks</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="fitness">Fitness</TabsTrigger>
          <TabsTrigger value="relationships">Relationships</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <TaskList tasks={tasks} toggleTask={toggleTask} />
        </TabsContent>
        <TabsContent value="finance">
          <TaskList tasks={tasks.filter(task => task.pillar === 'finance')} toggleTask={toggleTask} />
        </TabsContent>
        <TabsContent value="fitness">
          <TaskList tasks={tasks.filter(task => task.pillar === 'fitness')} toggleTask={toggleTask} />
        </TabsContent>
        <TabsContent value="relationships">
          <TaskList tasks={tasks.filter(task => task.pillar === 'relationships')} toggleTask={toggleTask} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function TaskList({ tasks, toggleTask }) {
  return (
    <Card>
      <CardContent className="space-y-4 mt-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center space-x-2">
            <Checkbox
              id={`task-${task.id}`}
              checked={task.completed}
              onCheckedChange={() => toggleTask(task.id)}
            />
            <Label
              htmlFor={`task-${task.id}`}
              className={task.completed ? 'line-through text-muted-foreground' : ''}
            >
              {task.title}
            </Label>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}