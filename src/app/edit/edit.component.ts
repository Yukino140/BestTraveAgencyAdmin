import { Component, OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from "@angular/router";
import { DeleteRecordComponent } from '../Gerer/delete-record/delete-record.component';
import { Dest } from '../models/dest';
import { LogInService } from '../services/logIn/logIn.service';
import { ServService } from '../services/serv.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 

  constructor(private service: LogInService, private router: Router,public dialog: MatDialog,private se:ServService) { }
  dest:Dest[]=[];
  ngOnInit(): void {
   this.fetchOffers();
   
   
  }
  database: any;
  fetchOffers(){
    this.database =this.se.linkToDB();
    this.database.subscribe((offers:any) =>
    {
      this.dest=JSON.parse(JSON.stringify(offers)).offers;
    })
  }
  show(){
    console.log(this.dest)
  }
 
  Add(){
    this.router.navigate(["Add"]);
  }
  
  openDialog() {
    const dialogRef = this.dialog.open(DeleteRecordComponent, {
      data : {
        
      }
    });

  }

  logout(){
    this.service.logout()
    this.router.navigate(["log_in"])
  }
  
}
