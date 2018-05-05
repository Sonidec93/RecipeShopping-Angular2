import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpEvent, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  constructor(private dataservice: DataService,public authService:AuthService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    
    
  }
  storeRecipes() {

    this.dataservice.storeRecipes().subscribe((response) => {
      console.log(response);
    })
    // this.dataservice.storeRecipes().subscribe((response:HttpEvent<Object>)=>{
    //     console.log(response.type==HttpEventType.Sent);
    //     console.log(response.type==HttpEventType.Response);
    // })
  }
  fetchRecipes() {
    this.dataservice.getRecipes();
  }

}
