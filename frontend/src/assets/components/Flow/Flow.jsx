import { useParams, Link } from 'react-router-dom';
import { ReactFlow, Background, Controls, MiniMap } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import StackNode from './StackNode';

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

const Flow = () => {
  const { slug } = useParams();
  const mod = flowModules[`../../../flows/${slug}.js`];

  if (!mod) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[75vh]">
        <p className="font-['Merriweather'] text-sm text-[#777777]">Flow chart not found.</p>
        <Link to="/blog" className="font-['Merriweather'] text-xs text-[#c07830] mt-4">← Back to Blog</Link>
      </div>
    );
  }

  const { title, stack } = mod;
  const { nodes, edges } = buildGraph(stack);

  return (
    <div>
      <div className="px-8 md:px-16 pt-10 pb-4">
        <Link
          to={`/blog/${slug}`}
          className="font-['Merriweather'] text-xs text-[#c07830] no-underline hover:text-[#c19a5a] transition-colors duration-200"
        >
          ← Back to Post
        </Link>
        <h1 className="font-['Merriweather'] text-2xl font-bold text-[#2d2d2d] dark:text-[#f0f0f0] mt-4 mb-1">
          {title}
        </h1>
        <p className="font-['Merriweather'] text-sm text-[#777777] m-0">
          Drag to pan, scroll or pinch to zoom.
        </p>
      </div>
      <div className="h-[70vh] w-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          nodesDraggable={false}
          fitView
          minZoom={0.3}
          maxZoom={1.5}
          proOptions={{ hideAttribution: true }}
        >
          <Background gap={24} color="#e0d5c5" />
          <Controls showInteractive={false} />
          <MiniMap pannable zoomable nodeColor="#c07830" maskColor="rgba(250, 248, 245, 0.6)" />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Flow;
