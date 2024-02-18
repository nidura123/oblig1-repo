
let biletter = [];
function kjopBilett() {
    // Rydd opp i tidligere feilmeldinger før validering
    $("#antallFeil").html("");
    $("#fornavnFeil").html("");
    $("#etternavnFeil").html("");
    $("#telefonnrFeil1").html("");
    $("#epostFeil1").html("");

    let ut = "<table><tr>" +
                    "<th>Film</th><th>Antall</th><th>Fornavn</th>" +
                    "<th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";
    const bilett = {
        filmer : $("#film").val(),
        antall : $("#antallFilmer").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefonnr : $("#telefonnr").val(),
        epost : $("#epost").val()
    };

    // Validering
    if (!bilett.antall|| !bilett.fornavn || !bilett.etternavn || !bilett.telefonnr || !bilett.epost) {
        if (!bilett.antall) $("#antallFeil").html("Må skrive noe i antall");
        if (!bilett.fornavn) $("#fornavnFeil").html("Må skrive noe i fornavnet");
        if (!bilett.etternavn) $("#etternavnFeil").html("Må skrive noe i etternavnet");
        if (!bilett.telefonnr) $("#telefonnrFeil1").html("Må skrive noe i telefonnummeret");
        if (!bilett.epost) $("#epostFeil1").html("Må skrive noe i eposten");
    }
    else if (!bilett.epost.includes("@")) {
        $("#epostFeil1").html("Må skrive riktig epost");
    }
    else {
        biletter.push(bilett);

        for (let liste of biletter) {
            ut+="<tr>";
            ut+="<td>" + liste.filmer + "</td><td>" + liste.antall + "</td><td>" + liste.fornavn
            + "</td><td>" + liste.etternavn + "</td><td>" + liste.telefonnr
            + "</td><td>" + liste.epost + "</td>";
            ut+= "</tr>";
        }
        ut += "</table>"; // Husk å lukke tabellen
        $("#resultat").html(ut);

        // Ikke tøm biletter-arrayet her for å beholde alle billetter
    }

    // Tøm inputfeltene
    $("#film").val("");
    $("#antallFilmer").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");
}
function slettAlt() {
    $("#resultat").html("");
}
