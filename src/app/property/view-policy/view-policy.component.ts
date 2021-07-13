import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { policy } from '../policy';
import { PropertyServiceService } from '../property-service.service';

@Component({
  selector: 'app-view-policy',
  templateUrl: './view-policy.component.html',
  styleUrls: ['./view-policy.component.css'],
})
export class ViewPolicyComponent implements OnInit {
  policy!: policy;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PropertyServiceService
  ) {}

  ngOnInit(): void {
    this.service
      .viewPolicy(this.route.snapshot.params.id, this.route.snapshot.params.bid)
      .subscribe((data) => {
        this.policy = data;
      });
  }

  issuePolicy() {
    this.router.navigate([
      'issue-policy/' +
        this.route.snapshot.params.id +
        '/' +
        this.route.snapshot.params.bid,
    ]);
  }
}
