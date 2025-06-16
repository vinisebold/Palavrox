import React from "react";
import "../../style.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const Silabas = ({ id, title }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0 : 1,
  };

  return (
    <li
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="silaba w-20 h-20 rounded-2xl cursor-grab flex items-center justify-center text-white font-bold text-lg"
    >
      {title}
    </li>
  );
};
