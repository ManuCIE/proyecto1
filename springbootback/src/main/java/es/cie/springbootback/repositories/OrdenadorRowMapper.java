package es.cie.springbootback.repositories;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;
import es.cie.springbootback.negocio.Ordenador;

public class OrdenadorRowMapper implements RowMapper<Ordenador> {

    @Override
    public Ordenador mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new Ordenador(
                rs.getString("modelo"),
                rs.getString("marca"),
                rs.getDouble("precio"),
                rs.getString("numserie"));
    }

}
