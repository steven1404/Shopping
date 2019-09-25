import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  product = []

  quantity= 0;

  constructor(private productService: ProductService) {}

  delete(){

  }
}
