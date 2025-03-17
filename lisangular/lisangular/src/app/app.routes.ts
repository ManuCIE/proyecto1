import { Routes } from '@angular/router';
import { ListaOrdenadoresComponent } from './lista-ordenadores/lista-ordenadores.component';
import { FormularioOrdenadoresComponent } from './formulario-ordenadores/formulario-ordenadores.component';
export const routes: Routes = [

    { path: "", component: ListaOrdenadoresComponent },
    { path: "lista-ordenadores", component: ListaOrdenadoresComponent },
    { path: "formulario-ordenadores", component: FormularioOrdenadoresComponent },
    { path: "listaordenadores", component: ListaOrdenadoresComponent },
    { path: "listado", component: ListaOrdenadoresComponent },
    { path: "formularioordenador", component: FormularioOrdenadoresComponent },
    { path: "formulario", component: FormularioOrdenadoresComponent },

];
