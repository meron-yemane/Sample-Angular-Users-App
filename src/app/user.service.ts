import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // API URL for retrieving user JSON data
  apiUrl = 'https://api.github.com/users?per_page=10';

  constructor(private http: HttpClient) {}
    
  getUsers() {
    return this.http.get(`${this.apiUrl}`); 
  }
}
