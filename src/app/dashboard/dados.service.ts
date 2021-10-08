import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../tarefas';



@Injectable()
export class DadosService {

  private dados = []


  constructor() { 

  }

  atualizarDados(dados:Tarefa[]):void{
    let temp = dados
    this.dados = []

    temp.forEach(el => {
      let item = [el.nome, el.casos]
      this.dados.push(item)
    });
  }


  obterDados(): Observable<any> {

    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    })

  }

}
