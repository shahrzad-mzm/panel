import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() messageList: boolean = true
  @Input() favoriteList: boolean = true
  // List = [
  //   {number: '1', name: 'Dashboard', icon: '/assets/icons/Category - All (1).svg'},
  //   {number: '2', name: 'Analytics', icon: '/assets/icons/Chart.svg'},
  //   {number: '3', name: 'Tables', icon: '/assets/icons/Product.svg'},
  //   {number: '4', name: 'Dashboard', icon: '/assets/icons/Category - All (1).svg'},
  //   {number: '5', name: 'Dashboard', icon: '/assets/icons/Category - All (1).svg'},
  //   {number: '6', name: 'Profile', icon: '/assets/icons/Profile.svg'},
  //   {number: '7', name: 'Setting', icon: '/assets/icons/Setting.svg'},
  //   {number: '8', name: 'Recent', icon: '/assets/icons/Frame 1000005080.svg'}
  // ]

  constructor() {
  }

  ngOnInit(): void {
    this.messageList = false;
    this.favoriteList = false;
  }

  // closeList() {
  //   this.messageList = !this.messageList;
  // }
}
