import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TicketListComponent} from './ticket-list/ticket-list.component';
import {TicketDetailsComponent} from './ticket-details/ticket-details.component';
import {RouterModule} from '@angular/router';
import {routes} from '../routes';
import {NavbarComponent} from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TicketCreateComponent} from './ticket-create/ticket-create.component';
import {TicketCommentComponent} from './ticket-comment/ticket-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketDetailsComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    TicketCreateComponent,
    TicketCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
