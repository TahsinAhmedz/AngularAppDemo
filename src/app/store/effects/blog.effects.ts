import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { BlogActions } from '../actions/blog.actions';


@Injectable()
export class BlogEffects {

  // loadBlogs$ = createEffect(() => {
  //   return this.actions$.pipe(

  //     ofType(BlogActions.loadBlogs),
  //     concatMap(() =>
  //       /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //       EMPTY.pipe(
  //         map(data => BlogActions.loadBlogsSuccess({ data })),
  //         catchError(error => of(BlogActions.loadBlogsFailure({ error }))))
  //     )
  //   );
  // });


  constructor(private actions$: Actions) {}
}
