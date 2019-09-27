import { Injectable } from '@angular/core';
import { Http } from '../../../../node_modules/@angular/http';

@Injectable()
export class CombineapiService {

  constructor(
    public http:Http
  ) { }

  getAllCombinationAPI() {
    return this.http.get('http://10.108.210.102:30000/apis/getAllAPI')
      .map(res => {
        return res;
      });
  }
}
