import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'contentful';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogs: Entry<any>[] = [];

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    //get all Blogs
    this.blogService.getAllBlogs().then((blogs) => {
      this.blogs = blogs;
      console.log('blogs', this.blogs);
    });
  }

  getBlogPost(slug: any, id: any) {
    this.router.navigate(['/blog-post/' + slug + '/' + id]);
  }
}
