import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Slot from "./components/Slot.jsx";
import Button from "./components/Button.jsx";
import Card from "./components/Card.jsx";
import { Inv } from "./components/Inventario.jsx";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  TouchSensor,
  pointerWithin,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

function App() {
  const [silabas, setSilabas] = useState([
    { id: 1, title: "BA" },
    { id: 2, title: "BE" },
    { id: 3, title: "BI" },
    { id: 4, title: "BO" },
    { id: 5, title: "BU" },
    { id: 6, title: "GA" },
    { id: 7, title: "GE" },
    { id: 8, title: "GI" },
    { id: 9, title: "GO" },
    { id: 10, title: "GU" },
    { id: 11, title: "PA" },
    { id: 12, title: "PE" },
    { id: 13, title: "PI" },
    { id: 14, title: "PO" },
  ]);

  const [slots, setSlots] = useState([
    { id: "slot-1", silaba: null },
    { id: "slot-2", silaba: null },
  ]);

  const [activeSilaba, setActiveSilaba] = useState(null);

  const getSilabaPos = (id) => silabas.findIndex((s) => s.id === id);

  const handleDragStart = ({ active }) => {
    const fromInv = silabas.find((s) => s.id === active.id);
    const fromSlot = slots.find((s) => s.silaba?.id === active.id)?.silaba;
    setActiveSilaba(fromInv || fromSlot || null);
  };

  const handleDragEnd = ({ active, over }) => {
    if (!over) {
      setActiveSilaba(null);
      return;
    }

    const activeId = active.id;
    const overId = over.id;

    // Colocar no slot
    if (overId.startsWith("slot-")) {
      const dragged = silabas.find((s) => s.id === activeId);
      if (dragged) {
        setSlots((prev) =>
          prev.map((slot) =>
            slot.id === overId ? { ...slot, silaba: dragged } : slot
          )
        );
        setSilabas((prev) => prev.filter((s) => s.id !== activeId));
      }
    }
    // Voltar ao inventário
    else if (slots.find((s) => s.silaba?.id === activeId)) {
      const origin = slots.find((s) => s.silaba?.id === activeId);
      setSlots((prev) =>
        prev.map((slot) =>
          slot.id === origin.id ? { ...slot, silaba: null } : slot
        )
      );
      setSilabas((prev) => [...prev, origin.silaba]);
    }
    // Reordenação no inventário
    else if (activeId !== overId) {
      const oldIndex = getSilabaPos(activeId);
      const newIndex = getSilabaPos(overId);
      setSilabas((prev) => arrayMove(prev, oldIndex, newIndex));
    }

    setActiveSilaba(null);
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor)
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={pointerWithin}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
        <Header />
        <div className="flex justify-center items-center gap-5 p-8">
          {slots.map((slot) => (
            <Slot key={slot.id} id={slot.id} silaba={slot.silaba} />
          ))}
        </div>
        <Button />
        <Card />
        <Inv silabas={silabas} />

        <DragOverlay wrapperElement="div">
          {activeSilaba && (
            <div className="silaba w-20 h-20 rounded-xl flex items-center justify-center cursor-grabbing">
              {activeSilaba.title}
            </div>
          )}
        </DragOverlay>
    </DndContext>
  );
}

export default App;
