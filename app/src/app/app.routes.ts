import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { CreateComponent } from './create/create.component';
import { NavbarComponent } from './navbar/navbar.component';


export const routes: Routes = [
    {path:"header", component: HeaderComponent },
    {path:"dashboard", component: DashboardComponent },
    {path:"footer", component: FooterComponent },
    {path:"create", component: CreateComponent },
    {path:"navbar", component: NavbarComponent }

];





