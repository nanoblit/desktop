// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

interface Props {
  onClose: () => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrag: (e: React.DragEvent<HTMLDivElement>) => void;
}

function WindowHeader({ onClose, onDragStart, onDrag }: Props) {
  return (
    <div
      className="w-full h-7 bg-slate-500 text-slate-100 flex align-middle justify-between"
      draggable
      onDragStart={onDragStart}
      onDrag={onDrag}
    >
      <h1>Test</h1>
      <button className="" onClick={onClose}>
        X
      </button>
    </div>
  );
}

export default WindowHeader;
