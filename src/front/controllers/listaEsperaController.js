class ListaEsperaController {
    cadastros = [];

    input(selector) {
      return document.querySelector(`#${selector}`).value;
    }

    cadastrar() {
      try {
        const pessoa = new Pessoa;
        const endereco = new Endereco;
        const login = new Login;
        const planos = new Planos;

        pessoa.nome = this.input("nome");
        pessoa.sobrenome = this.input("sobrenome");

        endereco.cep = this.input("cep");
        endereco.rua = this.input("rua");
        endereco.bairro = this.input("bairro");
        endereco.cidade = this.input("cidade");
        endereco.estado = this.input("estado");

        login.email = this.input("email");
        login.senha = this.input("senha");
        login.confirmSenha = this.input("confirmSenha");

        planos.planos = this.input("planos");
        planos.assinatura = this.input("assinatura");

        this.cadastros.push({
          pessoa: pessoa.mostrar(),
          endereco: endereco.mostrar(),
          planos: planos.mostrar(),

        })

        console.log(this.cadastros);
      } catch (error) {
        console.log(`Um erro foi encontrado: ${error.message}`);
      }
    }
    
    buscarCep(cep) {
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      fetch(url)
        .then(response => response.json())
        .then(json => {
          const view = new ListaEsperaView();
          view.renderEndereco(json);
        })
        .catch(response => { })
    }
  }
