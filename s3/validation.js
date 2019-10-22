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
function validerDate() {
  const cdate = document.getElementById("date");
  const sp = document.querySelector("#date+span");
  let d = cdate.value.trim();
  let m_date = /^([1-9]|1[0-2])-([1-9]|[1-2][0-9]|3[01])-(19[0-9]{2}|20[0-9]{2})$/;
  t = d.split(m_date);
  console.log(t);
  t = t.filter(x => x != "");
  d1 = new Date(t[2], t[1], t[0]);
  if (!m_date.test(d)) {
    sp.innerHTML = "date non valide";
  } else {
    sp.innerHTML = "ok";
  }
}
function validerTout() {
  validerNom();
  validerEmail();
  document.getElementById("erreur2").innerHTML = message;
  message = "";
}
