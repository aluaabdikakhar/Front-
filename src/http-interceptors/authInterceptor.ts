import { UserService } from '../app/user.service';
import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: UserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.auth.getAuthorizationToken();
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });
    return next.handle(authReq);
  }
}
