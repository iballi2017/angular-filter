import { Component, OnInit } from '@angular/core'
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/shared/product'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems = [
    // {
    //   id: 1,
    //   productName: 'Product 1',
    //   productId: 2,
    //   price: 23,
    //   qty: 3,
    // },
    // {
    //   id: 2,
    //   productName: 'Product 2',
    //   productId: 2,
    //   price: 40,
    //   qty: 3,
    // },
    // {
    //   id: 3,
    //   productName: 'Product 3',
    //   productId: 3,
    //   price: 13,
    //   qty: 2,
    // },
  ]
  product: Product
  cartTotal = 0

  constructor(private _msg: MessengerService) {}

  ngOnInit(): void {
    if ('cartItems' in localStorage) {
      this.cartItems = JSON.parse(localStorage.getItem('cartItems'))

      this.cartTotal = 0
      this.cartItems.forEach(data => {
        this.cartTotal += data.price * data.qty
      })

      this._msg.getMsg().subscribe((product: Product) => {
        this.addProductToCart(product)
        this.removeCartItem(product)
      })

      this._msg.changeMessage(this.cartItems.length)
    } else {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
      this._msg.changeMessage(this.cartItems.length)
    }
  }

  addProductToCart(product: Product) {
    let productExist = false

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++
        productExist = true
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
        break
      }
    }

    if (!productExist) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        price: product.price,
        qty: 1,
      })
      productExist = true
    }

    this.cartTotal = 0
    this.cartItems.forEach(data => {
      this.cartTotal += data.price * data.qty
    })

    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    this._msg.changeMessage(this.cartItems.length)
  }

  removeCartItem(item) {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'))
    /* ........
    Remove Item from Cart: Check below for the two methods to remove Object from an Array
    .....*/

    /*...........START..........*/
    /*........ Method 1 ..*/
    // this.cartItems = this.cartItems.filter(data => {
    //   if (data.productId !== item.productId) {
    //     return item
    //   }
    // })

    /*........ Method 2 ..*/
    for (var i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i]['productId'] === item.productId) {
        this.cartItems.splice(i, 1)
      }
    }
    /*...........END..........*/

    this.cartTotal = 0
    this.cartItems.forEach(data => {
      this.cartTotal += data.price * data.qty
    })

    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    this._msg.changeMessage(this.cartItems.length)
  }
}
