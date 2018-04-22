import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() featureSelected=new EventEmitter<string>();
  onSelect(feature:string){
    this.featureSelected.emit(feature);
}
  constructor(private dataservice:DataService) { }

  ngOnInit() {
  }
  storeRecipes(){

    this.dataservice.storeRecipes().subscribe((response:Response)=>{
      console.log(response);
    })
  }
  fetchRecipes(){
    this.dataservice.getRecipes();
  }

}
