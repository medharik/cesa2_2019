//closure ou fonction anonyme
$(function() {
  $("input").blur(function() {
    if ($(this).val() == "") {
      $("#erreur").html(
        "erreur , le champs " + $(this).data("savio") + " est obligatoire"
      );
      // $(this).attr("name")
      //alert($(this).data("savio"));
      // $("#erreur").addClass("d-block");
      // $("#erreur").removeClass("d-none");
      $("#erreur").show(5000);
    } else {
      // $("#erreur").addClass("d-none");
      // $("#erreur").removeClass("d-block");
      $("#erreur").html("");
      $("#erreur").hide();
    }
  });

  $("button").click(function() {
    alert("test");
  });
});

$("#passe").click(function() {
  alert("click sur mot de passe ");
});
