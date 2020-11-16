import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const endpoint = 'http://localhost:3000/api/v1';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get(endpoint + 'products');
  }
  getProduct(id): Observable<any>{
    return this.http.get(endpoint + 'products/' + id);
  }
  addProduct(product): Observable<any>{
    return this.http.post<any>(endpoint + 'productd', JSON.stringify(product));
  }
  updateProduct (id, product) : Observable<any>{
    return this.http.put<any>(endpoint + 'products/' + id, JSON.stringify(product));
  }
  deleteProduct(id): Observable<any>{
    return this.http.delete<any>(endpoint + 'products/' + id);

  }
}
