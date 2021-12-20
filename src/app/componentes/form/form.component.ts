import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  tipo: string
  quant: number
  valor: number
  frete: string
  somaFrete: number

  constructor() {
    this.tipo = ''
    this.quant = 1
    this.valor = 100
    this.frete = ''
    this.somaFrete = 100
  }

  ngOnInit(): void {
  }

  valorTotal(){
    this.valor = this.quant * 100
  }

  somarFrete(){
    if(this.frete == 'rj'){
      this.somaFrete = this.valor + 20
    }else if(this.frete == 'outros'){
      this.somaFrete = this.valor + 40
    }else{
      this.somaFrete = this.valor + 0
    }

  }

}
