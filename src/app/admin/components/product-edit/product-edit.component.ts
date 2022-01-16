import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ProductsService} from './../../../core/services/products/products.service'
import {Router, ActivatedRoute, Params} from '@angular/router'
import {MyValidators} from './../../../utils/validators'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  products:[];
  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    public dialogRef: MatDialogRef<ProductEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    ) { 
    this.buildForm();
  }

  ngOnInit(){
    this.id = this.data;
    this.productsService.getProduct(this.id)
        .subscribe(product => {
          this.form.patchValue(product)
    });
   
  }

  updateProduct(event:Event){

    Swal.fire({
      title: '¿ Estás seguro de actualizar el producto?',
      text: "No podrá deshacer esta acción",
      icon: 'warning',
      showCancelButton: true,
      allowOutsideClick: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        event.preventDefault();
        if(this.form.valid){
          const product = this.form.value;
          this.productsService.updateProduct(this.id,product)
          .subscribe((newProduct)=>{
            console.log(newProduct);
            this.router.navigate(['./admin']);
          });
        }
        this.dialogRef.close()
        }
    });
    
  }

  private buildForm(){
      this.form = this.formBuilder.group({
        id: ['',[Validators.required]],
        title: ['',[Validators.required]],
        price: ['',[Validators.required, MyValidators.isPriceValid]],
        image:[''],
        description:['',[Validators.required]],
      })
  }

  get priceField(){
    return this.form.get('price');
  }

  close(){
    this.dialogRef.close()
  }

}
