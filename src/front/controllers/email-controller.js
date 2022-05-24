class EmailController {

  constructor() {
    this.bancoEmails = [];
  };

  validaEmail() {
    let emailInput = document.getElementById('email-input').value;
    let novoEmail = new EmailModel(emailInput);
    const novoEmailView = new EmailView();
    
    if (novoEmail.email === undefined) {
      novoEmailView.invalidaEmail();
    } else if ($('#inputPassword3').val() !== ''){
      this.bancoEmails.push(novoEmail);
      novoEmailView.confirmaEmail(novoEmail.email);
    };
  };
};

const emailController = new EmailController();
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  emailController.validaEmail();
})

