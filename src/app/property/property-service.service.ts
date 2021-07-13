import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { createPolicyRequest } from '../model/createPolicyRequest';
import { issuePolicyRequest } from '../model/issuePolicyRequest';
import { policyMaster } from '../model/policyMaster';
import { quote } from '../model/quotes';
import { createProperty } from './createPropertRequest';
import { policy } from './policy';
import { property } from './property';

@Injectable({
  providedIn: 'root',
})
export class PropertyServiceService {
  constructor(private http: HttpClient) {}
  header = {
    headers: new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('jwtToken')
    ),
  };

  getProperty(id: number): Observable<property> {
    return this.http.get<property>(
      'http://localhost:8091/consumer/viewBusinessProperty/' + id,
      this.header
    );
  }

  createProperty(prop: createProperty): Observable<property> {
    return this.http.post<property>(
      'http://localhost:8091/consumer/createBusinessProperty',
      prop,
      this.header
    );
  }

  getPropertyByPropertyId(id: number): Observable<property> {
    return this.http.get<property>(
      'http://localhost:8091/consumer/viewProperty/' + id,
      this.header
    );
  }

  updateProperty(id: number, prop: property): Observable<property> {
    return this.http.put<property>(
      'http://localhost:8091/consumer/updateBusinessProperty/' + id,
      prop,
      this.header
    );
  }

  viewPolicy(consumerId: number, businessId: number): Observable<policy> {
    return this.http.get<policy>(
      'http://localhost:8083/policy-api/getPolicy/' +
        consumerId +
        '/' +
        businessId,
      this.header
    );
  }

  getQuotes(bvalue: string, pvalue: string, ptype: string): Observable<quote> {
    return this.http.get<quote>(
      'http://localhost:8083/policy-api/getQuotes/' +
        bvalue +
        '/' +
        pvalue +
        '/' +
        ptype
    );
  }

  createPolicy(request: createPolicyRequest): Observable<string> {
    return this.http.post<string>(
      'http://localhost:8083/policy-api/createPolicy',
      request,
      this.header
    );
  }

  getPolicyMasterValues(
    bvalue: number,
    pvalue: number,
    ptype: string
  ): Observable<policyMaster[]> {
    return this.http.get<policyMaster[]>(
      'http://localhost:8083/policy-api/getPolicyMaster/' +
        bvalue +
        '/' +
        pvalue +
        '/' +
        ptype,
      this.header
    );
  }
  issuePolicy(issue: issuePolicyRequest): Observable<any> {
    console.log(issue);
    return this.http.post<any>(
      'http://localhost:8083/policy-api/issuePolicy',
      issue,
      this.header
    );
  }
}
