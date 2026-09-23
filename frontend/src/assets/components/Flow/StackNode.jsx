import { Handle, Position } from '@xyflow/react';

const StackNode = ({ data }) => (
  <div className="w-72 min-h-[170px] bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-xl px-5 py-4">
    <Handle type="target" position={Position.Top} className="!bg-[var(--theme-accent)] !w-2 !h-2 !border-none" />
    <p className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-wide text-[var(--theme-text-muted)] m-0 mb-1">
      Layer {data.index}
    </p>
    <h3 className="font-['Space_Grotesk'] text-base font-bold text-[var(--theme-text-primary)] m-0 mb-2 leading-snug">
      {data.name}
    </h3>
    <p className="text-sm text-[var(--theme-text-secondary)] m-0 leading-relaxed">
      {data.summary}
    </p>
    <Handle type="source" position={Position.Bottom} className="!bg-[var(--theme-accent)] !w-2 !h-2 !border-none" />
  </div>
);

export default StackNode;
