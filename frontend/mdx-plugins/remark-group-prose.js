// Groups runs of prose (paragraphs, lists, blockquotes, images) that sit
// between headings and code blocks into a single wrapper `<div class="prose-group">`,
// matching the terminal-card visual language used across the rest of the site.
export default function remarkGroupProse() {
  return (tree) => {
    const grouped = [];
    let buffer = [];

    const flush = () => {
      if (buffer.length === 0) return;
      grouped.push({
        type: 'proseGroup',
        data: { hName: 'div', hProperties: { className: ['prose-group'] } },
        children: buffer,
      });
      buffer = [];
    };

    for (const node of tree.children) {
      if (node.type === 'heading' || node.type === 'code' || node.type === 'thematicBreak') {
        flush();
        grouped.push(node);
      } else {
        buffer.push(node);
      }
    }
    flush();

    tree.children = grouped;
  };
}
