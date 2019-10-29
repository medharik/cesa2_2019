function valider() {
  var ti = document.getElementsByTagName("input");
  var al = document.querySelector(".alert-danger");
  erreur = false;

  for (i = 0; i < ti.length; i++) {
    if (ti[i].value == "") {
      erreur = true;
      // alert(ti[i].name + " champ requis");
    }
  }

  if (erreur == true) {
    al.innerHTML = "tous les champs sont requis ";
    al.className = "alert alert-danger d-block text-center";
  }
}

function changer() {
  c = document.querySelector("input[type=checkbox]");
  p = document.getElementById("p");
  eye = document.getElementById("eye");
  p.type = c.checked ? "text" : "password";
  eye.src = c.checked ? "images/open.png" : "images/close.png";
}

function tombola(i) {
  var group = [1, 2, 3, 4, 5, 6];
  var expose = [
    "web marketing ",
    "Google ads",
    "Facebook Ads",
    "Linkedin ads ",
    "EMail marketing",
    "SEO"
  ];
  return expose[i] + ":" + group[i];
}
