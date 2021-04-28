import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {​​​​​​​​ retry, catchError }​​​​​​​​ from'rxjs/operators';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiPadawanService {
	private urlRequest = 'https://swapi.dev/api/';

	constructor(private httpClient: HttpClient) { 
		this.getPeoples();
	}
 
	async getPeoples() {
		await (this.httpClient.get(this.urlRequest + 'people').pipe(retry(2), catchError(this.handleError))).subscribe(arg => console.log(arg));
	}

	// Manipulação de erros
	private handleError(error: HttpErrorResponse) {
		let errorMessage = '';
		if (error.error instanceof ErrorEvent) {
			// Erro ocorreu no lado do client
			errorMessage = error.error.message;
		} else {
			// Erro ocorreu no lado do servidor
			errorMessage = `Código do erro: ${error.status}, menssagem: ${error.message}`;
		}
		console.log(errorMessage);
		return throwError(errorMessage);
	}
}
