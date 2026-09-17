export const title = 'Headless Linux Game Streaming — The Stack';

export const stack = [
  {
    name: 'Hardware',
    summary: "The physical machine. The GPU exists but isn't doing anything yet.",
  },
  {
    name: 'Operating System (Ubuntu)',
    summary: "The base OS and kernel. Recognizes the GPU exists but can't use it yet.",
  },
  {
    name: 'GPU Driver (NVIDIA)',
    summary: 'The layer that lets everything above it actually talk to the GPU, for rendering and (attempted) hardware encoding.',
  },
  {
    name: 'Desktop / Compositor Session (Plasma + KWin)',
    summary: 'A headless graphical session, started manually since a plain SSH connection has no display context of its own.',
  },
  {
    name: 'Virtual Display (Output)',
    summary: 'The fake screen KWin actually draws into, created and torn down on demand.',
  },
  {
    name: 'PipeWire',
    summary: 'Captures the rendered frames off the virtual display and hands them to the streaming host.',
  },
  {
    name: 'Sunshine',
    summary: 'Encodes and streams those frames out over the network, and receives input back from the client.',
  },
  {
    name: 'RetroArch',
    summary: 'The emulator itself, rendering the actual game into the virtual display.',
  },
  {
    name: 'Network Path',
    summary: 'Firewall and VPN, the route the stream actually travels. Standing configuration, not something started per-session.',
  },
  {
    name: 'Moonlight',
    summary: "The client app, on the Mac. Decodes the incoming stream and sends input back the other way.",
  },
];
