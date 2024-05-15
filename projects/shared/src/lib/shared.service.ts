import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private api = 'https://664394876c6a65658707a751.mockapi.io/api';
  constructor(private http: HttpClient) { }

  getData() {
   return this.http.get(`${this.api}/articles`)
  }

  getDataById(id: string) {
    return this.http.get(`${this.api}/articles/${id}`);
  }

  updateArticle(newArticle: any, id: string | null = null) {
    if (id) {
      return this.http.put(`${this.api}/articles/${id}`, newArticle);
    }
    else {
      return this.http.post(`${this.api}/articles`, newArticle);
    }
  }

  removeArticle(id: string) {
    return this.http.delete(`${this.api}/articles/${id}`);
  }

}
