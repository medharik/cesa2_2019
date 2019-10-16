var message = "";
function validerNom() {
  let cnom = document.getElementById("nom");
  let nom = cnom.value.trim();
  let m = /^[a-zA-Z]{2,}$/;
  if (nom == "") {
    message += "le nom est requis<br>";
  }
  if (!m.test(nom)) {
    message += "le champs no est non valide 2<br>";
  }
}
function validerEmail() {
  const cmail = document.getElementById("smail");
  let email = cmail.value.trim();
  let m_email = /^[a-z]{1,}[a-z0-9._]{0,}@[a-z]{2,}.[a-z]{2,}$/;
  if (!m_email.test(email)) {
    message += "Email non valide";
  }
}
function validerTout() {
  validerNom();
  validerEmail();
  document.getElementById("erreur2").innerHTML = message;
  message = "";
}
