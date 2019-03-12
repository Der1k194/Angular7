import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users/users'

@Injectable({
  providedIn: 'root'
})

export class UserService {

  apiUrl: string = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  public createUser(user: Users) {
    return this.http.post(this.apiUrl, user);
  }
 
  public updateUser(user: Users) {
    return this.http.put(`${this.apiUrl}/${user.id}`, user);
  }

  public deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

  public getUserById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  public getUsers(url?:string) {
    return this.http.get<Users[]>(this.apiUrl);
  }
}
