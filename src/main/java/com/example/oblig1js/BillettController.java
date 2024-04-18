package com.example.oblig1js;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class BillettController {

    @Autowired
    BillettRepository rep;

    @PostMapping("/lagre")
    public void lagre(Billett billett) {
        rep.lagre(billett) ;
    }
    @GetMapping("/hentBillett")
    public List<Billett> hent() {
        return rep.hentBillett();
    }

    @GetMapping("/hentFilm")
    public List<Film> hentFilm() {
        return rep.hentFilm();
    }

    @GetMapping("/slett")
    public void slett() {
        rep.slettBillettr();
    }
}
