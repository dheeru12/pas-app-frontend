import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { consumer } from '../model/consumer';
import { ConsumerBusinessService } from '../service/consumer-business.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css'],
})
export class ViewComponentComponent implements OnInit {
  cons!: consumer;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ConsumerBusinessService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.service.viewConsumer(id).subscribe((data) => {
      this.cons = data;
    });
  }
}
