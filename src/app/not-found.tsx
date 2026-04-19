import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-display font-bold text-foreground mb-4">404</h1>
      <p className="text-muted-foreground text-lg mb-8">This page doesn't exist.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white font-semibold uppercase tracking-wider text-sm hover:bg-primary/80 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
