import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  postId: number;
  userId: number;
  post: any;
  user: any;

  constructor(private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.postId = param['id'];
    });
    this.get();
  }

  get() {
    this.postService.getPost(this.postId).subscribe((res: any) => {
      this.post = res;
      this.getUser(res.userId);
      this.userId = res.userId;
    });
  }

  getUser(id: number) {
    console.log(this.userId);
    this.postService.getUser(id).subscribe((user: any) => {
      this.user = user;
    });
  }

}
