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