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
    set email(value) {this.#email = value}
    get email() {return this.#email}

    set senha(value) {this.#senha = value}
    get senha() {return this.#senha}

    set confirmSenha(value) {this.#confirmSenha = value}
    get confirmSenha() {return this.#confirmSenha}
}

