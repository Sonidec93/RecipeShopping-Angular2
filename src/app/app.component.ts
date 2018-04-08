import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature='recipes';
  
  title = 'app';
  constructor(private route:ActivatedRoute,private router:Router){}

  onNavigate(feature:string){
    // this.loadedFeature=feature;
    if(feature==='recipes')
 this.router.navigate(['recipes']);
 else
 this.router.navigate(['shoppinglist']);
  }
}
