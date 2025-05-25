import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss',
})
export class CalculadoraComponent {
  peso: number = 0;
  altura: number = 0;
  imc: string = '';
  indice: number = 0;

  calcularResultado() {
    console.log('Calcular o resultado!');
    console.log('peso: ' + this.peso);
    console.log('altura: ' + this.altura);
    const imcCalc = this.peso / this.altura ** 2;
    this.imc = imcCalc.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    
    }
  }
  

 