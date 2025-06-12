function Header() {
  return (
    <header class="flex items-center justify-between p-4">
      <button class="text-gray-700 hover:text-blue-600 flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Voltar
      </button>

      <div class="text-lg font-semibold text-gray-800">Titulo</div>

      <div class="flex items-center gap-2">
        <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">?</button>
        <button class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">💡</button>
      </div>
    </header>
  );
}

export default Header;
