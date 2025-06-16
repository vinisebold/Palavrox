import React from "react";
import { useDroppable, useDraggable } from "@dnd-kit/core";

const Slot = ({ id, silaba }) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`w-54 h-54 bg-gray-50 border-2 rounded-xl flex items-center justify-center text-gray-500 text-xl shadow-lg inset-shadow-sm transition-colors duration-200 ${
        isOver ? "border-blue-400 bg-blue-50" : "border-gray-200"
      }`}
    >
      {silaba ? <SilabaInSlot silaba={silaba} slotId={id} /> : <span className="text-2xl">+</span>}
    </div>
  );
};

const SilabaInSlot = ({ silaba}) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useDraggable({
    id: silaba.id,
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="silaba w-16 h-16 rounded-xl cursor-move flex items-center justify-center text-white font-bold text-lg"
    >
      {silaba.title}
    </div>
  );
};

export default Slot;
