import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Product } from '../shared/product'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _http: HttpClient) {}

  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 23.43,
      category: 'Electronics',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 50.01,
      category: 'Electronics',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 32.0,
      category: 'Phones',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 14.2,
      category: 'Phones',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 32.12,
      category: 'Laptops',
    },
    {
      id: 6,
      name: 'Product 6',
      price: 12.0,
      category: 'Laptops',
    },
    {
      id: 7,
      name: 'Product 7',
      price: 23.43,
      category: 'Footwears',
    },
  ]

  getProducts() {
    return this.products
  }
}
