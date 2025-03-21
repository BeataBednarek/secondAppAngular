import { Component } from "@angular/core";
declare const genRandomNumbers: any;

@Component({
    selector: 'app-product',
    template: `<h2>Product List</h2>
    <div *ngIf="showDiv">Product 1</div>
    <div>{{rNum}}</div>`,
})

export class ProductComponent {
    showDiv = true;
    rNum = <[]>genRandomNumbers();
}