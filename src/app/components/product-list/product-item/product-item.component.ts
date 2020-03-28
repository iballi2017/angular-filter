import { Component, OnInit, Input } from '@angular/core'
import { Product } from 'src/app/shared/product'
import { MessengerService } from 'src/app/services/messenger.service'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product
  constructor(private _msg: MessengerService) {}

  ngOnInit(): void {}

  handleAddToCart() {
    this._msg.sendMsg(this.productItem)
  }
}
