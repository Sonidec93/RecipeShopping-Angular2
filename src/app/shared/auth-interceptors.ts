import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from "@angular/common/http";
import {Observable} from 'rxjs/observable';
import { HttpResponse } from "selenium-webdriver/http";
export class AuthInterceptors implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('intercepted');
        
       return next.handle(req).do(event=>{console.log(event)});
    
    }
}