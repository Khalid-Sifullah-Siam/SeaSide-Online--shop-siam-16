export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 p-6">
      <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-lg">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-orange-500 border-t-transparent" />
        <span className="font-medium text-gray-700">Loading SeaSide...</span>
      </div>
    </div>
  );
}
