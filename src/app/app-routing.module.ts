import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WatchlistsComponent } from './pages/watchlists/watchlists.component';
import { HttpClientModule } from '@angular/common/http'; 

const routes: Routes = [
  { path: '', component:HomeComponent  },
  { path: 'watch', component:WatchlistsComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

