import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-paises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-paises.component.html',
  styleUrl: './table-paises.component.scss'
})
export class TablePaisesComponent {

  @Input() paises!: any[];
  @Output() showCountry = new EventEmitter<any>();
  selectedPaisId: any;

  show(pais: any, index: number) {
    this.selectedPaisId = index;
    this.showCountry.emit(pais);
  }

  getColor(index: number) {
    if (index == this.selectedPaisId) {
      return "red";
    }

    return "blue";
  }

}
