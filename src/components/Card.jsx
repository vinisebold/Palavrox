function Card() {
  return (
    <section class="bg-white border border-gray-300 rounded-xl p-5 mx-auto max-w-4xl my-10 gap-6 shadow-lg inset-shadow-sm flex">
      <div class="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-3xl font-bold flex-shrink-0">
        IMG
      </div>

      <div class="flex-grow">
        <h2 class="text-xl font-semibold text-gray-800 mb-2">Título do Card</h2>
        <p class="text-gray-600">Aqui vai uma descrição curta...</p>
      </div>
    </section>
  );
}

export default Card;
