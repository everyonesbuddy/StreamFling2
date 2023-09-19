import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private client = createClient({
    space: environment.contentfulBlog.spaceId,
    accessToken: environment.contentfulBlog.token,
  });

  constructor(private http: HttpClient) {}

  getAllBlogs(query?: object): Promise<Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: environment.contentfulBlog.contentTypeIds.product,
          },
          query
        )
      )
      .then((res) => res.items);
  }

  getSingleBlogPost(id: any): Promise<Entry<any>> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: environment.contentfulBlog.contentTypeIds.product,
          },
          { 'sys.id': id }
        )
      )
      .then((res) => res.items[0]);
  }
}
