package es.cie.springbootback.repositories;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import es.cie.springbootback.negocio.Ordenador;

@Repository
@Qualifier("jdbc")
public class OrdenadorRepositoryJDBC implements OrdenadorRepository {

    @Autowired
    private JdbcTemplate plantilla;

    @Override
    public List<Ordenador> buscarTodos() {
        return plantilla.query("select * from ordenador", new OrdenadorRowMapper());
    }

    @Override
    public void insertar(Ordenador ordenador) {
        plantilla.update("insert into ordenador values (?,?,?,?)",
                ordenador.getModelo(), ordenador.getMarca(), ordenador.getPrecio(), ordenador.getNumserie());
    }

    @Override
    public void borrar(String numserie) {

        plantilla.update("delete from ordenador where numserie=?", numserie);
    }

    @Override
    public List<Ordenador> buscarPorMarca(String marca) {
        return plantilla.query("select * from ordenador where marca=?", new OrdenadorRowMapper(), marca);
    }

    @Override
    public List<Ordenador> buscarPorModelo(String modelo) {
        return plantilla.query("select * from ordenador where modelo=?", new OrdenadorRowMapper(), modelo);
    }

    @Override
    public Ordenador buscarUno(String numserie) {
        return plantilla.queryForObject("select * from ordenador where numserie=?", new OrdenadorRowMapper(), numserie);
    }

    @Override
    public List<Ordenador> buscarTodosPorRangoPrecio(int minprice, int maxprice) {

        return plantilla.query("select * from ordenador where precio between ? and ?", new OrdenadorRowMapper(),
                minprice, maxprice);
    }

}
