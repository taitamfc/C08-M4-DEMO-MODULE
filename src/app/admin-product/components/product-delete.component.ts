import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProductService } from "./../../shared/services/product.service";
import { Product } from "./../../shared/defines/product";

@Component({
  selector: 'app-product-delete',
  templateUrl: './../templates/product-delete.component.html',
})
export class ProductDeleteComponent implements OnInit {

  //property id store id in memory
  id: number = 0;
  product!: Product;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductService: ProductService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    //get id from url
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.product = this._ProductService.find(id);
    });
  }

  handleYes(){
    this._ProductService.destroy(this.id);
    //redirect to products
    this._Router.navigate(['/products']);
  }
  handleNo(){
    //redirect to products
    this._Router.navigate(['/products']);
  }

}
