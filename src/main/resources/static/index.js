$(function () {
    hent();
    hentFilm();
});

function validerAntall(antall) {
    const regex =/^[1-9.]{1,2}$/;
    const ok = regex.test(antall);
    if (!ok) {
        $('#feilAntall').html('Må skrive noe inn i antall');
        return false;
    }
    else {
        $('#feilAntall').html('');
        return true;
    }
}

function validerNavn(navn) {
    const regex =/^[a-zA-ZæøåÆØÅ.\-]{1,20}$/;
    const ok = regex.test(navn);
    if (!ok) {
        $('#feilNavn').html('Må skrive noe inn i fornavnet');
        return false;
    }
    else {
        $('#feilNavn').html('');
        return true;
    }
}

function validerEtternavn(etternavn) {
    const regex =/^[a-zA-ZæøåÆØÅ.\-]{1,20}$/;
    const ok = regex.test(etternavn);
    if (!ok) {
        $('#feilEtternavn').html('Må skrive noe inn i etternavn');
        return false;
    }
    else {
        $('#feilEtternavn').html('');
        return true;
    }
}

function validerTelefonNr(telefonNr) {
    const regex =/^[0-9.]{8}$/;
    const ok = regex.test(telefonNr);
    if (!ok) {
        $('#feilTelefonNr').html('Må skrive noe inn i telefonnr');
        return false;
    }
    else {
        $('#feilTelefonNr').html('');
        return true;
    }
}

function validerEpost(epost) {
    const regex =/^[a-zA-ZæøåÆØA0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,20}$/;
    const ok = regex.test(epost);
    if (!ok) {
        $('#feilEpost').html('Må skrive noe inn i epost');
        return false;
    }
    else {
        $('#feilEpost').html('');
        return true;
    }
}


function validerOgLagreBillett() {
    const antallOk = validerAntall($('#antallFilmer').val());
    const navnOk = validerNavn($('#fornavn').val());
    const etternavnOk = validerEtternavn($('#etternavn').val());
    const telefonNrOk = validerTelefonNr($('#telefonnr').val());
    const epostOk = validerEpost($('#epost').val());
    if (antallOk && navnOk && etternavnOk && telefonNrOk && epostOk) {
        kjopBillett();
    }
}

function kjopBillett() {
    const billett = {
        film : $('#valgtFilm').val(),
        antall : $('#antallFilmer').val(),
        fornavn : $('#fornavn').val(),
        etternavn : $('#etternavn').val(),
        telefonNr : $('#telefonnr').val(),
        epost : $('#epost').val()
    }
    $.post("/lagre", billett, function () {
       hent();
    });
    $('#valgtFilm').val('');
    $('#antallFilmer').val('');
    $('#fornavn').val('');
    $('#etternavn').val('');
    $('#telefonnr').val('');
    $('#epost').val('');
}

function hent() {
    $.get("/hent",function (billett) {
        formaterBillett(billett);
    });
}

function hentFilm() {
    $.get("/hentFilm",function (film) {
        formaterFilm(film);
    });
}

function formaterFilm(film) {
    let ut = '<select id="valgtFilm">';
    let forrigeFilm = '';
    ut += '<option disabled selected>Velg film her</option>';
    for (const f of film) {
        if (f.film !== forrigeFilm) {
            ut += '<option>' + f.film + '</option>';
        }
        forrigeFilm = f.film;
    }
    ut += '</select>';
    $('#film').html(ut);
}

function formaterBillett(billett) {
    let ut = '';
    ut += '<table class="table table-striped"><tr>'+
            '<th>Film</th><th>Antall</th><th>Fornavn</th>'+
            '<th>Etternavn</th><th>Telefonnr</th><th>Epost</th>'+
            '</tr>';
    for (const b of billett) {
        ut += '<tr><td>'+b.film+'</td><td>'+b.antall+'</td><td>'+b.fornavn+'</td>'+
                '<td>'+b.etternavn+'</td><td>'+b.telefonNr+'</td>'+
                '<td>'+b.epost+'</td></tr>';
    }
    ut += '</table';
    $('#resultat').html(ut);
}

function slettAlt() {
    $.get("/slett", function () {
        hent();
    });
}