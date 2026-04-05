export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-gray border-t-black rounded-full animate-spin" />
        <p className="content text-gray">Loading...</p>
      </div>
    </div>
  );
}
