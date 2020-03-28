import { Injectable } from '@angular/core'
import { Product } from '../shared/product'

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(item: Product) {
    // this.products.push(item)
  }
}
