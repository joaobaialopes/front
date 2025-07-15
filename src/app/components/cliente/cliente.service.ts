import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from './cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:8080/cliente"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl, cliente)
  }

  read(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl)
  }

  readById(clId: string): Observable<Cliente>{
    const url = `${this.baseUrl}/${clId}`
    return this.http.get<Cliente>(url)
  }
 
  update(cliente: Cliente): Observable<Cliente>{
    const url = `${this.baseUrl}/${cliente.clId}`
    return this.http.put<Cliente>(url, cliente)
  }
  
  delete(clId: number): Observable<Cliente>{    
    const url = `${this.baseUrl}/${clId}`
    return this.http.delete<Cliente>(url)
  }


}  
