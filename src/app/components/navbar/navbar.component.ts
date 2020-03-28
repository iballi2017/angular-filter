import { Component, OnInit } from '@angular/core'
import { MessengerService } from 'src/app/services/messenger.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cartCount: number

  constructor(private _msg: MessengerService) {}

  ngOnInit(): void {
    this._msg.currentMessenge.subscribe(count => {
      this.cartCount = count
    })
  }
}
