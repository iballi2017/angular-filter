import { Injectable } from '@angular/core'
import { Subject, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  subject = new Subject()

  constructor() {}
  //.....add to cart uses these
  sendMsg(product) {
    return this.subject.next(product) //Triggering an event
  }
  getMsg() {
    return this.subject.asObservable()
  }
  //........................

  //.....add to cart icon notification uses these
  private _messageSource = new BehaviorSubject<number>(0)
  currentMessenge = this._messageSource.asObservable()

  changeMessage(message: number) {
    this._messageSource.next(message)
  }
}
