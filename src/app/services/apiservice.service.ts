import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(
    private http: HttpClient
  ) { }

  post (serviceName: string, data: any){
    const URL = 'https://qrehadir.pahang.gov.my/api/yuran/' + serviceName;

    return this.http.post(URL, JSON.stringify(data));
  }

}
