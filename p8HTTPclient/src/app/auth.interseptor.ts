import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterseptor implements HttpInterceptor {
  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    const cloneReq = req.clone({
      headers: req.headers.append('token', 'STATIC_TOKEN')
    });
    console.log(req);
    return next.handle(cloneReq);
  }
}
