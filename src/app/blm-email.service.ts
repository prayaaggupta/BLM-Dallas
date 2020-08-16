import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {Location} from './location.mode';
import { UserInfo } from './UserInfo';
import { CongressmanInfo } from './CongressmanInfo';

@Injectable({
  providedIn: 'root'
})
export class BlmEmailService {

  constructor(private http: HttpClient) { }

  findCongressman(userInfo: UserInfo){
    return this.http.post<CongressmanInfo>('http://localhost:8080/blm/findInfo', userInfo);
  }
  sendCustomEmail(userInfo: UserInfo){
    return this.http.post('http://localhost:8080/blm/sendEmail', userInfo);
  }
}
