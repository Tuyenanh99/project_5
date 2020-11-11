import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./nguoidung/nguoidung.module').then((m) => m.NguoidungModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    RouterModule.forRoot(routes)
  ],
  // exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
