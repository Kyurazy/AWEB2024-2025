import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpclientService } from './httpclient.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'clientprg';
  httpusers: any;


  constructor(private httpclientList: HttpclientService){
    this.httpclientList.getUsersRemotely().subscribe((data:any)=>{
      this.httpusers = data.slice(0, 6);
    })
  }
}


