import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureChatsRoutingModule } from './feature-chats-routing.module';
import { ChatsPageComponent } from './pages/chats-page/chats-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ChatsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    FeatureChatsRoutingModule,
    ChatsPageComponent,
  ]
})
export class FeatureChatsModule { }
