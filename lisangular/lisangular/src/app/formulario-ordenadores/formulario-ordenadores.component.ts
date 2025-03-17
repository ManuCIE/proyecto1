import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Ordenador } from '../ordenador';
import { OrdenadorService } from '../ordenador.service';


@Component({
  selector: 'app-formulario-ordenadores',
  imports: [FormsModule, RouterLink],
  templateUrl: './formulario-ordenadores.component.html',
  styleUrl: './formulario-ordenadores.component.scss'
})
export class FormularioOrdenadoresComponent {

  ordenador: Ordenador = {} as Ordenador;

  constructor(private ordenadorService: OrdenadorService, private router: Router) {

  }

  public insertar() {
  console.log(this.ordenador);

    this.ordenadorService.insertar(this.ordenador).subscribe((datos) => {
      this.router.navigate(["/lista-ordenadores"])
    })

  }


}
