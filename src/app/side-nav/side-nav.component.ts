import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false
  clickMenu: boolean = false
  // // List: any[];
  // // public menu: [] = []
  // List: any = [
  //   {number: '1', name: 'Dashboard', icon: '/assets/icons/Category - All (1).svg'},
  //   {number: '2', name: 'Analytics', icon: '/assets/icons/Chart.svg'},
  //   {number: '3', name: 'Tables', icon: '/assets/icons/Product.svg'},
  //   {number: '4', name: 'Dashboard', icon: '/assets/icons/Category - All (1).svg'},
  //   {number: '5', name: 'Dashboard', icon: '/assets/icons/Category - All (1).svg'},
  //   {
  //     number: '6',
  //     name: 'Profile',
  //     icon: '/assets/icons/Profile.svg',
  //     menu: [{title: 'Menu item'}, {title: 'Menu item'}, {title: 'Menu item'}, {title: 'Menu item'}, {title: 'Menu item'}]
  //   },
  //   {number: '7', name: 'Setting', icon: '/assets/icons/Setting.svg'},
  //   {number: '8', name: 'Recent', icon: '/assets/icons/Frame 1000005080.svg'}
  // ]

  constructor() {
  }

  ngOnInit(): void {
  }

  sideNaveToggle() {
    this.clickMenu = !this.clickMenu
  }
}
