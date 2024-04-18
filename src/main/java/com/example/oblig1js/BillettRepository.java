package com.example.oblig1js;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagre(Billett inn) {
        String sql = "INSERT INTO Billett (film, antall, fornavn, etternavn," +
                " telefonNr, epost) VALUES (?,?,?,?,?,?)";
        db.update(sql, inn.getFilm(), inn.getAntall(), inn.getFornavn(), inn.getEtternavn(),
                inn.getTelefonNr(), inn.getEpost());
    }

    public List<Billett> hentBillett() {
        String sql = "SELECT F.film, B.antall, B.fornavn, B.etternavn, B.telefonNr," +
                " B.epost FROM Billett AS B, Film AS F WHERE B.film = F.film " +
                "ORDER BY LOWER(B.etternavn) ASC";
        List<Billett> alleBilletter = db.query(sql, new BeanPropertyRowMapper(Billett.class));
        return  alleBilletter;
    }

    public List<Film> hentFilm(){
        String sql = "SELECT * FROM Film;";
        List<Film> bilList = db.query(sql, new BeanPropertyRowMapper(Film.class));
        return bilList;
    }

    public void slettBillettr() {
        String sql = "DELETE FROM Billett";
        db.update(sql);
    }
}
