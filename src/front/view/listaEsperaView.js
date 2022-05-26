class ListaEsperaView {
    renderEndereco(dados) {
      document.querySelector("#rua").value = dados.logradouro;
      document.querySelector("#bairro").value = dados.bairro;
      document.querySelector("#cidade").value = dados.localidade;
      document.querySelector("#estado").value = dados.uf;
    }
  }
  
  // main.js
  listaEspera = new ListaEsperaController;
  
  document
    .querySelector("#pesquisar-cep")
    .addEventListener('click', event => {
      event.preventDefault();
      const cep = document.querySelector("#cep").value;
      listaEspera.buscarCep(cep);
    })
  
  document
    .querySelector("#btn-enviar")
    .addEventListener('click', event => {

      listaEspera.cadastrar();
    })