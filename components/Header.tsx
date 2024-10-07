import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

export default function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">TaskMaster</Link>
        <nav className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/tasks">Tasks</Link>
          </Button>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}