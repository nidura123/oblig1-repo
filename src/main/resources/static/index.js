$(function () {
    hent();
    hentFilm();
});

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
    ut += '<option disabled selected>Velg Film</option>';
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