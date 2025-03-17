import { Component, OnInit } from '@angular/core';
import { OrdenadorService } from '../ordenador.service';
import { Ordenador } from '../ordenador';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';



@Component({
  selector: 'app-lista-ordenadores',
  imports: [RouterLink, FormsModule, NgFor, CommonModule],
  templateUrl: './lista-ordenadores.component.html',
  styleUrl: './lista-ordenadores.component.scss'
})
export class ListaOrdenadoresComponent {

  minprice: number = 0;
  maxprice: number = 0;
  listaOrdenador: Ordenador[] = [];
  numPagina: number = 1;
  items: number = 5;


  constructor(private ordenadorService: OrdenadorService) {
    console.log("pasa1");
    this.ordenadorService.buscarTodosPags(this.numPagina, this.items).subscribe((datos) => {

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

  buscarTodosPags(numPag: number) {

    if (this.numPagina == 1) {

      this.ordenadorService.buscarTodosPags(this.items, this.numPagina).subscribe((datos) => {

        this.listaOrdenador = datos;
      })

    } else {
      console.log("llega en javascript");
      this.ordenadorService.buscarTodosPags(this.items, (this.numPagina - 1) * 5);
    }

  }

}
