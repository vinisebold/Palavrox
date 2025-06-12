import {useDraggable} from '@dnd-kit/core';

export function Inv() {
  return (
    <section class="p-5 mx-auto max-w-4xl my-10 bg-white border border-gray-300 rounded-xl shadow-lg inset-shadow-sm">
      <ul class="grid grid-cols-7 gap-4 place-items-center">
        <li class="w-20 h-20 bg-yellow-400 rounded-lg cursor-move" id="silaba"></li>
        <li class="w-20 h-20 bg-red-400 rounded-lg cursor-move" id="silaba">
          BA
        </li>
        <li class="w-20 h-20 bg-blue-400 rounded-lg cursor-move" id="silaba">
          BE
        </li>
        <li class="w-20 h-20 bg-green-400 rounded-lg cursor-move" id="silaba">
          BI
        </li>
        <li class="w-20 h-20 bg-yellow-400 rounded-lg cursor-move" id="silaba">
          BO
        </li>
        <li class="w-20 h-20 bg-pink-400 rounded-lg cursor-move" id="silaba"></li>
        <li class="w-20 h-20 bg-orange-400 rounded-lg cursor-move" id="silaba"></li>
        <li class="w-20 h-20 bg-teal-400 rounded-lg cursor-move" id="silaba"></li>
        <li class="w-20 h-20 bg-indigo-400 rounded-lg cursor-move" id="silaba"></li>
        <li class="w-20 h-20 bg-lime-400 rounded-lg cursor-move" id="silaba"></li>
        <li class="w-20 h-20 bg-red-400 rounded-lg cursor-move" id="silaba"></li>
        <li class="w-20 h-20 bg-blue-400 rounded-lg cursor-move" id="silaba"></li>
        <li class="w-20 h-20 bg-green-400 rounded-lg cursor-move" id="silaba"></li>
        <li class="w-20 h-20 bg-yellow-400 rounded-lg cursor-move" id="silaba"></li>
      </ul>
    </section>
  );
}

export function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'draggable',
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
      <li class="w-20 h-20 bg-yellow-400 rounded-lg cursor-move" id="draggable"></li>
    </button>
  );
}