import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'
import { Product } from '../../../model/product.model';
import { switchMap } from 'rxjs/operators';
import {ProductsService} from '../../../core/services/products/products.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$ : Observable<Product>;
  constructor(
    private route : ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.params
    .pipe(
      switchMap((params:Params)=>{
        return this.productService.getProduct(params.id)
      })
    );
  }

  newProduct(){
    const newProduct: Product = {
      id: '20',
      title:'nuevo desde angular',
      image: 'assets/images/banner-1.jpg',
      price:3000,
      description: 'nuevo producto'
    };

    this.productService.createProduct(newProduct)
    .subscribe(product =>{
      console.log(product)
    })
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
      id: '20',
      title:'edicion final',
      image: 'assets/images/banner-1.jpg',
      price:12000,
      description: 'producto limitado'
    };

    this.productService.updateProduct('20',updateProduct)
    .subscribe(product =>{
      console.log(product)
    })
  }
  deleteProduct(){

    this.productService.deleteProduct('20')
    .subscribe(rpt =>{
      console.log(rpt)
    })
  }
}
