import { Component, OnInit } from '@angular/core';
import { Dest } from 'src/app/models/dest';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.component.html',
  styleUrls: ['./affiche.component.css']
})
export class AfficheComponent implements OnInit {
d:Dest[]=[];
  constructor(private s:ServService) { }

  ngOnInit(): void {
    this.d=this.s.getdestination();
  }

}
