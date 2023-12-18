import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { BlogActions } from '../actions/blog.actions';
import { BlogService } from 'src/app/services/blog.service';


@Injectable()
export class BlogEffects {

  loadBlogs$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(BlogActions.loadBlogs),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.blogService.allBlogs$.pipe(
          map(blogs => BlogActions.loadBlogsSuccess({ blogs })),
          catchError(error => of(BlogActions.loadBlogsFailure({ error })))
        )
      )
    );
  });

  loadBlogById$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(BlogActions.loadBlogById),
      concatMap(action =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.blogService.getBlogById(action.slug).pipe(
          map(blog => BlogActions.loadBlogByIdSuccess({ blog })),
          catchError(error => of(BlogActions.loadBlogByIdFailure({ error })))
          )
      )
    );
  });


  constructor(private actions$: Actions, private blogService: BlogService) {}
}
