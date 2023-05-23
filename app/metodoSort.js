let btnOrdenarPreco = document.getElementById("btnOrdenarPorPreco");
btnOrdenarPreco.addEventListener("click", ordenarPorPreco);

function ordenarPorPreco() {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  exibirLivrosTela(livrosOrdenados);
}