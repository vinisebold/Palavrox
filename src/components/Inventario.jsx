import "../style.css";
import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import { Silabas } from "./silabas/Silabas";

export const Inv = ({ silabas }) => {
  return (
    <section class="p-5 mx-auto max-w-4xl my-10 bg-white border border-gray-300 rounded-xl shadow-lg inset-shadow-sm">
      <ul class="grid grid-cols-7 gap-4 place-items-center">
        <SortableContext items={silabas} strategy={horizontalListSortingStrategy}>
          {silabas.map((silabas) => (
            <Silabas id={silabas.id} title={silabas.title} key={silabas.id} />
          ))}
        </SortableContext>
      </ul>
    </section>
  );
};
