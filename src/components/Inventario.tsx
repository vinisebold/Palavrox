import "../style.css";
import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import { Silabas } from "./silabas/Silabas";

// Tipo da sílaba, compatível com o usado em todo o projeto
interface Silaba {
  id: number;
  title: string;
}

interface InvProps {
  silabas: Silaba[];
}

export const Inv: React.FC<InvProps> = ({ silabas }) => {
  return (
    <section className="p-5 mx-auto max-w-4xl my-10 bg-white border border-gray-300 rounded-xl shadow-lg inset-shadow-sm">
      <ul className="grid grid-cols-7 gap-4 place-items-center">
        <SortableContext items={silabas.map(s => s.id)} strategy={horizontalListSortingStrategy}>
          {silabas.map((silaba) => (
            <Silabas id={silaba.id} title={silaba.title} key={silaba.id} />
          ))}
        </SortableContext>
      </ul>
    </section>
  );
};
