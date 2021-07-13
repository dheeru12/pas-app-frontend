import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { property } from '../property';
import { PropertyServiceService } from '../property-service.service';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css'],
})
export class UpdatePropertyComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PropertyServiceService
  ) {}
  prop: property = new property();
  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.service.getPropertyByPropertyId(id).subscribe((data) => {
      this.prop = data;
    });
  }

  onSubmit(p: property) {
    this.service.updateProperty(this.prop.id, p).subscribe((data) => {
      this.router.navigate(['property/' + this.prop.consumerId]);
    });
  }
}
