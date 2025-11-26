import { Injectable } from '@angular/core';
import {Products} from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

url = "http://localhost:3000/Products";

async getProducts() : Promise<Products[]> {
  const data = await fetch((this.url));
  console.log(data)
  return (await data.json()) ?? [];
}

async getById(product_id: number) : Promise<Products | undefined> {
  const data = await fetch(`${this.url}?product_id=${product_id}`);
  const json = await data.json();
  console.log(json);
  return json[0];
}


}
