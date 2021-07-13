import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationResponse } from '../authentication-response';
import { consumer } from '../model/consumer';
import { ConsumerBusinessService } from '../service/consumer-business.service';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css'],
})
export class ConsumerComponent implements OnInit {
  constructor(
    private route: Router,
    private service: ConsumerBusinessService
  ) {}

  cons: consumer[] = [];

  ngOnInit(): void {
    this.service.getConsumerBusiness().subscribe((data) => (this.cons = data));
  }
  createConsumerBusiness() {
    this.route.navigate(['addconsumer']);
  }
}
