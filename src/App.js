import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
      <div className="App">
      <div className="container" id="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Créez votre compte</h5>
                            <form className="form-signin" id="inscrire">
                            <div className="form-label-group ">
                                    <input type="text" id="inputName" className="form-control" placeholder="Name" required/>
                                    <label htmlFor="inputName">Nom*</label>
                                </div>

                                <div className="form-label-group ">
                                    <input type="text" id="inputUsername" className="form-control" placeholder="Username" required/>
                                    <label htmlFor="inputUsername">Prénom*</label>
                                </div>

                                <div className="form-label-group">
                                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required/>
                                    <label htmlFor="inputEmail">Adresse Email*</label>
                                </div>

                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                                    <label htmlFor="inputPassword">Nouveau mot de passe*</label>
                                </div>
                                <div className="form-label-group">
                                    <input type="password" id="inputPasswordC" className="form-control" placeholder="Password" required/>
                                    <label htmlFor="inputPassword">Confirmez le mot de passe*</label>
                                </div>
                                <p id="erreur"></p>
                                <hr className="my-4"/>
                                <button className="btn btn-lg btn-success btn-block text-uppercase" type="submit" value="Send">Envoyer</button>
                            </form>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
  );
}

const inscrire = document.getElementById("inscrire");
if (inscrire) {
  inscrire.addEventListener("submit", function(e) {
      e.preventDefault();
      let pwc = document.getElementById("inputPasswordC").value;
      let pw = document.getElementById("inputPassword").value;
      if (pw !== pwc) {
          document.getElementById("erreur").innerHTML = "Le mot de passe  ne correspond pas au mot de passe défini";
      } else {
          let html=[];
          html.push(`<img src="Bienvenue.jpg" class="img-fluid" alt="Responsive image">
          `);
          document.getElementById("container").innerHTML = html.join("");
      }
  })
}
export default App;