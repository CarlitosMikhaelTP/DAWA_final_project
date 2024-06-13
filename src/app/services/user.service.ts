import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // LLamando a EndPoint general para listar a los usuarios
  private apiURL = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) { }

  // Endpoint para listar a todos los usuarios
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiURL}/findAllUser`);
  }

  // Endpoint para listar un usuario por su ID
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiURL}/findPersonById/${id}`);
  }

  // Endpoint para crear un nuevo usuario 
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiURL}/register`, user);
  }

  // Endpoint para actualizar un registro
  updateUser(id: number, user: User): Observable<String> {
    return this.http.put<string>(`${this.apiURL}/edit/${id}`, user);
  }

  // Endpoint para eliminar un usuario por su Id
  deleteUser(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiURL}/delete/${id}`);
  }


}
