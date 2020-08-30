import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/_interfaces/docente';

@Component({
	selector: 'app-docentes',
	templateUrl: './docentes.component.html',
	styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {

	docentes: Docente[];
	
	constructor() { }

	ngOnInit() {
		var docentes = [
			{ nombre: 'Un', apellido: 'Docente', imagen: 'UnDocente.jpg'},
		];
		this.docentes = docentes;
	}

}
