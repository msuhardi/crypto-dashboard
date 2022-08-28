const ResizeIc = ({ height, width }: { height?: number; width?: number }) => (
  <svg height={height} width={width} viewBox="0 0 24 24">
    <g>
      <path d="m13 14h-8c-.6 0-1-.4-1-1s.4-1 1-1h7v-7c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z" />
    </g>
    <g>
      <path d="m17 18h-8c-.6 0-1-.4-1-1s.4-1 1-1h7v-7c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z" />
    </g>
  </svg>
);

export default ResizeIc;
