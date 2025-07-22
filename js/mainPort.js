function initializeDragDrop() {
  const $zonasSoltar = $(".zona-soltar");
  const $slots = $(".inventory-slot");
  const SILABA_SELECTOR = ".silaba";
  const DEFAULT_SILABA_STYLE = {
    top: "",
    left: "",
    position: "",
  };

  function onDragStart(event, ui) {
    const $this = $(this);
    $this.data("originalParent", $this.parent());
    $this.data("animationPlayed", false);

    $this.animate({ opacity: 0 }, 30);
    $this.addClass("being-dragged");
  }

  function onDragStop(event, ui) {
    const $this = $(this);
    if (!$this.data("dropped")) {
      $this.animate({ opacity: 1 }, 300);
    }
    $this.removeClass("being-dragged");
    $this.data("dropped", false);
  }

  function configurarDraggable() {
    $(SILABA_SELECTOR).draggable({
      helper: "clone",
      revert: function(droppableObj) {
        if (!droppableObj) {
          const $original = this;
          $original.animate({ opacity: 1 }, 430);
          return true;
        }
        return false;
      },
      revertDuration: 550,
      opacity: 0.9,
      cursorAt: { top: 24, left: 35 },
      appendTo: "body",
      start: onDragStart,
      drag: function (event, ui) {
        const $this = $(this);
        const $clone = ui.helper;

        if ($this.data("animationPlayed")) return;
        $this.data("animationPlayed", true);
        $clone.addClass("dragging-clone");
        reanimar(ui.helper, "jelly");
      },
      stop: onDragStop,
    });
  }

  function handleDrop(event, ui) {
    console.log("DROP!");
    $zonasSoltar.add($slots).removeClass("slot-hover-smooth slot-soltar-hover");
    const $draggedSilaba = ui.draggable;
    const $slotDestino = $(this);
    const $slotOrigem = $draggedSilaba.data("originalParent");

    $draggedSilaba.data("dropped", true);

    const $existingSilaba = $slotDestino.find(SILABA_SELECTOR);

    if ($existingSilaba.length > 0) {
      $existingSilaba.animate({ opacity: 0, scale: 0.8 }, 0, function () {
        $existingSilaba.detach().css(DEFAULT_SILABA_STYLE);

        $slotOrigem.append($existingSilaba);
        $existingSilaba.css({ opacity: 0, transform: "scale(0.8)" });
        $existingSilaba.animate(
          {
            opacity: 1,
            scale: 1,
          },
          350,
          function () {
            reanimar($existingSilaba, "jelly-reverse");
          }
        );
      });
    }

    $draggedSilaba.detach().css(DEFAULT_SILABA_STYLE);
    $draggedSilaba.css({ opacity: 0, transform: "scale(0.8)" });
    $slotDestino.append($draggedSilaba);

    $draggedSilaba.animate(
      {
        opacity: 1,
        scale: 1,
      },
      100,
      function () {
        reanimar($draggedSilaba, "jelly-reverse");
      }
    );

    $slotDestino.addClass("slot-success");
    setTimeout(() => {
      $slotDestino.removeClass("slot-success");
    }, 600);
  }

  function configurarDroppable() {
    $zonasSoltar.add($slots).droppable({
      accept: SILABA_SELECTOR,
      hoverClass: "slot-soltar-hover",
      tolerance: "pointer",
      drop: handleDrop,
      over: function (event, ui) {
        $(this).addClass("slot-hover-smooth");
      },
      out: function (event, ui) {
        $(this).removeClass("slot-hover-smooth");
      },
    });
  }

  function reanimar($el, classe) {
    $el.removeClass("jelly jelly-reverse");
    void $el[0].offsetWidth;
    $el.addClass(classe);
  }

  configurarDraggable();
  configurarDroppable();
}

// variável para controlar a próxima posição disponível no dicionário
let proximaPosicaoDicionario = 1;
function montarPalavra() {
  let textoNaCaixa1 = $("#silaba1").text();
  let textoNaCaixa2 = $("#silaba2").text();
  let textoNaCaixa3 = $("#silaba3").text();
  let palavraMontada = "";

  if (textoNaCaixa1 !== "") {
    palavraMontada = palavraMontada + textoNaCaixa1;
  }
  if (textoNaCaixa2 !== "") {
    palavraMontada = palavraMontada + textoNaCaixa2;
  }
  if (textoNaCaixa3 !== "") {
    palavraMontada = palavraMontada + textoNaCaixa3;
  }
  let divResultado = document.getElementById("resultado");
  if (palavraMontada === "") {
    divResultado.innerHTML = "?";
  } else if (PALAVRAS_VALIDAS[palavraMontada]) {
    // Define o conteúdo do resultado
    let conteudoResultado = "";
    if (PALAVRAS_VALIDAS[palavraMontada]) {
      conteudoResultado = `<img class="dicionario-icon" src="../../assets/icons/${PALAVRAS_VALIDAS[palavraMontada]}" alt="${palavraMontada}" title="${palavraMontada}" >`;
    } else {
      conteudoResultado = "<strong>" + palavraMontada + "</strong>";
    }

    // Atualiza o resultado
    divResultado.innerHTML = conteudoResultado;

    // Adiciona ao dicionário após um pequeno delay
    setTimeout(function () {
      adicionarAoDicionario(conteudoResultado);
    }, 500);
  } else {
    divResultado.innerHTML = "❌";
  }
}

function adicionarAoDicionario(conteudo) {
  // Verifica se ainda há espaço no dicionário
  if (proximaPosicaoDicionario <= 12) {
    const espacoDicionario = document.getElementById("dicionario" + proximaPosicaoDicionario);

    // Cria um elemento para o dicionário
    const elementoDicionario = document.createElement("div");
    elementoDicionario.className = "dicionario-icon";
    elementoDicionario.innerHTML = conteudo;

    // Adiciona ao dicionário
    espacoDicionario.appendChild(elementoDicionario);

    // Avança para a próxima posição
    proximaPosicaoDicionario++;

    // Limpa a área de montagem
    limparAreaMontagem();
  } else {
    alert("Seu dicionário está cheio!");
  }
}

function limparAreaMontagem() {
  // Remove totalmente as sílabas da área de montagem
  $("#silaba1, #silaba2, #silaba3").empty();

  // Limpa o resultado
  document.getElementById("resultado").innerHTML = "";
}
