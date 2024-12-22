import { Component, input } from '@angular/core';
import { Product } from '../products';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  animations: [
      trigger('animation', [
          transition(':enter', [
              animate('1.25s', keyframes([
                  style({ scale: 0.7, opacity: 0.7, translate: '-300% 0', offset: 0 }),
                  style({ scale: 0.7, opacity: 0.7, translate: '0 0', offset: 0.8 }),
                  style({ scale: 1, opacity: 1, translate: '0 0', offset: 1 }),
              ]))
          ])
      ])
  ],
  host: {
    '[@animation]': ''
  }
})
export class ProductComponent {
  product = input.required<Product>();
}