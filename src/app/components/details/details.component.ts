import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy{

  slug: string = '';
  objectData: any;

  sub!: Subscription;

  constructor(private route: ActivatedRoute,
              private locationService: LocationService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.sub = this.locationService.getObjectById(this.slug)
      .subscribe(data => {
        this.objectData = data;
        console.log(this.objectData);
      })
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
