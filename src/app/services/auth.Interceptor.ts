
import { HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{

    constructor(private router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

       var token = "test";
       const modifiedReq=  req.clone({
            headers: req.headers.set('authorization', 'Bearer ' + token)
        });
debugger;  // I am going to stas it
        return next.handle(modifiedReq);
    }
}