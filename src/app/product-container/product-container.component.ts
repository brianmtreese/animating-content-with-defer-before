import { Component, input } from '@angular/core';
import { Product } from '../products';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss',
  imports: [ ProductComponent ],
})
export class ProductContainerComponent {
    product = input.required<Product>();
}