class EmailView {

  invalidaEmail() {
    $('#require-p').css('display', 'block')
    $('#require-p').text(`Email inválido`) 
  };

  confirmaEmail() {
    
    document.body.innerHTML = `
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
      <title> Canarinho </title>
      <style>
        body{
          background-image: url(/Canarinho-Bot/src/img/canarinhosite.png);
          background-size: cover;
          height: 100%;
        }
      </style>
    </head>

    <body> 
    
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed">
          <img id="logoCanarinho" src="/Canarinho-Bot/src/img/CanarinhoBotSized.png" width="225" class="d-inline-block align-text-top .ms-n1 cor-texto">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active cor-texto" id="home" aria-current="page" href="/Canarinho-Bot/index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link cor-texto" id="subscribe" href="/Canarinho-Bot/src/html/form.html">Inscreva-se</a>
              </li>
              <li class="nav-item">
                <a class="nav-link cor-texto" id="profile" href="/Canarinho-Bot/src/html/planos.html">Quem Somos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link cor-texto" id="contact" href="/Canarinho-Bot/src/html/contato.html">Contato</a>
              </li>
              <li class="nav-item">
                <button type="button" class="btn btn-outline-warning .col-6 .mx-auto"><a class="cor-texto" href="/Canarinho-Bot/src/html/login.html">Login</a></button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div>
          <img src=""> 
      </div>

    </body>
    `
  };
};


/*confirmaEmail(email) {
  document.body.innerHTML = `
  <h1>
    Email validado com sucesso!
    Um email de mudança de senha foi enviado para ${email}
  </h1>`
}*/