//Model dados-pessoa
class pessoa {
    #nome;
    #sobrenome;
    #rg;

    mostrar() {
        return {
            nome: this.#nome,
            sobrenome: this.#sobrenome,
            rg: this.#rg,
        }
    }
    set nome(value) {this.#nome = value}
    get nome() {return this.#nome}

    set sobrenome(value) {this.#sobrenome = value}
    get sobrenome() {return this.#sobrenome}

    set rg(value) {
        if(!/[0-9]{1,13}/.test(value))
            throw new Error("O RG informado não é válido.");
        this.#rg = value;
    }
    get rg() {return this.#rg}
}



//Model Login
class Login {
    #email;
    #senha;
    #confirmSenha;

    mostrar() {
        return {
            email: this.#email,
            senha: this.#senha,
            confirmSenha: this.#confirmSenha,
        }
    }
    set email(value) {
        if (!/[@]/.test(value))
           throw new Error("O email informado é inválido");
        this.#email = value;
    }
    get email() {return this.#email}

    set senha(value) {this.#sobrenome = value}
    get senha() {return this.#senha}

    set confirmSenha(value) {
        if (senha != confirmSenha)
            throw new Error("A senha informada é inválida");
        this.#confirmSenha = value;
    }
    get confirmSenha() {return this.#confirmSenha}
}


//Model Endereço
class Endereco {
    #cep;
    #rua;
    #estado;
    #cidade;
    #bairro;
    #numero;
    #complemento;

    mostrar() {
        return {
            cep: this.#cep,
            rua: this.#rua,
            complemento: this.#complemento,
            bairro: this.#bairro,
            cidade: this.#cidade,
            estado: this.#estado,
        }
    }
    set cep(value) {
        if (!/^[0-9]{8}$/.test(value))
          throw new Error("O CEP informado é inválido");
        this.#cep = value;
      }
      get cep() { return this.#cep }

      set rua(value) { this.#rua = value }
      get rua() { return this.#rua }

      set estado(value) {
        if (!/^[A-Z]{2}$/.test(value))
          throw new Error("O Estado informado é inválido");
        this.#estado = value;
      }
      get estado() { return this.#estado }

      set cidade(value) { this.#cidade = value }
      get cidade() { return this.#cidade }

      set bairro(value) { this.#bairro = value }
      get bairro() { return this.#bairro }

      set numero(value) { this.#numero = value }
      get numero() { return this.#numero }

      set complemento(value) { this.#complemento = value }
      get complemento() { return this.#complemento }
    }
}
//Model dos Planos