import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';


import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserComponent } from './user/user.component';
import { ServicioService } from './Servicio/servicio.service';
import { MatNativeDateModule } from '@angular/material/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';

import { EditarComponent } from './editar/editar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
;



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
     MatTableModule,

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UserComponent,
    EditarComponent,
    LoginComponent,
    RegisterComponent

  
   
  
  ],
  providers: [ServicioService],

  bootstrap: [AppComponent]
})
export class AppModule { }
