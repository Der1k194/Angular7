import { Component } from '@angular/core';
import { UserService } from './../api/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LearnAngular';

  constructor(private userService: UserService){}

  ngOnInit(){
    this.userService.getUsers().subscribe((res) => {
      console.log(res);
    })
  }
}
