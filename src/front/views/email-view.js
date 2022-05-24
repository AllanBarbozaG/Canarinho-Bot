class EmailView {

  invalidaEmail() {
    $('#require-p').css('display', 'block')
    $('#require-p').text(`Email inválido`) 
  };

  confirmaEmail() {
    
    document.body.innerHTML = `

    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav d-flex justify-content-between" >
            <li class="nav-item">
              <a class="nav-link"  id="home" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link cor-texto" id="subscribe" href="#">Inscreva-se</a>
            </li>
            <li class="nav-item">
              <a class="nav-link cor-texto" id="profile" href="#">Quem Somos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link cor-texto" id="contact" href="#">Contato</a>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-outline-warning .col-6 .mx-auto"><a class="cor-texto" href="paginadelogin.html">Login</a></button>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <div id="confirmaLogin-div">
      <h1>
        Login realizado com sucesso!
      </h1>
      
      <button class="btn btn-outline-warning .col-6 .mx-auto">Continuar</button>
    </div>
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