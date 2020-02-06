import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AppConfig } from './common.app-config.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private apiConfig:AppConfig
  ) { }

  loginNew(data: any) {
    let params = new HttpParams();
    params = params.append('username', data.username);
    params = params.append('password', data.password);
    params = params.append('grant_type', 'password');
    params = params.append('client_id', 'client');
    return this.http.post(this.apiConfig.apiUrl + 'security/oauth/token', params, { headers: this.httpHeader()});
  }
  private httpHeader(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic ' + btoa("client:secret"));
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
    return headers;
  }

}
