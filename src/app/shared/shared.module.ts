import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/molecules/side-bar/side-bar.component';
import { SearchBarComponent } from './components/molecules/search-bar/search-bar.component';
import { ContactCardComponent } from './components/molecules/contact-card/contact-card.component';
import { ChatListComponent } from './components/molecules/chat-list/chat-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SideBarComponent,
    SearchBarComponent,
    ContactCardComponent,
    ChatListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SideBarComponent,
    SearchBarComponent,
    ContactCardComponent,
    ChatListComponent
  ]
})
export class SharedModule { }
