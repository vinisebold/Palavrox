function Button() {
  return (
    <section className="flex justify-center items-center gap-8">
      <button className="px-20 py-5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">Montar</button>
      <button className="px-20 py-5 border-2 border-gray-200 text-gray-400 rounded-full hover:bg-gray-100 transition">
        Limpar
      </button>
    </section>
  );
}

export default Button;
