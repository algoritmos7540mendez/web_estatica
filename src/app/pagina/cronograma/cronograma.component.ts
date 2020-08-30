import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cronograma',
	templateUrl: './cronograma.component.html',
	styleUrls: ['./cronograma.component.css']
})
export class CronogramaComponent implements OnInit {

	cronograma: any;
	cronogramaURL: any;

	constructor() { }

	ngOnInit() {

		this.cronogramaURL = '/assets/docs/cronograma_1er_cuatrimestre_2020.pdf';

		var cronograma = [
			{ 
				semana: '1',
				temasTeorica: [
					{ tema: 'Introducción a la materia.', destacar: false},
					{ tema: 'Algoritmos.', destacar: false},
					{ tema: 'Variables, constantes y literales.', destacar: false},
					{ tema: 'Tipos de dato y operadores.', destacar: false},
				],
				temasPractica: [
					{ tema: 'Datos de entrada y salida.', destacar: false},
					{ tema: 'Pre y pos condiciones.', destacar: false},
					{ tema: 'Caja negra y caja blanca.', destacar: false},
					{ tema: 'Elaboración de algoritmos.', destacar: false},
				],
				fechaTeorica: '14/04/2020',
				fechaPractica: '16/04/2020',
			},
			{ 
				semana: '2',
				temasTeorica: [
					{ tema: 'Codificación, compilación y ejecución.', destacar: false},
					{ tema: 'Estructuras de control.', destacar: false},
				],
				temasPractica: [
					{ tema: 'Codificación, compilación y ejecución.', destacar: false},
					{ tema: 'Estructuras de control.', destacar: false},
				],
				fechaTeorica: '21/04/2020',
				fechaPractica: '23/04/2020',
			},
			{ 
				semana: '3',
				temasTeorica: [
					{ tema: 'Funciones y procedimientos.', destacar: false},
					{ tema: 'Pasaje de parámetros por valor.', destacar: false},
				],
				temasPractica: [
					{ tema: 'Funciones y procedimientos.', destacar: false},
					{ tema: 'Pasaje de parámetros por valor.', destacar: false},
					{ tema: 'Presentación TP1.', destacar: true},
				],
				fechaTeorica: '28/04/2020',
				fechaPractica: '30/04/2020',
			},
			{ 
				semana: '4',
				temasTeorica: [
					{ tema: 'Pasaje de parámetros por referencia.', destacar: false},
					{ tema: 'Recursividad.', destacar: false},
					{ tema: 'Buenas prácticas de programación.', destacar: false},
				],
				temasPractica: [
					{ tema: 'Pasaje de parámetros por referencia.', destacar: false},
					{ tema: 'Recursividad.', destacar: false},
					{ tema: 'Buenas prácticas de programación.', destacar: false},
				],
				fechaTeorica: '05/05/2020',
				fechaPractica: '07/05/2020',
			},
			{ 
				semana: '5',
				temasTeorica: [
					{ tema: 'Arreglos.', destacar: false},
					{ tema: 'Vectores y matrices.', destacar: false},
					{ tema: 'Arreglos N-dimensionales.', destacar: false},
				],
				temasPractica: [
					{ tema: 'Vectores y matrices.', destacar: false},
					{ tema: 'Arreglos N-dimensionales.', destacar: false},
					{ tema: 'Vencimiento TP1.', destacar: true},
				],
				fechaTeorica: '12/05/2020',
				fechaPractica: '14/05/2020',
			},
			{ 
				semana: '6',
				temasTeorica: [
					{ tema: 'Bibliotecas.', destacar: false},
					{ tema: 'Strings.', destacar: false},
					{ tema: 'Registros.', destacar: false},
				],
				temasPractica: [
					{ tema: 'Bibliotecas.', destacar: false},
					{ tema: 'Strings.', destacar: false},
					{ tema: 'Registros.', destacar: false},
					{ tema: 'Presentación del TP2.', destacar: true},
				],
				fechaTeorica: '19/05/2020',
				fechaPractica: '21/05/2020',
			},
			{ 
				semana: '7',
				temasTeorica: [
					{ tema: 'Errores y debugging.', destacar: false},
					{ tema: 'Arreglos de registros.', destacar: false},
					{ tema: 'Registros de registros.', destacar: false},
				],
				temasPractica: [
					{ tema: 'Arreglos de registros.', destacar: false},
					{ tema: 'Registros de registros.', destacar: false},
				],
				fechaTeorica: '26/05/2020',
				fechaPractica: '28/05/2020',
			},
			{ 
				semana: '8',
				temasTeorica: [
					{ tema: 'Métodos de ordenamiento.', destacar: false},
					{ tema: 'Métodos de búsqueda.', destacar: false},
				],
				temasPractica: [
					{ tema: 'Métodos de ordenamiento.', destacar: false},
					{ tema: 'Métodos de búsqueda.', destacar: false},
				],
				fechaTeorica: '02/06/2020',
				fechaPractica: '04/06/2020',
			},
			{ 
				semana: '9',
				temasTeorica: [
					{ tema: 'Eliminación de elementos.', destacar: false},
					{ tema: 'Recursividad indirecta y cruzada.', destacar: false},
					{ tema: 'Recursividad en vectores.', destacar: false},
				],
				temasPractica: [
					{ tema: 'Eliminación de elementos.', destacar: false},
					{ tema: 'Recursividad indirecta y cruzada.', destacar: false},
					{ tema: 'Recursividad en vectores.', destacar: false},
				],
				fechaTeorica: '09/06/2020',
				fechaPractica: '11/06/2020',
			},
			{ 
				semana: '10',
				temasTeorica: [
					{ tema: 'Repaso para el parcial.', destacar: true,},
				],
				temasPractica: [
					{ tema: 'Parcial.', destacar: true,},
				],
				fechaTeorica: '16/06/2020',
				fechaPractica: '18/06/2020',
			},
			{ 
				semana: '11',
				temasTeorica: [
					{ tema: 'Unión, intersección y diferencia.', destacar: false,},
					{ tema: 'Inserción ordenada.', destacar: false,},
				],
				temasPractica: [
					{ tema: 'Unión, intersección y diferencia.', destacar: false,},
					{ tema: 'Inserción ordenada.', destacar: false,},
					{ tema: 'Vencimiento TP2.', destacar: true,},
				],
				fechaTeorica: '23/06/2020',
				fechaPractica: '25/06/2020',
			},
			{ 
				semana: '12',
				temasTeorica: [
					{ tema: 'Archivos de texto.', destacar: false,},
					{ tema: 'Acceso secuencial.', destacar: false,},
				],
				temasPractica: [
					{ tema: 'Archivos de texto.', destacar: false,},
					{ tema: 'Acceso secuencial.', destacar: false,},
				],
				fechaTeorica: '30/06/2020',
				fechaPractica: '02/07/2020',
			},
			{ 
				semana: '13',
				temasTeorica: [
					{ tema: 'Cortes de control.', destacar: false,},
					{ tema: 'Argumentos por línea de comando.', destacar: false,},
				],
				temasPractica: [
					{ tema: 'Feriado.', destacar: true,},
					{ tema: 'Reentrega TP2.', destacar: true,},
				],
				fechaTeorica: '07/07/2020',
				fechaPractica: '09/07/2020',
			},
			{ 
				semana: '14',
				temasTeorica: [
					{ tema: 'Archivos binarios.', destacar: false,},
					{ tema: 'Acceso aleatorio.', destacar: false,},
				],
				temasPractica: [
					{ tema: 'Archivos binarios.', destacar: false,},
					{ tema: 'Acceso aleatorio.', destacar: false,},
					{ tema: 'Presentacion TP3.', destacar: true,},
				],
				fechaTeorica: '14/07/2020',
				fechaPractica: '16/07/2020',
			},
			{ 
				semana: '15',
				temasTeorica: [
					{ tema: 'Procesamiento de archivos.', destacar: false,},
				],
				temasPractica: [
					{ tema: 'Procesamiento de archivos.', destacar: false,},
				],
				fechaTeorica: '21/07/2020',
				fechaPractica: '23/07/2020',
			},
			{ 
				semana: '16',
				temasTeorica: [
					{ tema: 'Cositas extra.', destacar: true,},
				],
				temasPractica: [
					{ tema: 'Retrospectiva.', destacar: true,},
					{ tema: 'Vencimiento TP3.', destacar: true,},
				],
				fechaTeorica: '28/07/2020',
				fechaPractica: '30/07/2020',
			},
			{ 
				semana: '17',
				temasTeorica: [
					{ tema: 'Consultas.', destacar: true,},
				],
				temasPractica: [
					{ tema: '1º recuperatorio parcial.', destacar: true,},
				],
				fechaTeorica: '04/08/2020',
				fechaPractica: '06/08/2020',
			},
		];
		this.cronograma = cronograma;
	}

}
