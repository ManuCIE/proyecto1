import { Component, OnInit } from '@angular/core';
import { OrdenadorService } from '../ordenador.service';
import { Ordenador } from '../ordenador';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-lista-ordenadores',
  imports: [RouterLink, FormsModule],
  templateUrl: './lista-ordenadores.component.html',
  styleUrl: './lista-ordenadores.component.scss'
})
export class ListaOrdenadoresComponent {

  minprice: number = 0;
  maxprice: number = 0;
  listaOrdenador: Ordenador[] = [];
  numPagina: number = 0;

  constructor(private ordenadorService: OrdenadorService) {

    ordenadorService.buscarTodos().subscribe((datos) => {

      this.listaOrdenador = datos;

    })
  }


  borrar(ordenador: Ordenador) {

    this.ordenadorService.borrar(ordenador).subscribe((datos) => {

      this.ordenadorService.buscarTodos().subscribe((datos) => {

        this.listaOrdenador = datos;
      })
    })
  }

  buscarTodosPorRangoPrecio() {
    console.log("llega");
    if (this.maxprice != 0) {
      this.ordenadorService.buscarTodosPorRangoPrecio(this.minprice, this.maxprice).subscribe((datos) => {

        this.listaOrdenador = datos;
      });
    } else (this.ordenadorService.buscarTodos().subscribe((datos) => { this.listaOrdenador = datos }))
  }
  buscarTodos() {
    this.ordenadorService.buscarTodos().subscribe((datos) => {

      this.listaOrdenador = datos;

    })
  }

  buscarTodosPags(avance: number) {

    this.numPagina + avance;
    this.ordenadorService.buscarTodosPags(5 * this.numPagina, 5).subscribe((datos) => {

      this.listaOrdenador = datos;


    })
  }

}
