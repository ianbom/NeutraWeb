/**
 * Framer button label: two stacked copies; on hover of the parent `.group`
 * the stack slides up one line (20px), spring-like ~0.5s settle measured.
 */
export function RollLabel({ children, className = "" }: { children: string; className?: string }) {
  return (
    <span className={`relative flex h-5 flex-col overflow-hidden ${className}`}>
      <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-5 motion-reduce:transition-none">
        <span className="block h-5 text-sm leading-5 font-medium whitespace-nowrap">{children}</span>
        <span className="block h-5 text-sm leading-5 font-medium whitespace-nowrap" aria-hidden>
          {children}
        </span>
      </span>
    </span>
  );
}
