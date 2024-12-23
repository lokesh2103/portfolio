export const CodeHeader = () => {
  return (
    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30" />
      </div>
      <span className="text-sm comment font-mono">developer.ts</span>
    </div>
  );
};