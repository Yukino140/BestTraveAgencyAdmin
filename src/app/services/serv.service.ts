import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';


import { Dest } from '../models/dest';

interface Offer{
  category: string,
  comment?: string,
   delay:string,
   description:string,
    id:number,
    image:string,
    name:string,
    recent:boolean,
    prize:number,
    promotion:boolean
}
@Injectable({
  providedIn: 'root'
})
export class ServService {
 
  
  destination:Dest[]=[
  ];
  firestore: any;

  getdestination(){
    return this.destination;
  }

  deleteVoyage(id:number){
    for(var i=0;i<=this.destination.length;i++){
      if(this.destination[i].id==id)
      this.destination.splice(i,1);
    }
  }
  
  
  constructor(firestore: AngularFirestore) {   }
  linkToDB(){
    return this.firestore.collection("BestTunisiaTravel").doc("offers").valueschange();
  }

   
     
    
  
   

   
}

