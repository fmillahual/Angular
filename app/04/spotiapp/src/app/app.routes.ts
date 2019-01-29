import { Routes, RouterModule } from '@angular/router';

import  { HomeComponent } from "./components/home/home.component"
import { SearchComponent } from "./components/search/search.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home' }
   

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const app_routing = RouterModule.forRoot(routes, { useHash:true });
