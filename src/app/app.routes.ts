import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { ProcessComponent } from './components/process/process.component';

const routes: Routes = [
    { path: 'users', component: UserComponent },
    { path: 'process', component: ProcessComponent },
    { path: '', redirectTo: '/users', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{ }
