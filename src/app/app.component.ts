import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaisesService } from './services/paises.service';
import { CommonModule } from '@angular/common';
import { PaisCardComponent } from './components/pais-card/pais-card.component';
import { TablePaisesComponent } from './components/table-paises/table-paises.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PaisCardComponent, TablePaisesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  paises: any[] = [];
  selectedPais: any;
  selectedContinent: string = "";

  constructor(private paisesService: PaisesService) {
  }

  ngOnInit(): void {
    this.paisesService.getPaises()
    .subscribe(paises => {
      this.paises = paises;
      
    });
    
    
  }

  mostrarPais(pais: any) {
    this.selectedPais = pais;
    this.selectedContinent = this.selectedPais.continents[0];
    
  }


}
