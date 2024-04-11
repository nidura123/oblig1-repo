package com.example.oblig1js;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
@RestController
public class BillettController {

    private final List<Billett> billetter = new ArrayList<>();
    @PostMapping("/lagre")
    public void lagre(Billett billett) {
        billetter.add(billett) ;
    }
    @GetMapping("/hent")
    public List<Billett> hent() {
        return billetter;
    }

    @GetMapping("/hentFilm")
    public List<Film> hentFilm() {
        List<Film> filmer = new ArrayList<>();
        filmer.add(new Film("Hotel Transylvania"));
        filmer.add(new Film("Hotel Transylvania 2"));
        filmer.add(new Film("Game Night"));
        filmer.add(new Film("Game over"));
        filmer.add(new Film("Grusomme meg 2"));
        filmer.add(new Film("Svary movie"));
        return filmer;
    }

    @GetMapping("/slett")
    public void slett() {
        billetter.clear();
    }
}
