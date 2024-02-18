let biletter = [];

function kjopBilett() {
    let ut = "<table><tr>" +
                    "<th>Film</th><th>Antall</th><th>Fornavn</th>" +
                    "<th>Etternavn</th><th>Telefonnr</th><th>Epost</th>";
    const bilett = {
        filmer : $("#film").val(),
        antall : $("#antallFilmer").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefonnr : $("#telefonnr").val(),
        epost : $("#epost").val()
    };
    if (!bilett.fornavn) {
        $("#fornavnFeil").html("Må skrive noe i fornavnet").color("red");
    }
    if (!bilett.etternavn) {
        $("#etternavnFeil").html("Må skrive noe i etternavnet").color("red");
    }
    else {
        biletter.push(bilett);

        for (let liste of biletter) {
            ut+="<tr>"
            ut+="<td>" + liste.filmer + "</td><td>" + liste.antall + "</td><td>" + liste.fornavn
            + "</td><td>" + liste.etternavn + "</td><td>" + liste.telefonnr
            + "</td><td>" + liste.epost
            ut+= "</tr>"
        }
        $("#resultat").html (ut);
        biletter = [];
    }
    $("#film").val("");
    $("#antallFilmer").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");

}
function slettAlt() {
    $("#resultat").html("");
    biletter = [];
}