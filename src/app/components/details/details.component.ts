import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, switchMap, tap } from 'rxjs';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  blogData$!: Observable<Blog>;

  constructor(private route: ActivatedRoute,
              private locationService: BlogService) {
  }

  ngOnInit(): void {
    this.blogData$ = this.route.paramMap.pipe(
      switchMap(params => this.locationService.getBlogById(params.get('slug')))
    );
  }
}
