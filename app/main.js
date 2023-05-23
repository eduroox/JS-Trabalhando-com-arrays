let livros = [];
const endPointApi =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivros();

async function getBuscarLivros() {
  const res = await fetch(endPointApi);
  livros = await res.json();
  let livrosComDesconto = aplicarDesconto(livros);
  exibirLivrosTela(livrosComDesconto);
}