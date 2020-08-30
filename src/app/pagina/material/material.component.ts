import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestApiService } from "../../_servicios/rest-api.service";
import { environment } from '../../../environments/environment';
import { FormBuilder, FormGroup } from  '@angular/forms';
import { Archivo } from 'src/app/_interfaces/archivo';
declare var $: any;

@Component({
	selector: 'app-material',
	templateUrl: './material.component.html',
	styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

	apuntes: Archivo[];
	clases: Archivo[];
	
	constructor(
		public restApi: RestApiService,
		private formBuilder: FormBuilder
	) { }

	ngOnInit() {
		
		var apuntes = [
			{ nombre: 'Apunte 1', url: 'URL 1'},
			{ nombre: 'Apunte 2', url: 'URL 2'},
			{ nombre: 'Apunte 3', url: 'URL 3'},
		];
		this.apuntes = apuntes;
		// this.getApuntes();

		var clases = [
			{ nombre: 'Clase 1', url: 'URL 1'},
			{ nombre: 'Clase 2', url: 'URL 2'},
			{ nombre: 'Clase 3', url: 'URL 3'},
		];
		this.clases = clases;
		// this.getClases();
	}

	/*
	getApuntes() {
		this.restApi.getFiles("apuntes").subscribe((data: {}) => {
			this.apuntes = data;
			for (var i = 0; i < this.apuntes.length; i++) {
				let nombre = this.apuntes[i].name.split("_");
				this.apuntes[i].nombre = nombre.join(" ").replace('.pdf', '');
				this.apuntes[i].url = environment.apiURL + '/apuntes/' + this.apuntes[i].name;
			}
		});
	}

	getClases() {
		this.restApi.getFiles("clases").subscribe((data: {}) => {
			this.clases = data;
			for (var i = 0; i < this.clases.length; i++) {
				let nombre = this.clases[i].name.split("_")
				nombre.splice(2,2);
				this.clases[i].nombre = nombre.join(" ").split(".")[0];
				this.clases[i].url = environment.apiURL + '/clases/' + this.clases[i].name;
			}
		});
	}
	*/
}
