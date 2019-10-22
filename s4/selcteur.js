function tester() {
  let tp = document.getElementsByTagName("p");
  let cpara = document.getElementsByClassName("para");
  let select_p = document.querySelectorAll(".para img");

  //   console.log("recup para", select_p.innerHTML);
  for (i = 0; i < select_p.length; i++) {
    console.log("recup numero " + i, select_p[i].innerHTML);
  }
}
