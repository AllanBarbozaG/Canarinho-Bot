class EmailView {

  invalidaEmail() {
    const emailInput = document.getElementById('email-input')
    emailInput.value = `Email inválido`
  }

  confirmaEmail(email) {
    document.body.innerHTML = `
    <h1>
      Email validado com sucesso!
      Um email de mudança de senha foi enviado para ${email}
    </h1>`
  }
}