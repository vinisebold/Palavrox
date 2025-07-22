// Variável para guardar o HTML original do dicionário
let conteudoOriginalDicionario = null;

$(function () {
  const $searchInput = $(".search-input");
  const $dicionarioGrid = $(".dicionario-grid");

  $searchInput.on("input", function () {
    const termo = $(this).val().toUpperCase().trim();

    if (conteudoOriginalDicionario === null) {
      conteudoOriginalDicionario = $dicionarioGrid.html();
    }

    if (termo !== "") {
      $dicionarioGrid.empty();

      Object.keys(PALAVRAS_VALIDAS).forEach(function (palavra) {
        if (palavra.startsWith(termo)) {
          const imgSrc = PALAVRAS_VALIDAS[palavra];
          const $wrapper = $("<div>").addClass("i");
          const $icone = $(`
            <div class="dicionario-slot">
              <img class="search-icon" src="assets/icons/${imgSrc}" alt="${palavra}" title="${palavra}">
            </div>
          `);
          $wrapper.append($icone);
          $dicionarioGrid.append($wrapper);
        }
      });
    } else {
      $dicionarioGrid.html(conteudoOriginalDicionario);
      conteudoOriginalDicionario = null;
    }
  });
});
