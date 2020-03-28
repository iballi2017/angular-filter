import { Component, OnInit } from '@angular/core'
import { ProductsService } from 'src/app/services/products.service'
import { Product } from 'src/app/shared/product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[]
  bottomPrice: any = 0
  topPrice: any = 1000
  filteredProducts
  fiterByCategory: string = 'All Categories'
  constructor(private _product: ProductsService) {}

  ngOnInit(): void {
    this.products = this._product.getProducts()
    // console.log(this.products)

    /* filter products on page load */
    this.filter()
  }

  filter() {
    this.filteredProducts = this.products.filter(data => {
      this.topPrice
      this.bottomPrice
      this.fiterByCategory
      if (this.fiterByCategory == 'All Categories') {
        return data
      }
      if (this.fiterByCategory) {
        if (this.fiterByCategory == data.category) {
          if (data.price <= this.topPrice && data.price >= this.bottomPrice) {
            return data
          }
        }
      } else if (
        data.price <= this.topPrice &&
        data.price >= this.bottomPrice
      ) {
        return data
      }
    })
  }
}
