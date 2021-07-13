import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createPolicyRequest } from 'src/app/model/createPolicyRequest';
import { quote } from 'src/app/model/quotes';
import { PropertyServiceService } from '../property-service.service';

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.css'],
})
export class CreatePolicyComponent {
  status!: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PropertyServiceService
  ) {}

  ngOnInit(): void {
    let businessValue = this.route.snapshot.params.bvalue;
    let propertyValue = this.route.snapshot.params.pvalue;
    let propertyType = this.route.snapshot.params.ptype;
    this.service
      .getQuotes(businessValue, propertyValue, propertyType)
      .subscribe((data) => {
        if (data.quotes != 'No Quotes, Contact Insurance Provider') {
          this.status = data.quotes;
        }
      });
  }

  onAccept() {
    let consumerId = this.route.snapshot.params.id;
    let request: createPolicyRequest = new createPolicyRequest();
    request.consumerid = consumerId;
    request.acceptedquotes = this.status;
    this.service.createPolicy(request).subscribe((data) => {
      this.router.navigate(['property/' + consumerId]);
    });
  }

  onCancel() {
    let consumerId = this.route.snapshot.params.id;
    this.router.navigate(['property/' + consumerId]);
  }
}
