import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  //styles:[`h2{color:green; background-color: lightgreen}` ]
})
export class AppComponent {
  title = 'skills';
  products = ["widget1", "widget2", "widget3"];
  enabledButton = false;
  product1 = "Widgets1";
  quantity: number = 0;

  @ViewChild(ProductsComponent) product !: ProductsComponent;

  ngAfterViewInit() {
    this.product.childMethod();
    this.quantity = this.product.inStock;
    console.log("Updated quantity: " + this.quantity);
  }

  displayData(valuePassed: string) {
    this.product1 = valuePassed;
  }

  showMessage() {
    alert("Hello");
  }
}
