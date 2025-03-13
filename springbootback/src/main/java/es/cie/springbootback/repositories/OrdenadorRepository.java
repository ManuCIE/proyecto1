package es.cie.springbootback.repositories;

import java.util.List;

import es.cie.springbootback.negocio.Ordenador;

public interface OrdenadorRepository {

    List<Ordenador> buscarTodos();

    List<Ordenador> buscarPorModelo(String modelo);

    List<Ordenador> buscarPorMarca(String marca);

    Ordenador buscarUno(String numserie);

    void insertar(Ordenador ordenador);

    void borrar(String numserie);

    List<Ordenador> buscarTodosPorRangoPrecio(int minprice, int maxprice);

}
