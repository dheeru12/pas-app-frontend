import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createProperty } from '../createPropertRequest';
import { PropertyServiceService } from '../property-service.service';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css'],
})
export class CreatePropertyComponent implements OnInit {
  p: createProperty = new createProperty();
  constructor(
    private route: ActivatedRoute,
    private service: PropertyServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.p.consumerId = this.route.snapshot.params.id;
  }
  onSubmit(props: createProperty) {
    console.log(props);
    this.service.createProperty(props).subscribe((data) => {
      this.router.navigate(['property/' + data.consumerId]);
    });
  }
}
