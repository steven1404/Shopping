import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  product = []
  quantity = 0
  amount = 0

  constructor(private productService: ProductService) {}

  onClickAdd(){
    this.quantity = this.quantity + 1
  }

  onClickMinus(){
    if (this.quantity != 0){
      this.quantity = this.quantity - 1
    }
  }

}
