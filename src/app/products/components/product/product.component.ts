import { Component, Input,Output, EventEmitter } from '@angular/core';
import {Product} from '../../../model/product.model';
import {CartService} from './../../../core/services/cart.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

 @Input() product : Product ;
 @Output() productCard: EventEmitter<any> = new EventEmitter();

 constructor(
   private cartService: CartService
 ){

 }
  addCart(){
    this.cartService.addCart(this.product)
  }
}
