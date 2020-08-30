import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../../_servicios/rest-api.service";
import { environment } from '../../../environments/environment';
import { Examen } from 'src/app/_interfaces/archivo';

@Component({
	selector: 'app-evaluaciones',
	templateUrl: './evaluaciones.component.html',
	styleUrls: ['./evaluaciones.component.css']
})
export class EvaluacionesComponent implements OnInit {

	parciales: Examen[];
	finales: Examen[];
	
	constructor(
		public restApi: RestApiService
	) { }

	ngOnInit() {
		var parciales = [
			{ nombre: 'Parcial 1', url: 'URL 1', resoUrl: '', tieneReso: false},
			{ nombre: 'Parcial 2', url: 'URL 2', resoUrl: 'URL 2', tieneReso: true},
			{ nombre: 'Parcial 3', url: 'URL 3', resoUrl: '', tieneReso: false},
		];
		this.parciales = parciales;

		var finales = [
			{ nombre: 'Final 1', url: 'URL 1', resoUrl: '', tieneReso: false},
			{ nombre: 'Final 2', url: 'URL 2', resoUrl: 'URL 2', tieneReso: true},
			{ nombre: 'Final 3', url: 'URL 3', resoUrl: '', tieneReso: false},
		];
		this.finales = finales;
	}
}