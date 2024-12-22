import { Component } from '@angular/core';
import { Product, products } from '../products';
import { ProductContainerComponent } from '../product-container/product-container.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
  imports: [ ProductContainerComponent ]
})
export class PageComponent {
    protected products: Product[] = products;
}