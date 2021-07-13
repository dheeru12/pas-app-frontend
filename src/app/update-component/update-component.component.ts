import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { consumerBusiness } from '../add-consumer/add-consumer.component';
import { consumer } from '../model/consumer';
import { ConsumerBusiness } from '../model/consumer-business';
import { ConsumerBusinessService } from '../service/consumer-business.service';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css'],
})
export class UpdateComponentComponent implements OnInit {
  consumer: ConsumerBusiness = new ConsumerBusiness();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ConsumerBusinessService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    let cons!: consumer;
    this.service.viewConsumer(id).subscribe((data) => {
      console.log(data);
      cons = data;
      this.consumer.agentUsername = cons.agentUsername;
      this.consumer.firstName = cons.firstName;
      this.consumer.lastName = cons.lastName;
      this.consumer.annualTurnover = cons.business.annualTurnover;
      this.consumer.businessAge = cons.business.businessAge;
      this.consumer.businessOverview = cons.businessOverview;
      this.consumer.businessType = cons.business.businessType;
      this.consumer.capitalInvested = cons.business.capitalInvested;
      this.consumer.dateOfBirth = cons.dateOfBirth;
      this.consumer.email = cons.email;
      this.consumer.pan = cons.pan;
      this.consumer.totalEmployees = cons.business.totalEmployees;
    });
  }
  onSubmit(cons: ConsumerBusiness) {
    let id = this.route.snapshot.params.id;
    this.service.updateConsumer(id, cons).subscribe((data) => {
      this.router.navigate(['consumer']);
    });
  }
}
