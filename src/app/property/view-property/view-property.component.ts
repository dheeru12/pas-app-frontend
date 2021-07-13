import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerBusinessService } from 'src/app/service/consumer-business.service';
import { policy } from '../policy';
import { property } from '../property';
import { PropertyServiceService } from '../property-service.service';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css'],
})
export class ViewPropertyComponent implements OnInit {
  props!: property;
  policy!: policy;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PropertyServiceService,
    private consumerService: ConsumerBusinessService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.service.getProperty(id).subscribe((data) => {
      this.props = data;
      if (this.props.businessId && this.props.consumerId) {
        this.service
          .viewPolicy(this.props.consumerId, this.props.consumerId)
          .subscribe((data) => {
            this.policy = data;
          });
      }
    });
  }

  createProperty() {
    let id = this.route.snapshot.params.id;
    this.router.navigate(['createProperty/' + id]);
  }

  updateProperty(id: number) {
    this.router.navigate(['updateProperty/' + id]);
  }

  createPolicy(consumerid: number) {
    let businessValue: number = 0;
    this.consumerService.viewConsumer(String(consumerid)).subscribe((data) => {
      businessValue = data.business.businessValue;
    });
    this.router.navigate([
      'createPolicy/' +
        consumerid +
        '/' +
        businessValue +
        '/' +
        this.props.propertyValue +
        '/' +
        this.props.propertyType,
    ]);
  }

  viewPolicy(consumerid: number, businessid: number) {
    this.router.navigate(['viewPolicy/' + consumerid + '/' + businessid]);
  }
}
