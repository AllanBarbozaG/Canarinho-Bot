class EmailController {

  constructor() {
    this.bancoEmails = [];
  };

  validaEmail() {
    let emailInput = document.getElementById('email-input').value;
    let novoEmail = new EmailModel(emailInput);
    const novoEmailView = new EmailView();
    
    if (novoEmail.email === undefined) {
      console.log('email invalido')
      novoEmailView.invalidaEmail()
    } else {
      this.bancoEmails.push(novoEmail);
      novoEmailView.confirmaEmail(novoEmail.email);
      
      console.log(novoEmail)
      console.log(novoEmail.email)
      console.log(this.bancoEmails)
    }
 };

 exibeAlerta() {

 };
}

const emailController = new EmailController();
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  emailController.validaEmail();

  
  
})

