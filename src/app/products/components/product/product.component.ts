import { Component, Input,Output, EventEmitter } from '@angular/core';
import {Product} from '../product/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

 @Input() product : Product ;
 @Output() productCard: EventEmitter<any> = new EventEmitter();

 today = new Date();
  addCart(){
    console.log('agregar carrito')
   // this.productCard.emit(this.product.id)
  }
}
