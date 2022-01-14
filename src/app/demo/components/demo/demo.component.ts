import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent  {

  title = 'proyecto-store';
  items = ['ivan', 'alison', 'katy', 'rossmery'];
  
  newItem: string = null;
  addItem(){
    
    this.items.push(this.newItem)
    
  }

  deleteItem(index:number){
    this.items.splice(index,1);
  }

  clickProduct(id:number){
    console.log(id)
  }
}
