import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pagina',
	templateUrl: './pagina.component.html',
	styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

	resultado: string;

	constructor() { }

	ngOnInit() {
	}

	actualizarResultado(resultado: string){
		this.resultado = resultado;
	}
}
