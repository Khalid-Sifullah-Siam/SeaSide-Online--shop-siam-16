export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 px-4 py-10">
      <div className="mx-auto max-w-5xl animate-pulse rounded-3xl bg-white p-6 shadow-lg md:p-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="h-96 rounded-2xl bg-orange-100" />
          <div>
            <div className="mb-4 h-8 w-3/4 rounded-full bg-orange-100" />
            <div className="mb-3 h-5 w-1/2 rounded-full bg-orange-50" />
            <div className="mb-6 h-24 w-full rounded-2xl bg-orange-50" />
            <div className="h-11 w-40 rounded-full bg-orange-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
