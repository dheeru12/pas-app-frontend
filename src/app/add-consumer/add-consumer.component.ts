import { Component, OnInit } from '@angular/core';
import { consumer } from '../model/consumer';
import { Router, RouterModule } from '@angular/router';
import { ConsumerBusinessService } from '../service/consumer-business.service';

export class consumerBusiness {
  firstName: string = '';
  lastName: string = '';
  dateOfBirth: Date = new Date();
  email: string = '';
  pan: string = '';
  businessOverview: string = '';
  businessType: string = '';
  annualTurnover: number = 0;
  totalEmployees: number = 0;
  capitalInvested: number = 0;
  businessAge: number = 0;
  agentUsername: string = '';
}

@Component({
  selector: 'app-add-consumer',
  templateUrl: './add-consumer.component.html',
  styleUrls: ['./add-consumer.component.css'],
})
export class AddConsumerComponent implements OnInit {
  constructor(
    private route: Router,
    private service: ConsumerBusinessService
  ) {}

  ngOnInit(): void {}
  onSubmit(c: consumerBusiness) {
    console.log(c);
    this.service.createConsumerBusiness(c).subscribe(
      (data) => {
        console.log(data);
        this.route.navigate(['consumer']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onCancel() {
    this.route.navigate(['consumer']);
  }
}
