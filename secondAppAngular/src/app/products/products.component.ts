import { Component/*, ventEmitter, Input, Output */ } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  //@Input() p_product!: string;
  //@Output() c_productEvent = new EventEmitter();

  //passData(value:string){
  //  this.c_productEvent.emit(value);
  //}

  inStock: number = 10;
  childMethod() {
    console.log("A method in the ProductsComponent was called.");
  }
}
