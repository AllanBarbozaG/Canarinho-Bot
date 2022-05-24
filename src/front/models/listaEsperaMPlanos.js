//Model dos Planos
class Planos {
    #planos;
    #assinatura;

    mostrar() {
        return {
            planos: this.#planos,
            assinatura: this.#assinatura,
        }
    }
        set planos(value) { this.#planos = value }
        get planos() { return this.#planos }
  
        set assinatura(value) { this.#assinatura = value }
        get assinatura() { return this.#assinatura }
}