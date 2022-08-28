const DragIc = ({ width, height }: { width?: number; height?: number }) => (
  <svg viewBox="0 0 24 24" height={height} width={width}>
    <circle cx="8" cy="4" r="2" />
    <circle cx="8" cy="12" r="2" />
    <circle cx="8" cy="20" r="2" />
    <circle cx="16" cy="4" r="2" />
    <circle cx="16" cy="12" r="2" />
    <circle cx="16" cy="20" r="2" />
  </svg>
);

export default DragIc;
