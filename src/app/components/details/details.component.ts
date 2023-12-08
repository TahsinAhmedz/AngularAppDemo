import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy{
  blogData$!: Observable<any>;

  sub = new Subscription();

  constructor(private route: ActivatedRoute,
              private locationService: LocationService) {
  }

  ngOnInit(): void {
    const sub1 = this.route.params.subscribe(params => {
      this.blogData$ = this.locationService.getBlogById(params['slug']);
    });

    this.sub.add(sub1)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
