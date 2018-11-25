import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: any;
  user: string;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.postsService.getUser(this.post.userId).subscribe((res: any) => {
      this.user = res.name;
    }, error => {
      console.log(error);
    });
  }

}
