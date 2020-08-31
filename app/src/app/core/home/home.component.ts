import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sideBarOpen = false;
  constructor() {}

  ngOnInit(): void {

  }

  toggleSideBar(event: any): void {
    console.log(event);
    this.sideBarOpen = !this.sideBarOpen;
  }

}
