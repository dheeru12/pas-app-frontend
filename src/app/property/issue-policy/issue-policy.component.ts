import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { consumer } from 'src/app/model/consumer';
import { ConsumerBusiness } from 'src/app/model/consumer-business';
import { issuePolicyRequest } from 'src/app/model/issuePolicyRequest';
import { policyMaster } from 'src/app/model/policyMaster';
import { ConsumerBusinessService } from 'src/app/service/consumer-business.service';
import { property } from '../property';
import { PropertyServiceService } from '../property-service.service';

@Component({
  selector: 'app-issue-policy',
  templateUrl: './issue-policy.component.html',
  styleUrls: ['./issue-policy.component.css'],
})
export class IssuePolicyComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PropertyServiceService,
    private consumerService: ConsumerBusinessService
  ) {}
  businessValue!: number;
  propertyValue!: number;
  propertyType!: string;
  policies: policyMaster[] = [];
  issue: issuePolicyRequest = new issuePolicyRequest();

  ngOnInit(): void {
    let consumerId = this.route.snapshot.params.id;
    let cons!: consumer;
    let props!: property;
    this.service.getProperty(consumerId).subscribe((data) => {
      props = data;
      this.propertyValue = props.propertyValue;
      this.propertyType = props.propertyType;
      this.consumerService.viewConsumer(consumerId).subscribe((data) => {
        cons = data;
        this.businessValue = cons.business.businessValue;
        this.service
          .getPolicyMasterValues(
            this.businessValue,
            this.propertyValue,
            this.propertyType
          )
          .subscribe((data) => {
            console.log(
              this.businessValue,
              this.propertyValue,
              this.propertyType
            );
            this.policies = data;
          });
      });
    });
  }

  selectPolicyId(id: string) {
    this.issue.policyid = id;
  }

  paymentSuccessfull() {
    this.issue.acceptancestatus = 'Accepted';
    this.issue.paymentdetails = 'Success';
    this.issue.consumerid = this.route.snapshot.params.id;
    this.issue.businessid = this.route.snapshot.params.bid;
    this.service.issuePolicy(this.issue).subscribe((data) => {
      console.log(data);
      this.router.navigate([
        'viewPolicy/' + this.issue.consumerid + '/' + this.issue.businessid,
      ]);
    });
  }

  onCancel() {
    this.router.navigate([
      'viewPolicy/' +
        this.route.snapshot.params.id +
        '/' +
        this.route.snapshot.params.bid,
    ]);
  }
}
