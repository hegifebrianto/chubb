import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './common.app-config.service';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(
    private http: HttpClient,
    private apiConfig:AppConfig
      ) { }
  getAgentData() {
    return this.http.get(this.apiConfig.apiUrl + '');
  }
  getRoleData() {
    return this.http.get(this.apiConfig.apiUrl + 'api/v1/role');
  }
}
