function Slot() {
  return (
    <section class="flex justify-center items-center gap-5 p-8">
      <div
        class="w-54 h-54 bg-gray-50 border-2 border-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-xl shadow-lg inset-shadow-sm"
        draggable="true"
      >
        1
      </div>

      <div
        class="w-54 h-54 bg-gray-50 border-2 border-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-xl shadow-lg inset-shadow-sm"
        draggable="true"
      >
        2
      </div>
    </section>
  );
}

export default Slot;
