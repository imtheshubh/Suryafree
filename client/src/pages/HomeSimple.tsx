export default function HomeSimple() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-4xl font-bold text-primary mb-4">SuryaFree - Test Page</h1>
      <p className="text-lg">If you can see this, the app is working!</p>
      <div className="mt-8 p-4 bg-card rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">Debug Info:</h2>
        <p>React is rendering ✓</p>
        <p>Tailwind styles are working ✓</p>
        <p>Shadcn components are available ✓</p>
      </div>
    </div>
  );
}