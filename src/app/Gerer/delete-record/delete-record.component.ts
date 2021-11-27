import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-delete-record',
  templateUrl: './delete-record.component.html',
  styleUrls: ['./delete-record.component.css']
})
export class DeleteRecordComponent implements OnInit {

  constructor(private se:ServService) { }
  sk:number =0;
  
    ngOnInit(): void {

  }
  
    

}
