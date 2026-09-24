import { useParams, Link } from 'react-router-dom';
import { ReactFlow, Background, Controls, MiniMap } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import StackNode from './StackNode';
import { useTheme } from '../../../context/ThemeContext';

const flowModules = import.meta.glob('../../../flows/*.js', { eager: true });

const nodeTypes = { stack: StackNode };

const NODE_WIDTH = 288;
const NODE_HEIGHT = 170;
const H_GAP = 80;
const V_GAP = 60;
const COLUMNS = 3;

const buildGraph = (stack) => {
  const lastRowCount = stack.length % COLUMNS || COLUMNS;
  const lastRowStart = stack.length - lastRowCount;

  const nodes = stack.map((item, i) => {
    const inLastRow = i >= lastRowStart;
    const column = inLastRow
      ? i - lastRowStart + Math.floor((COLUMNS - lastRowCount) / 2)
      : i % COLUMNS;

    return {
      id: String(i),
      type: 'stack',
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
      position: {
        x: column * (NODE_WIDTH + H_GAP),
        y: Math.floor(i / COLUMNS) * (NODE_HEIGHT + V_GAP),
      },
      data: { ...item, index: i + 1 },
    };
  });

  const edges = stack.slice(1).map((_, i) => ({
    id: `e${i}-${i + 1}`,
    source: String(i),
    target: String(i + 1),
    animated: true,
    style: { stroke: 'var(--theme-accent)', strokeWidth: 1.5 },
  }));

  return { nodes, edges };
};

const FLOW_COLORS = {
  dark: { background: '#565D68', node: '#3DDC97', mask: 'rgba(10, 14, 19, 0.6)' },
  light: { background: '#C3C9D2', node: '#11805A', mask: 'rgba(244, 246, 248, 0.6)' },
};

const Flow = () => {
  const { slug } = useParams();
  const { theme } = useTheme();
  const mod = flowModules[`../../../flows/${slug}.js`];

  if (!mod) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[75vh]">
        <p className="text-sm text-[var(--theme-text-secondary)]">Flow chart not found.</p>
        <Link to="/blog" className="font-['JetBrains_Mono'] text-xs text-[var(--theme-accent)] mt-4">← back to blog</Link>
      </div>
    );
  }

  const { title, stack } = mod;
  const { nodes, edges } = buildGraph(stack);
  const colors = FLOW_COLORS[theme];

  return (
    <div>
      <div className="px-5 md:px-16 pt-8 md:pt-10 pb-4">
        <Link
          to={`/blog/${slug}`}
          className="font-['JetBrains_Mono'] text-xs text-[var(--theme-accent)] no-underline transition-colors duration-200 hover:text-[var(--theme-text-primary)]"
        >
          ← back to post
        </Link>
        <h1 className="font-['Space_Grotesk'] font-bold text-2xl text-[var(--theme-text-primary)] mt-4 mb-1">
          {title}
        </h1>
        <p className="text-sm text-[var(--theme-text-secondary)] m-0">
          Drag to pan, scroll or pinch to zoom.
        </p>
      </div>
      <div className="h-[70vh] w-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          colorMode={theme}
          nodesDraggable={false}
          fitView
          minZoom={0.3}
          maxZoom={1.5}
          proOptions={{ hideAttribution: true }}
        >
          <Background gap={24} color={colors.background} />
          <Controls showInteractive={false} />
          <MiniMap pannable zoomable nodeColor={colors.node} maskColor={colors.mask} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Flow;
