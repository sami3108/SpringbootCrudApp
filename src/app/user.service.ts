import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL1="http://localhost:8000/users";
  private baseURL2="http://localhost:8000/add/users";
  private baseURL3="http://localhost:8000/usersbyId";
  private baseURL4="http://localhost:8000/update/users";
  private baseURL5="http://localhost:8000/delete/users";
  private baseURL6="http://localhost:8000/softdelete/user";
  private baseURL7="http://localhost:8000/sort/sortbyDoj";
  private baseURL8="http://localhost:8000/sort/sortbyDob";
  private baseURL9="http://localhost:8000/usersbyname";
  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL1}`);
  }

  sortByDoj(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL7}`);
  }

  sortByDob(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL8}`);
  }

  findByName(name:any): Observable<any>{
    return this.httpClient.get<User>(`${this.baseURL9}/${name}`);
  }


  createUser(user: User): Observable<any>{
    return this.httpClient.post(`${this.baseURL2}`,user);
  }

  getUserById(id:number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL3}/${id}`)
  }

  updateUser(id:number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL4}/${id}`, user);
  }

  deleteUser(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL5}/${id}`);
  }

  softDeleteUser(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL6}/${id}`);
  }
}
