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