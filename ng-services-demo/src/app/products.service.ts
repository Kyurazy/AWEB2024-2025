import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
getProducts(){
  return[
    {
      product_id: 'P-101',
      product_name: 'Logitech Mouse',
      product_description: '6 Button Mechanical Mouse',
      product_price: 899.00
    },
    {
      product_id: 'P-102',
      product_name: 'JBL BT Speaker',
      product_description: 'Waterproof Radio 360 Surround',
      product_price: 1099.00
    },
    {
      product_id: 'P-103',
      product_name: 'Mechanical KeyBoard',
      product_description:'Hot-swappable RGB Backlit',
      product_price: 2395.00
    },
    {
      product_id: 'P-104',
      product_name: 'Oculus Meta',
      product_description: 'All-in-one Gaming Headset',
      product_price: 22450.00
    },

  ];
}
  constructor() { }
}
