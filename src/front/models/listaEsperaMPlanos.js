//Model dos Planos
class Planos {
    #plano;
    #assinatura;

    mostrar() {
        return {
            plano: this.#plano,
            assinatura: this.#assinatura,
        }
    }
        set plano(value) { this.#plano = value }
        get plano() { return this.#plano }
  
        set assinatura(value) { this.#assinatura = value }
        get assinatura() { return this.#assinatura }
}