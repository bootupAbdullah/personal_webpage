import { Handle, Position } from '@xyflow/react';

const StackNode = ({ data }) => (
  <div className="w-72 min-h-[170px] bg-white dark:bg-[#1a1a1a] border-2 border-[#e0d5c5] dark:border-[#3a3a3a] rounded-xl shadow-sm px-5 py-4">
    <Handle type="target" position={Position.Top} className="!bg-[var(--theme-accent)] !w-2 !h-2 !border-none" />
    <p className="font-['Merriweather'] text-[11px] uppercase tracking-wide text-[#aaaaaa] m-0 mb-1">
      Layer {data.index}
    </p>
    <h3 className="font-['Merriweather'] text-base font-bold text-[#2d2d2d] dark:text-[#f0f0f0] m-0 mb-2 leading-snug">
      {data.name}
    </h3>
    <p className="font-['Merriweather'] text-sm text-[#666666] dark:text-[#aaaaaa] m-0 leading-relaxed">
      {data.summary}
    </p>
    <Handle type="source" position={Position.Bottom} className="!bg-[var(--theme-accent)] !w-2 !h-2 !border-none" />
  </div>
);

export default StackNode;
