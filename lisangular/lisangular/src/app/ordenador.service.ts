import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ordenador } from './ordenador';

@Injectable({
  providedIn: 'root'
})
export class OrdenadorService {

  constructor(private httpClient: HttpClient) { }

  public buscarTodos(): Observable<Ordenador[]> {

    return this.httpClient.get<Ordenador[]>("http://localhost:8080/webapi/Ordenador");


  }

  public buscarTodosPorMarca(): Observable<Ordenador[]> {

    return this.httpClient.get<Ordenador[]>("http://localhost:8080/webapi/Ordenador?marca=");

  }

  public insertar(ordenador: Ordenador): Observable<Ordenador> {
    return this.httpClient.post<Ordenador>("http://localhost:8080/webapi/Ordenador", ordenador)


  }

  public buscarUno(numserie: String): Observable<Ordenador> {
    return this.httpClient.get<Ordenador>(`http://localhost:8080/webapi/Ordenador/${numserie}`);

  }

  public borrar(ordenador: Ordenador): Observable<Ordenador> {
    return this.httpClient.delete<Ordenador>(`http://localhost:8080/webapi/Ordenador/${ordenador.numserie}`)
  }

  public buscarTodosPorRangoPrecio(minprice: number, maxprice: number): Observable<Ordenador[]> {
    const params = new HttpParams()
      .set('minprice', minprice)
      .set('maxprice', maxprice);
    return this.httpClient.get<Ordenador[]>(`http://localhost:8080/webapi/Ordenador`, { params });

  }

  public buscarTodosPags(inicio: number, items: number) {

    return this.httpClient.get<Ordenador[]>(`http://localhost:8080/webapi/Ordenador?inicio=` + inicio + `?items=` + items);
  }

}

