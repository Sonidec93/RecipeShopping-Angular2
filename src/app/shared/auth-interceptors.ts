import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from "@angular/common/http";
import {Observable} from 'rxjs';
import { tap } from "rxjs/operators";
export class AuthInterceptors implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('intercepted');
        
       return next.handle(req).pipe(tap(event=>{console.log(event)}));
    
    }
}