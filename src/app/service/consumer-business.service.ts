import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { consumerBusiness } from '../add-consumer/add-consumer.component';
import { AuthenticationResponse } from '../authentication-response';

import { consumer } from '../model/consumer';
import { ConsumerBusiness } from '../model/consumer-business';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class ConsumerBusinessService {
  constructor(private http: HttpClient) {}

  getConsumerBusiness(): Observable<consumer[]> {
    var header = {
      headers: new HttpHeaders().set(
        'Authorization',
        'Bearer ' + localStorage.getItem('jwtToken')
      ),
    };

    return this.http.get<consumer[]>(
      'http://localhost:8091/consumer/viewAllConsumers/' +
        localStorage.getItem('user'),
      header
    );
  }

  createConsumerBusiness(cons: consumerBusiness): Observable<consumer> {
    var header = {
      headers: new HttpHeaders().set(
        'Authorization',
        'Bearer ' + localStorage.getItem('jwtToken')
      ),
    };

    cons.agentUsername = localStorage.getItem('user') || '';

    return this.http.post<consumer>(
      'http://localhost:8091/consumer/createConsumerBusiness',
      cons,
      header
    );
  }

  viewConsumer(id: string): Observable<consumer> {
    var header = {
      headers: new HttpHeaders().set(
        'Authorization',
        'Bearer ' + localStorage.getItem('jwtToken')
      ),
    };
    return this.http.get<consumer>(
      'http://localhost:8091/consumer/viewConsumerBusiness/' + id,
      header
    );
  }

  updateConsumer(id: string, consumer: ConsumerBusiness): Observable<consumer> {
    var header = {
      headers: new HttpHeaders().set(
        'Authorization',
        'Bearer ' + localStorage.getItem('jwtToken')
      ),
    };
    return this.http.put<consumer>(
      'http://localhost:8091/consumer/updateConsumerBusiness/' + id,
      consumer,
      header
    );
  }
}
