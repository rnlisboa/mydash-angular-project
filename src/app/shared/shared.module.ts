import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component'; // Ajuste o caminho conforme necessário

@NgModule({
  declarations: [
    HeaderComponent // Declare o HeaderComponent aqui
  ],
  imports: [
    CommonModule // Importar o CommonModule para usar diretivas comuns como *ngIf e *ngFor
  ],
  exports: [
    HeaderComponent // Exporte o HeaderComponent para torná-lo acessível em outros módulos
  ]
})
export class SharedModule {}
