import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:any 

  constructor(private apiService:ApiService, private router:Router) { 
  
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.apiService.getProducts().subscribe(res => {
      // console.log(res);
      this.products = res;
    });
  }
  goToCreate(){
    this.router.navigateByUrl("/products/create");
  }

  deleteProduct(id:string){
    this.apiService.deleteProduct(id).subscribe(res=>{
      console.log("Product is deleted successfully !");
      //reload the products
      this.getAllProducts();
    });
  }
}
