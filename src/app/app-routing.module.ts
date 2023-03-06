import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageStarComponent } from './components/page-star/page-star.component';

const routes: Routes = [
   { path: '', component: PageStarComponent },
   { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
