import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() messagesToggled = new EventEmitter<boolean>();
  messageList: boolean = false

  @Output() favoritesToggled = new EventEmitter<boolean>();
  favoriteList: boolean = false
  loginBox: boolean = false
  // @Output() loginToggled = new EventEmitter<boolean>();
  // loginList: boolean = false

  constructor() {
  }

  ngOnInit(): void {
  }

  showMessagesToggle() {
    if (this.favoriteList) {
      this.favoriteList = !this.favoriteList;
      this.favoritesToggled.emit(this.favoriteList);
      this.messageList = !this.messageList;
      this.messagesToggled.emit(this.messageList);
    } else {
      this.messageList = !this.messageList;
      this.messagesToggled.emit(this.messageList);
    }
  }

  showFavoriteToggle() {
    if (this.messageList) {
      this.messageList = !this.messageList;
      this.messagesToggled.emit(this.messageList);
      this.favoriteList = !this.favoriteList;
      this.favoritesToggled.emit(this.favoriteList);
    } else {
      this.favoriteList = !this.favoriteList;
      this.favoritesToggled.emit(this.favoriteList);
    }
  }

  showLoginToggle() {
    this.loginBox = !this.loginBox;
  }
}
