import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Blog } from '../models/blog.model';

export const BlogActions = createActionGroup({
  source: 'Blog/API',
  events: {
    'Load Blogs': props<{ blogs: Blog[] }>(),
    'Add Blog': props<{ blog: Blog }>(),
    'Upsert Blog': props<{ blog: Blog }>(),
    'Add Blogs': props<{ blogs: Blog[] }>(),
    'Upsert Blogs': props<{ blogs: Blog[] }>(),
    'Update Blog': props<{ blog: Update<Blog> }>(),
    'Update Blogs': props<{ blogs: Update<Blog>[] }>(),
    'Delete Blog': props<{ id: string }>(),
    'Delete Blogs': props<{ ids: string[] }>(),
    'Clear Blogs': emptyProps(),
  }
});
