import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Products } from 'src/app/models/account/Products';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  constructor(private iab: InAppBrowser,private accountService:AccountService) { }
  products:any;

  ngOnInit() {
    this.loadProduct();
  }
 loadProduct(){
   this.accountService.getProducts().subscribe(
    (response)=>{
      this.products= response;
      console.log(this.products);

    },
    (error)=>{
      this.products = null;
    });
 }
  OnBuyClick(index:string)
  {
    var inAppBrowserRef;
    var target = "_blank";
    var url="";
    var options = "location=yes,hidden=yes,beforeload=yes";
    

    const browser = this.iab.create(index, target, options);
    browser.close();
  }
}
