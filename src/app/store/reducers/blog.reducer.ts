import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Blog } from '../models/blog.model';
import { BlogActions } from '../actions/blog.actions';

export const blogsFeatureKey = 'blogs';

export interface State extends EntityState<Blog> {
  blogs: Blog[];
  selectedBlog: Blog | null;
}

export const adapter: EntityAdapter<Blog> = createEntityAdapter<Blog>();

export const initialState: State = adapter.getInitialState({
  blogs: [],
  selectedBlog: null
});

export const reducer = createReducer(
  initialState,
  on(BlogActions.addBlog,
    (state, action) => adapter.addOne(action.blog, state)
  ),
  on(BlogActions.upsertBlog,
    (state, action) => adapter.upsertOne(action.blog, state)
  ),
  on(BlogActions.addBlogs,
    (state, action) => adapter.addMany(action.blogs, state)
  ),
  on(BlogActions.upsertBlogs,
    (state, action) => adapter.upsertMany(action.blogs, state)
  ),
  on(BlogActions.updateBlog,
    (state, action) => adapter.updateOne(action.blog, state)
  ),
  on(BlogActions.updateBlogs,
    (state, action) => adapter.updateMany(action.blogs, state)
  ),
  on(BlogActions.deleteBlog,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(BlogActions.deleteBlogs,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(BlogActions.loadBlogs,
    (state, action) => adapter.setAll(action.blogs, state)
  ),
  on(BlogActions.loadBlogById,
    (state, action) => adapter.addOne({slug: action.slug, ...action.slug}, state)
  ),
  on(BlogActions.clearBlogs,
    state => adapter.removeAll(state)
  ),
);

export const blogsFeature = createFeature({
  name: blogsFeatureKey,
  reducer,
  extraSelectors: ({ selectBlogsState }) => ({
    ...adapter.getSelectors(selectBlogsState)
  }),
});

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = blogsFeature;
