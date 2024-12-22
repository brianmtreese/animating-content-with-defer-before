import { Component, input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  product = input.required<Product>();
}