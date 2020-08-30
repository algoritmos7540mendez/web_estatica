import { Component, OnInit } from '@angular/core';
import { Horario } from 'src/app/_interfaces/info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

	horarios: Horario[];
	regimenCursada: string;
	canalYouTube: string;
	encuestas: any;

	constructor() { }

	ngOnInit() {
		var horarios = [
			{ tipo: 'Teórica', dia: 'Martes', hora: '8:00 a 11:00', aula: 'Aula 411'},
			{ tipo: 'Práctica', dia: 'Jueves', hora: '8:00 a 11:00', aula: 'Aula 313'},
		];
		this.horarios = horarios;

		this.regimenCursada = '/assets/docs/regimen_de_cursada_2020_1C.pdf';
		this.canalYouTube = 'https://www.youtube.com/channel/UCRXcp7q4qKkLvtOH7tysdgA';

		var encuestas = [
			{ nombre: '2C 2019', url: '/assets/docs/encuestas/encuesta_2019_2C.html'},
			{ nombre: '1C 2019', url: '/assets/docs/encuestas/encuesta_2019_1C.html'},
			{ nombre: '2C 2018', url: '/assets/docs/encuestas/encuesta_2018_2C.html'},
			{ nombre: '1C 2018', url: '/assets/docs/encuestas/encuesta_2018_1C.html'},
			{ nombre: '2C 2017', url: '/assets/docs/encuestas/encuesta_2017_2C.html'},
			{ nombre: '1C 2017', url: '/assets/docs/encuestas/encuesta_2017_1C.html'},
		];
		this.encuestas = encuestas;
	}

}
