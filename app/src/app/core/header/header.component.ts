import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBar: EventEmitter<any> = new EventEmitter();

  constructor(public authService: AuthService ) {}

  ngOnInit(): void {
  }
  toggleSideBarShow(event: any): void {
    console.log(event);
    this.toggleSideBar.emit();
  }

  login(): void {
    this.authService.login();
  }
  logout(): void {
    this.authService.logout();
  }

}
