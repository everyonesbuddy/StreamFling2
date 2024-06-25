import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
  blog: any = [];

  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this.blogService.getSingleBlogPost(id).then((blog) => {
        this.blog = blog;

        // Update meta tags based on fetched blog data
        this.metaService.updateTag({
          property: 'og:title',
          content: this.blog.fields.title,
        });
        //  this.metaService.updateTag({ property: 'og:description', content: 'Your blog description here' });
        this.metaService.updateTag({
          property: 'og:image',
          content: this.blog.fields.featuredImage.fields.file.url,
        });
        this.metaService.updateTag({
          property: 'og:url',
          content:
            'https://sure-odds.com/blog-post/' + this.blog.slug + this.blog.id,
        });

        // Update other relevant meta tags as needed
        //  this.metaService.updateTag({ name: 'description', content: this.blog.fields.metaDescription });
        //  this.metaService.updateTag({ name: 'keywords', content: this.blog.fields.keywords.join(', ') });
      });
    });
  }
}
