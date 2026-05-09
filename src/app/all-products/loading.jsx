export default function Loading() {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className="mx-auto mb-10 h-10 w-56 rounded-full bg-orange-100" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="rounded-2xl border border-orange-100 p-4 shadow-sm">
              <div className="mb-4 h-56 rounded-xl bg-orange-100" />
              <div className="mb-3 h-5 w-3/4 rounded-full bg-orange-100" />
              <div className="mb-4 h-4 w-full rounded-full bg-orange-50" />
              <div className="h-10 w-32 rounded-full bg-orange-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
