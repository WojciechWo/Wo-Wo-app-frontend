import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from './app.component';

@Injectable({
    providedIn: "root"
})

export class AppService {

  title = 'Wo-Wo-app-frontend';
  name= '';
  password='';
  
  private header = new HttpHeaders();

constructor(private httpClient: HttpClient){
 

}

  loginApi(payload: any){
    return this.httpClient.post('http://localhost:8080/auth/login',payload)

  }
  getData(token: string): Observable<Data[]>{
    this.header = this.header.set('Authorization','Bearer' + token);
    console.log(this.header);
    return this.httpClient.get<Data[]>('http://localhost:8080/Wo',{'headers': this.header})

  }
}
