import {Injectable} from '@angular/core';
import {Products} from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  url = "http://localhost:3000/Products";

  async getProducts(): Promise<Products[]> {
    const data = await fetch((this.url));
    console.log(data)
    return (await data.json()) ?? [];
  }

  async getById(product_id: number): Promise<Products | undefined> {
    const data = await fetch(`${this.url}?product_id=${product_id}`);
    const json = await data.json();
    console.log(json);
    return json[0];
  }

  addToBasket(product: Products | undefined) {
    let basket = this.getBasketItems()

    if (!product) return;

    if (!basket) basket=[];

    const items_exist = basket.find(item => item.product_id === product.product_id);

    /*if( basket.map(b => b.product_id).includes(product.product_id)) */

      if (items_exist) {
      items_exist.quantity = (items_exist.quantity || 1) + 1;
    } else {
      basket.push({...product, quantity: 1});
    }

    localStorage.setItem('basket-products', JSON.stringify(basket));
    console.log('oldu');
  }


  getBasketItems(): Products[] {
    const baskets_json = localStorage.getItem("basket-products");
    if (!baskets_json) return [];
    return JSON.parse(baskets_json as string);
  }

  getTotalQuantity(): number {
    const baskets_json = localStorage.getItem("basket-products");
    if (baskets_json == null) return 0;
    let Json = JSON.parse(baskets_json as string) as Products[];
    let total: number = 0;
    for (let i = 0; i < Json.length; i++) {
      total = Json[i].quantity + total;
    }
    return total
  }

  getTotal(): number {
    const basket_json = localStorage.getItem("basket-products");
    if (basket_json == null) return 0;
    let json = JSON.parse(basket_json as string) as Products[];
    let total = 0;
    for (let i = 0; i < json.length; i++) {
      total = (json[i].price * json[i].quantity) + total;
    }
    return total
  }

  async saveBasket() {
    const basketInfoToDB: string | null = localStorage.getItem('basket-products');

    console.log("basket infoyu kayıt ettik, db\'e gönderdiğimizi düşünelim: " + basketInfoToDB)
  }

  discardFromBasket(product_id: number) {
    const baskets_json = localStorage.getItem("basket-products");
    if (!baskets_json) {
      return;
    }

    let basket = JSON.parse(baskets_json) as Products[];

    const itemIndex = basket.findIndex(item => item.product_id === product_id);
    if (itemIndex === -1) {
      return;
    }

    basket[itemIndex].quantity = (basket[itemIndex].quantity || 1) - 1;

    if (basket[itemIndex].quantity <= 0) {
      basket.splice(itemIndex, 1);
    }

    localStorage.setItem("basket-products", JSON.stringify(basket));
  }

}
