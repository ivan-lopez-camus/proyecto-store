import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/components/product/product.model';
import { ProductsService } from '../../../core/services/products/products.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = []
  displayedColumns: string[] = ['id', 'title','price','description','actions'];
  
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }
  

  fetchProducts(){
    this.productsService.getAllProducts().
    subscribe(product =>{
      this.products = product;
      console.log(this.products);
    })
  }

  /*updateProduct(){
    
    
    this.productService.updateProduct('20',updateProduct)
    .subscribe(product =>{
      console.log(product)
    })
  }*/
  
  deleteProduct(productId: string) {

    Swal.fire({
      title: '¿ Estás seguro de eliminar el producto?',
      text: "No podrá deshacer esta acción",
      icon: 'warning',
      showCancelButton: true,
      allowOutsideClick: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {

        this.productsService.deleteProduct(productId).subscribe((result) => {
          this.products = this.products.filter((product) => {
            return product.id !== productId;
          });
        })
        Swal.fire({
          title:'Eliminado',
          text:'El producto fue eliminado',
          allowOutsideClick:false,
        }
          
        )
        ;
      }
    })
    
  }


  
}
