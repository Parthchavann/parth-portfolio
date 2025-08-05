
interface ScrollProgressProps {
  progress: number;
}

export function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-border">
      <div
        className="h-full bg-gradient-to-r from-primary to-teal-500 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
