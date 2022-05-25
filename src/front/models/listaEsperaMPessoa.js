//Model dados-pessoa
class Pessoa {
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