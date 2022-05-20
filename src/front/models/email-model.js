class EmailModel {
  constructor(email) {
    
    try {

      let emailUsuario = email.substring(0, email.indexOf('@'));
      let emailDominio = email.substring(email.indexOf('@') + 1, email.length);
      
      if (emailUsuario.length >= 1 && 
          emailUsuario.indexOf('@') == -1 &&
          emailUsuario.indexOf(' ') == -1 &&
          emailDominio.length >= 3 &&
          emailDominio.indexOf('@') == -1 &&
          emailDominio.indexOf(' ') == -1 &&
          emailDominio.indexOf('.') !== -1 &&
          emailDominio.indexOf('.') >= 1 &&
          emailDominio.lastIndexOf('.') < emailDominio.length - 1)
        {
        this.email = email;
        console.log(`email: ${this.email} validado com sucesso!`);
      } else {
        throw new Error(`email: ${thos.email}  inválido!`);
      }
    } catch(erro) {
      console.log(erro)
    }
  }
}