function parsejaapostrof(resposta) {
  if (resposta.indexOf("'") != -1) {
    var aux1, aux2, posicio;
    posicio = 0;
    while (
      posicio < resposta.length + 1 &&
      resposta.indexOf("'", posicio) != -1
    ) {
      aux1 = resposta.substring(0, resposta.indexOf("'", posicio));
      aux2 = resposta.substring(
        resposta.indexOf("'", posicio),
        resposta.length,
      );
      posicio = resposta.indexOf("'", posicio) + 3;
      resposta = aux1 + "\\" + aux2;
    }
  }
  return resposta;
}

function comhohefet() {
  var correccio_array = new Array();
  for (let i = 0; i < nelements; i++) {
    let resposta = eval("document." + nomform + ".resposta" + i + ".value");
    resposta = parsejaapostrof(resposta);
    resposta = trim(resposta);
    correccio_array = correccio[i].split("||");
    var com_correccio = false;
    var resultat = false;
    if (correccio_array.length < 2) {
      com_correccio = eval("'" + resposta + "'=='" + correccio_array + "'");
    } else {
      com_correccio = eval("'" + resposta + "'=='" + correccio_array[0] + "'");
      for (let j = 1; j < correccio_array.length; j++) {
        resultat = eval("'" + resposta + "'=='" + correccio_array[j] + "'");
        com_correccio = eval(com_correccio) || eval(resultat);
      }
    }
    if (eval(com_correccio)) {
      eval("document." + nomform + ".resposta" + i + ".id='correct'");
    } else {
      eval("document." + nomform + ".resposta" + i + ".id='incorrect'");
    }
  }
}
function comhohefetmultipleform(elementinici, elementfi) {
  var correccio_array = new Array();
  for (i = elementinici; i <= elementfi; i++) {
    resposta = eval("document." + nomform + ".resposta" + i + ".value");
    resposta = parsejaapostrof(resposta);

    resposta = trim(resposta);
    correccio_array = correccio[i].split("||");
    var com_correccio = false;
    var resultat = false;
    if (correccio_array.length < 2) {
      com_correccio = eval("'" + resposta + "'=='" + correccio_array + "'");
    } else {
      com_correccio = eval("'" + resposta + "'=='" + correccio_array[0] + "'");
      for (j = 1; j < correccio_array.length; j++) {
        resultat = eval("'" + resposta + "'=='" + correccio_array[j] + "'");
        com_correccio = eval(com_correccio) || eval(resultat);
      }
    }
    if (eval(com_correccio)) {
      eval("document." + nomform + ".resposta" + i + ".id='correct'");
    } else {
      eval("document." + nomform + ".resposta" + i + ".id='incorrect'");
    }
  }
}

function comhohefetdesp() {
  var correccio_array = new Array();
  for (i = 0; i < nelements; i++) {
    resposta = eval("document." + nomform + ".resposta" + i + ".value");
    resposta = trim(resposta);
    correccio_array = correccio[i].split("||");
    var com_correccio = false;
    var resultat = false;
    if (correccio_array.length < 2) {
      com_correccio = eval("'" + resposta + "'=='" + correccio_array + "'");
    } else {
      com_correccio = eval("'" + resposta + "'=='" + correccio_array[0] + "'");
      for (j = 1; j < correccio_array.length; j++) {
        resultat = eval("'" + resposta + "'=='" + correccio_array[j] + "'");
        com_correccio = eval(com_correccio) || eval(resultat);
      }
    }
    if (eval(com_correccio)) {
      eval(
        "document." +
        nomform +
        ".resposta" +
        i +
        ".options[document." +
        nomform +
        ".resposta" +
        i +
        ".selectedIndex].id='correct'",
      );
      let elem = document.getElementById(nomform + "rr" + i);
      elem.src = "../../../images/b_correcte.gif";
    } else {
      eval(
        "document." +
        nomform +
        ".resposta" +
        i +
        ".options[document." +
        nomform +
        ".resposta" +
        i +
        ".selectedIndex].id='incorrect'",
      );
      elem = document.getElementById(nomform + "rr" + i);
      elem.src = "../../../images/b_incorrecte.gif";
    }
  }
}

function comhohefetdespDE(
  correcciodesp,
  nelementsdesp,
  nelements_despDE,
  nomformdesp,
) {
  var correccio_array = new Array();
  nelementsdesp.forEach((i) => {
    resposta = eval("document." + nomformdesp + ".resposta" + i + ".value");
    resposta = trim(resposta);
    correccio_array = correcciodesp[i].split("||");
    var com_correccio = false;
    var resultat = false;
    if (correccio_array.length < 2) {
      com_correccio = eval("'" + resposta + "'=='" + correccio_array + "'");
    } else {
      com_correccio = eval("'" + resposta + "'=='" + correccio_array[0] + "'");
      for (j = 1; j < correccio_array.length; j++) {
        resultat = eval("'" + resposta + "'=='" + correccio_array[j] + "'");
        com_correccio = eval(com_correccio) || eval(resultat);
      }
    }
    if (eval(com_correccio)) {
      eval(
        "document." +
        nomformdesp +
        ".resposta" +
        i +
        ".options[document." +
        nomformdesp +
        ".resposta" +
        i +
        ".selectedIndex].id='correct'",
      );
      elem = document.getElementById(nomformdesp + "rr" + i);
      elem.src = "../../../images/b_correcte.gif";
    } else {
      eval(
        "document." +
        nomformdesp +
        ".resposta" +
        i +
        ".options[document." +
        nomformdesp +
        ".resposta" +
        i +
        ".selectedIndex].id='incorrect'",
      );
      elem = document.getElementById(nomformdesp + "rr" + i);
      elem.src = "../../../images/b_incorrecte.gif";
    }
  });
}

function comhohefetradioSP() {
  var correccio_array_radio = new Array();
  var resposta_radio = "0";
  nelements_radio.forEach((i) => {
    possibilitats_radio.forEach((j) => {
      if (
        eval(
          "document." +
          nomform_radio +
          ".resposta_radio" +
          i +
          "[" +
          j +
          "].checked",
        )
      ) {
        resposta_radio = eval(
          "document." +
          nomform_radio +
          ".resposta_radio" +
          i +
          "[" +
          j +
          "].value",
        );
      }
    });
    correccio_array_radio = correccio_radio[i];
    var com_correccio_radio = false;
    var resultat_radio = false;
    var contestada = false;
    com_correccio_radio = eval(
      "'" + resposta_radio + "'=='" + correccio_array_radio + "'",
    );

    if (eval(com_correccio_radio)) {
      possibilitats_radio.forEach((j) => {
        if (
          eval(
            "document." +
            nomform_radio +
            ".resposta_radio" +
            i +
            "[" +
            j +
            "].checked",
          )
        ) {
          eval(
            "document." +
            nomform_radio +
            ".resposta_radio" +
            i +
            "[" +
            j +
            "].id='correct_radio'",
          );
          elem = document.getElementById(nomform_radio + "rr" + i + j);
          elem.src = "../../../images/b_correcte.gif";
          contestada = true;
        }
      });
    } else {
      possibilitats_radio.forEach((j) => {
        if (
          eval(
            "document." +
            nomform_radio +
            ".resposta_radio" +
            i +
            "[" +
            j +
            "].checked",
          )
        ) {
          eval(
            "document." +
            nomform_radio +
            ".resposta_radio" +
            i +
            "[" +
            j +
            "].id='incorrect_radio'",
          );
          elem = document.getElementById(nomform_radio + "rr" + i + j);
          elem.src = "../../../images/b_incorrecte.gif";

          contestada = true;
        }
      });
    }
    /* Nou per marcar totes les respostes*/
    if (!contestada) {
      possibilitats_radio.forEach((j) => {
        eval(
          "document." +
          nomform_radio +
          ".resposta_radio" +
          i +
          "[" +
          j +
          "].id='warning_radio'",
        );
        elem = document.getElementById(nomform_radio + "rr" + i + j);
        elem.src = "../../../images/b_atencio.gif";
      });
    }
  });
}

function comhohefetradio(
  correccio_radio,
  nelements_radio,
  possibilitats_radio,
  nomform_radio,
) {
  var correccio_array_radio = new Array();
  var resposta_radio = "0";
  nelements_radio.forEach((i) => {
    possibilitats_radio.forEach((j) => {
      if (
        eval(
          "document." +
          nomform_radio +
          ".resposta_radio" +
          i +
          "[" +
          j +
          "].checked",
        )
      ) {
        resposta_radio = eval(
          "document." +
          nomform_radio +
          ".resposta_radio" +
          i +
          "[" +
          j +
          "].value",
        );
      }
    });
    correccio_array_radio = correccio_radio[i];
    var com_correccio_radio = false;
    var resultat_radio = false;
    var contestada = false;
    com_correccio_radio = eval(
      "'" + resposta_radio + "'=='" + correccio_array_radio + "'",
    );

    if (eval(com_correccio_radio)) {
      possibilitats_radio.forEach((j) => {
        if (
          eval(
            "document." +
            nomform_radio +
            ".resposta_radio" +
            i +
            "[" +
            j +
            "].checked",
          )
        ) {
          eval(
            "document." +
            nomform_radio +
            ".resposta_radio" +
            i +
            "[" +
            j +
            "].id='correct_radio'",
          );
          elem = document.getElementById(nomform_radio + "rr" + i + j);
          elem.src = "../../../images/b_correcte.gif";

          contestada = true;
        }
      });
    } else {
      possibilitats_radio.forEach((j) => {
        if (
          eval(
            "document." +
            nomform_radio +
            ".resposta_radio" +
            i +
            "[" +
            j +
            "].checked",
          )
        ) {
          eval(
            "document." +
            nomform_radio +
            ".resposta_radio" +
            i +
            "[" +
            j +
            "].id='incorrect_radio'",
          );
          elem = document.getElementById(nomform_radio + "rr" + i + j);
          elem.src = "../../../images/b_incorrecte.gif";
          contestada = true;
        }
      });
    }
    /* Nou per marcar totes les respostes*/
    if (!contestada) {
      possibilitats_radio.forEach((j) => {
        eval(
          "document." +
          nomform_radio +
          ".resposta_radio" +
          i +
          "[" +
          j +
          "].id='warning_radio'",
        );
        elem = document.getElementById(nomform_radio + "rr" + i + j);
        elem.src = "../../../images/b_atencio.gif";
      });
    }
  });
}
function comhohefetcheckbox() {
  var correccio_array_check = new Array();
  for (i = 0; i < nelements_check; i++) {
    let nelementschecked = 0;
    for (j = 0; j < possibilitats_check; j++) {
      if (
        eval(
          "document." +
          nomform_check +
          ".resposta_check" +
          i +
          "[" +
          j +
          "].checked",
        )
      ) {
        let resposta_check = "1";
        nelementschecked++;
      } else {
        let resposta_check = "0";
      }
      correccio_array_check = correccio_check[i][j];
      var com_correccio_check = false;
      var resultat_check = false;
      com_correccio_check = eval(
        "'" + resposta_check + "'=='" + correccio_array_check + "'",
      );

      if (eval(com_correccio_check)) {
        //if (eval("document."+nomform_check +".resposta_check"+i+"["+j+"].checked")){
        eval(
          "document." +
          nomform_check +
          ".resposta_check" +
          i +
          "[" +
          j +
          "].id='correct_radio'",
        );
        elem = document.getElementById(nomform_check + "rr" + i + j);
        elem.src = "../../../images/b_correcte.gif";
        //}
      } else {
        //if (eval("document."+nomform_check+".resposta_check"+i+"["+j+"].checked")){
        eval(
          "document." +
          nomform_check +
          ".resposta_check" +
          i +
          "[" +
          j +
          "].id='incorrect_radio'",
        );
        elem = document.getElementById(nomform_check + "rr" + i + j);
        elem.src = "../../../images/b_incorrecte.gif";
        //}
      }
    }
    if (nelementschecked == 0) {
      for (j = 0; j < possibilitats_check; j++) {
        eval(
          "document." +
          nomform_check +
          ".resposta_check" +
          i +
          "[" +
          j +
          "].id='warning_radio'",
        );
        elem = document.getElementById(nomform_check + "rr" + i + j);
        elem.src = "../../../images/b_atencio.gif";
      }
    }
  }
}

function comhohefetText(correccioText, nelementsText, nomformText) {
  var correccio_array = new Array();
  var resposta_array = new Array();
  var resposta = "";
  var com_correccio = false;
  var resultat = false;
  var respostaUnitaria = "";
  var correccioUnitaria = "";

  nelementsText.forEach((i) => {
    resposta = "";
    resposta = eval("document." + nomformText + ".resposta" + i + ".value");
    if (resposta.length > 0) {
      correccio_array = new Array();
      resposta_array = new Array();

      resposta = trim(resposta);
      resposta_array = resposta.split(",");
      correccio_array = correccioText[i].split("||");

      com_correccio = false;
      resultat = false;
      respostaUnitaria = "";
      correccioUnitaria = "";

      if (correccio_array.length == resposta_array.length) {
        if (resposta_array.length < 2) {
          respostaUnitaria = trim(resposta_array[0]);
          correccioUnitaria = trim(correccio_array[0]);
          com_correccio = eval(
            "'" + respostaUnitaria + "'=='" + correccioUnitaria + "'",
          );
        } else {
          for (const element of resposta_array) {
            respostaUnitaria = trim(element);
            correccioUnitaria = trim(correccio_array[0]);
            com_correccio = eval(
              "'" + respostaUnitaria + "'=='" + correccioUnitaria + "'",
            );
            for (j = 1; j < correccio_array.length; j++) {
              correccioUnitaria = trim(correccio_array[j]);
              resultat = eval(
                "'" + trim(respostaUnitaria) + "'=='" + correccioUnitaria + "'",
              );
              com_correccio = eval(com_correccio) || eval(resultat);
            }
          }
        }
      } else {
        let com_correcio = false;
      }

      if (eval(com_correccio)) {
        eval("document." + nomformText + ".resposta" + i + ".id='correct'");
        elem = document.getElementById(nomformText + "rr" + i);
        elem.src = "../../../images/b_correcte.gif";
      } else {
        eval("document." + nomformText + ".resposta" + i + ".id='incorrect'");
        elem = document.getElementById(nomformText + "rr" + i);
        elem.src = "../../../images/b_incorrecte.gif";
      }
    } else {
      eval("document." + nomformText + ".resposta" + i + ".id='warning_radio'");
      elem = document.getElementById(nomformText + "rr" + i);
      elem.src = "../../../images/b_atencio.gif";
    }
  });
}

function netejarform() {
  for (i = 0; i < nelements; i++) {
    eval("document." + nomform + ".resposta" + i + ".id='normal'");
    eval("document." + nomform + ".resposta" + i + ".value=''");
  }
}
function netejarformdesp() {
  for (i = 0; i < nelements; i++) {
    eval(
      "document." +
      nomform +
      ".resposta" +
      i +
      ".options[document." +
      nomform +
      ".resposta" +
      i +
      ".selectedIndex].id='normal'",
    );
    eval("document." + nomform + ".resposta" + i + ".value=0");
    elem = document.getElementById(nomform + "rr" + i);
    elem.src = "../../../images/au.gif";
  }
}

function netejarformdespDE(nelementsdesp, nomformdesp) {
  nelementsdesp.forEach((i) => {
    eval(
      "document." +
      nomformdesp +
      ".resposta" +
      i +
      ".options[document." +
      nomformdesp +
      ".resposta" +
      i +
      ".selectedIndex].id='normal'",
    );
    eval("document." + nomformdesp + ".resposta" + i + ".value=0");
    elem = document.getElementById(nomformdesp + "rr" + i);
    elem.src = "../../../images/au.gif";
  });
}

function netejarformradioSP() {
  nelements_radio.forEach((i) => {
    possibilitats_radio.forEach((j) => {
      eval(
        "document." +
        nomform_radio +
        ".resposta_radio" +
        i +
        "[" +
        j +
        "].id='normal_radio'",
      );
      elem = document.getElementById(nomform_radio + "rr" + i + j);
      elem.src = "../../../images/au.gif";
      //}
    });
  });
  eval("document." + nomform_radio + ".reset()");
}

function netejarformradio(nelements_radio, possibilitats_radio, nomform_radio) {
  nelements_radio.forEach((i) => {
    possibilitats_radio.forEach((j) => {
      eval(
        "document." +
        nomform_radio +
        ".resposta_radio" +
        i +
        "[" +
        j +
        "].id='normal_radio'",
      );
      elem = document.getElementById(nomform_radio + "rr" + i + j);
      elem.src = "../../../images/au.gif";

    });
  });
  eval("document." + nomform_radio + ".reset()");
}
function netejarformcheckbox() {
  for (i = 0; i < nelements_check; i++) {
    for (j = 0; j < possibilitats_check; j++) {
      //if (eval("document."+nomform_check+".resposta_check"+i+"["+j+"].checked==true")){
      eval(
        "document." +
        nomform_check +
        ".resposta_check" +
        i +
        "[" +
        j +
        "].id='normal_radio'",
      );
      //}
      elem = document.getElementById(nomform_check + "rr" + i + j);
      elem.src = "../../../images/au.gif";
    }
  }

  eval("document." + nomform_check + ".reset()");
}

function netejarformText(nelementsText, i, nomformText) {
  for (i = 0; i < nelementsText; i++) {
    eval("document." + nomformText + ".resposta" + i + ".id='normal'");
    eval("document." + nomformText + ".resposta" + i + ".value=''");
    elem = document.getElementById(nomformText + "rr" + i);
    elem.src = "../../../images/au.gif";
  }
}

function tornarescriure(campform) {
  eval("document." + nomform + "." + campform + ".id='normal2'");
}
function tornarescriuredesp(campform, j) {
  for (i = 0; i < nelements_desp; i++) {
    eval(
      "document." +
      nomform +
      "." +
      campform +
      ".options[" +
      i +
      "].id='normal'",
    );
  }
  elem = document.getElementById(nomform + "rr" + j);
  elem.src = "../../../images/au.gif";
}
function tornarescriuredespDE(campform, nelements_despDE, nomformdesp, j) {
  nelements_despDE.forEach((i) => {
    eval(
      "document." +
      nomformdesp +
      "." +
      campform +
      ".options[" +
      i +
      "].id='normal'",
    );
  });
  elem = document.getElementById(nomformdesp + "rr" + j);
  elem.src = "../../../images/au.gif";
}
function tornarescriureradioSP(campform, i) {
  possibilitats_radio.forEach((j) => {
    eval(
      "document." +
      nomform_radio +
      "." +
      campform +
      "[" +
      j +
      "].id='normal_radio'",
    );
    elem = document.getElementById(nomform_radio + "rr" + i + j);
    elem.src = "../../../images/au.gif";
  });
}
function tornarescriureradio(campform, possibilitats_radio, nomform_radio, i) {
  possibilitats_radio.forEach((j) => {
    eval(
      "document." +
      nomform_radio +
      "." +
      campform +
      "[" +
      j +
      "].id='normal_radio'",
    );
    elem = document.getElementById(nomform_radio + "rr" + i + j);
    elem.src = "../../../images/au.gif";
  });
}

function tornarescriurecheckbox(campform, i, j) {
  if (
    eval(
      "document." +
      nomform_check +
      "." +
      campform +
      "[" +
      j +
      "].checked==true",
    )
  ) {
    eval(
      "document." +
      nomform_check +
      "." +
      campform +
      "[" +
      j +
      "].checked=false",
    );
  }
  eval(
    "document." +
    nomform_check +
    "." +
    campform +
    "[" +
    j +
    "].id='normal_radio'",
  );
  elem = document.getElementById(nomform_check + "rr" + i + j);
  elem.src = "../../../images/au.gif";
}

function tornarescriureText(campformText, nomformText) {
  eval("document." + nomformText + "." + campformText + ".id='normal'");
  elem = document.getElementById(nomformText + "rr" + i);
  elem.src = "../../../images/au.gif";
}

function trim(s) {
  while (s.substring(0, 1) == " ") {
    s = s.substring(1, s.length);
  }
  while (s.substring(s.length - 1, s.length) == " ") {
    s = s.substring(0, s.length - 1);
  }
  return s;
}

function MM_reloadPage(init) {
  //reloads the window if Nav4 resized
  if (init == true)
    with (navigator) {
      if (appName == "Netscape" && parseInt(appVersion) == 4) {
        document.MM_pgW = innerWidth;
        document.MM_pgH = innerHeight;
        onresize = MM_reloadPage;
      }
    }
  else if (innerWidth != document.MM_pgW || innerHeight != document.MM_pgH)
    location.reload();
}
MM_reloadPage(true);

function MM_findObj(n, d) {
  //v4.01
  var p, i, x;
  if (!d) d = document;
  if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
    d = parent.frames[n.substring(p + 1)].document;
    n = n.substring(0, p);
  }
  if (!(x = d[n]) && d.all) x = d.all[n];
  for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
  for (i = 0; !x && d.layers && i < d.layers.length; i++)
    x = MM_findObj(n, d.layers[i].document);
  if (!x && d.getElementById) x = d.getElementById(n);
  return x;
}

function MM_showHideLayers() {
  //v6.0
  var i,
    p,
    v,
    obj,
    args = MM_showHideLayers.arguments;
  for (i = 0; i < args.length - 2; i += 3)
    if ((obj = MM_findObj(args[i])) != null) {
      v = args[i + 2];
      if (obj.style) {
        obj = obj.style;
        v = v == "show" ? "visible" : v == "hide" ? "hidden" : v;
      }
      obj.visibility = v;
    }
}
