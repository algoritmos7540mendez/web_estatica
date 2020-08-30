import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class RestApiService {

	constructor(private http: HttpClient) {
	}

	getFiles(tipo: string) {
		return this.http.get(environment.apiURL + '/' + tipo);
	}
}
