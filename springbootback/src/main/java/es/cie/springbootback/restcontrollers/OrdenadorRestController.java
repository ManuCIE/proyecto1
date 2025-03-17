package es.cie.springbootback.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import es.cie.springbootback.negocio.Ordenador;
import es.cie.springbootback.repositories.OrdenadorRepository;

@RestController
@RequestMapping("/webapi/ordenador")
public class OrdenadorRestController {

    @Autowired
    @Qualifier("jdbc")
    private OrdenadorRepository ordenadorRepository;

    // ENSEÑAR LISTA
    @GetMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Ordenador> buscarTodos() {
        System.out.println("buscar todos2");
        return ordenadorRepository.buscarTodos();
    }

    // INSERTAR NUEVO ORDENADOR
    @PostMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public void insertar(@RequestBody Ordenador ordenador) {
        ordenadorRepository.insertar(ordenador);
    }

    // BORRAR ORDENADOR
    @DeleteMapping("/{numserie}")
    @CrossOrigin(origins = "http://localhost:4200")
    public void borrar(@PathVariable String numserie) {
        ordenadorRepository.borrar(numserie);
    }

    @GetMapping(params = "marca")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Ordenador> buscarPorMarca(@RequestParam String marca) {
        return ordenadorRepository.buscarPorMarca(marca);
    }

    @GetMapping(params = "modelo")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Ordenador> buscarPorModelo(@RequestParam String modelo) {
        return ordenadorRepository.buscarPorModelo(modelo);
    }

    @GetMapping("/{numserie}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Ordenador buscarUno(@PathVariable String numserie) {
        return ordenadorRepository.buscarUno(numserie);
    }

    @GetMapping(params = { "minprice", "maxprice" })
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Ordenador> buscarTodosPorRangoPrecio(@RequestParam int minprice, @RequestParam int maxprice) {
        return ordenadorRepository.buscarTodosPorRangoPrecio(minprice, maxprice);
    }

    @GetMapping(params = { "inicio", "items" })
    @CrossOrigin(origins = "http://localhost:4200")

    public List<Ordenador> buscarTodosPags(@RequestParam int inicio, @RequestParam int items) {
        System.out.println("llega por aqui");
        return ordenadorRepository.buscarTodosPags(inicio, items);
    }

}
