import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group} from './models/group';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groupURL =  'http://localhost:8080/api/groups';
  constructor(
    private http: HttpClient
  ) { }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.groupURL);
  }

  getGroup(id: number) {
    const url = `${this.groupURL}/${id}`;
  return this.http.get<Group>(url);
  }

  addGroup(group: Group): Observable<Group> {
    return this.http.post<Group>(this.groupURL, group, httpOptions);
  }

  deleteGroup(group: Group | number): Observable<Group> {
    const  id = typeof group === 'number' ? group : group.id;
    const url = `${this.groupURL}/${id}`;

    return this.http.delete<Group>(url, httpOptions);
  }

  updateGroup(group: Group): Observable<any> {
    return this.http.put(this.groupURL, group, httpOptions);
  }
}
