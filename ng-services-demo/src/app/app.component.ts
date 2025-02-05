import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-services-demo';

  public products = [
    {
      product_id: 'P-101',
      product_name: 'Logitech Mouse',
      product_description: '6 Button Mechanical Mouse',
      product_price: 899
    },
    {
      product_id: 'P-102',
      product_name: 'JBL BT Speaker',
      product_description: 'Waterproof Radio 360 Surround',
      product_price: 1099
    },
    {
      product_id: 'P-103',
      product_name: 'Mechanical KeyBoard',
      product_description: 'Hot-swappable RGB Backlit',
      product_price: 2395
    },
    {
      product_id: 'P-104',
      product_name: 'Oculus Meta',
      product_description: 'All-in-one Gaming Headset',
      product_price: 22450
    }
  ];

  public employees: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  }[] = [];

  public product: {
    product_id: string;
    product_name: string;
    product_description: string;
    product_price: number;
  }[] = [];

  constructor(
    private _employeeService: EmployeeService,
    private _productService: ProductsService
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productService.getProducts();
  }
}
