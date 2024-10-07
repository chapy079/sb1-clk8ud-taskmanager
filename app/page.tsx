import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight, Coins, Heart, Dumbbell } from 'lucide-react';

export default function Home() {
  const pillars = [
    { title: 'Finance', icon: Coins, description: 'Manage your money and achieve financial goals', href: '/finance' },
    { title: 'Fitness', icon: Dumbbell, description: 'Stay active and reach your health objectives', href: '/fitness' },
    { title: 'Relationships', icon: Heart, description: 'Nurture connections and improve social life', href: '/relationships' },
  ];

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to TaskMaster</h1>
        <p className="text-xl mb-8">Gamify your life and achieve your goals across finance, fitness, and relationships.</p>
        <Button asChild>
          <Link href="/dashboard">Go to Dashboard <ArrowRight className="ml-2" /></Link>
        </Button>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {pillars.map((pillar) => (
          <Card key={pillar.title}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <pillar.icon className="mr-2" />
                {pillar.title}
              </CardTitle>
              <CardDescription>{pillar.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline">
                <Link href={pillar.href}>Explore {pillar.title}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}