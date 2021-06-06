import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url:string  ="http://localhost:9000/products";

  constructor(private httpClient:HttpClient) { }

  //get all products
  public getProducts(){ 
    return this.httpClient.get(this.url);
  }

  // get one products
  public getOneProduct(id:string){
    return this.httpClient.get(`${this.url}/${id}`);
  }

  // create a product
  public addProduct(product:Product) {
    return this.httpClient.post(this.url,product);
  }

 // update a product
  public updateProduct(product:Product) {
    return this.httpClient.put(this.url,product);
  }
  
  // delete a product
  public deleteProduct(id:string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}

