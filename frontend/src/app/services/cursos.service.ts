import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ICursoInterface } from '../models/CursoInterface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private cursos: ICursoInterface[] = [];
  private url;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS',
    }),
  };

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080';
  }

  //devuelve todos los cursos almacenados en la bbdd
  public getCursos(): Observable<ICursoInterface[]> {
    let endpoint = this.url + '/buscarcursos';
    return this.http.get<ICursoInterface[]>(endpoint, this.httpOptions);
  }

  //metodo para realizar el borrado de alguno de los cursos
  public borrarCurso(idCurso: number) {
    let endpoint = this.url + '/borrarcurso?idCurso=' + idCurso;
    this.http.delete(endpoint, this.httpOptions);
  }

  //permite buscar un curso de acuerdo a la tecnologia buscada en el searchbar
  /*public buscadorCurso(tecnologia: string) {
    let cursosArray: ICursoInterface[] = [];
    tecnologia = tecnologia.toLowerCase();

    for (let curso of this.cursos) {
      let tecno = curso.tecnologias.toLowerCase();

      if (tecno.includes(tecnologia)) {
        cursosArray.push(curso);
      }
    }
    return cursosArray;
  }*/
}
