// ================================
// MENU HAMBÚRGUER (MOBILE)
// ================================
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("menu-ativo");
});

// Fechar menu ao clicar em algum link
document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("menu-ativo");
  });
});


// ================================
// DARK MODE (SALVA NO NAVEGADOR)
// ================================
const botaoDark = document.getElementById("dark-mode");

// Se já tiver dark mode salvo, aplica automaticamente
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
  botaoDark.textContent = "☀";
}

botaoDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Salvar no navegador
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "true");
    botaoDark.textContent = "☀";
  } else {
    localStorage.setItem("darkMode", "false");
    botaoDark.textContent = "🌙";
  }
});


// ================================
// CARDS EXPANSÍVEIS (SETINHA)
// ================================
const cardsExpansiveis = document.querySelectorAll(".expansivel");

cardsExpansiveis.forEach(card => {
  card.addEventListener("click", () => {

    // Fecha os outros cards
    cardsExpansiveis.forEach(outro => {
      if (outro !== card) {
        outro.classList.remove("ativo");
      }
    });

    // Abre ou fecha o card clicado
    card.classList.toggle("ativo");
  });
});

// Evita fechar o card quando clicar em um link dentro dele
document.querySelectorAll(".conteudo-card a").forEach(link => {
  link.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});


// ================================
// BOTÃO VOLTAR AO TOPO
// ================================
const botaoTopo = document.getElementById("topo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }
});

botaoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
