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
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this.blogService.getSingleBlogPost(id).then((blog) => {
        this.blog = blog;

        console.log(this.blog);
        // Handle title (existing code)
        let title =
          this.blog.fields.title.length > 90
            ? this.blog.fields.title.substring(0, 87) + '...'
            : this.blog.fields.title;
        this.meta.updateTag({ property: 'og:title', content: title });
        this.meta.updateTag({ property: 'twitter:title', content: title });

        // Handle image
        let imageUrl = `https:${this.blog.fields.featuredImage.fields.file.url}`;
        this.meta.updateTag({ property: 'og:image', content: imageUrl });
        this.meta.updateTag({ property: 'twitter:image', content: imageUrl });

        // Handle description
        let description = this.blog.fields.description;
        if (!description) {
          // Extracting summary from content as fallback
          let contentSummary = this.blog.fields.content.split('\n')[0]; // Taking the first paragraph
          if (contentSummary.length > 155) {
            description = contentSummary.substring(0, 152) + '...'; // Truncate if too long
          } else {
            description = contentSummary;
          }
        }
        this.meta.updateTag({
          property: 'og:description',
          content: description,
        });
        this.meta.updateTag({
          property: 'twitter:description',
          content: description,
        });
        this.meta.updateTag({ property: 'twitter:card', content: description });
      });
    });
  }
}
