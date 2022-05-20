class EmailController {
  constructor() {
    this.bancoEmails = [];
  }

  validaEmail() {
    let emailInput = document.getElementById('email-input').value;
    const novoEmail = new EmailModel(emailInput);
    this.bancoEmails.push(novoEmail);
    
  }
}

