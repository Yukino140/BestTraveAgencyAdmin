import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInService } from 'src/app/services/logIn/logIn.service';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
  Main: FormGroup=new FormGroup({});
  categories:string[] =["Nature and Outdoor Activities","Culture","Gastronomy","Beaches"];
    
  constructor( private router: Router,private fb:FormBuilder,private service: LogInService,private se:ServService) { }
  back(){
    this.router.navigate(['edit']);      
  }
  logout(){
    this.service.logout()
    this.router.navigate(["log_in"])
  }
  get id(){
    return this.Main.get('id');
  }
  CreateOffre(){
    
    let id =this.id;
    let des=this.Main.get('destination');
    let prix=this.Main.get('price');
    let promo =this.Main.get('promo');
    let origin=this.Main.get('source');
    let nouveau=this.Main.get('new');
    let date=this.Main.get('delay');
    let cat=this.Main.get('categories');
    let desc=this.Main.get('description');
  

    
  }
  ngOnInit(): void {
    this.Main= this.fb.group({
      id:[1],
      destination:[''],
      price:[100],
       promo:[true],
       source:[''],
       new:[''],
       delay:[''],
       categorie:['Nature and Outdoor Activities'],
       description:['']
     })
  }

}
