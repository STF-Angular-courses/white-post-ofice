import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostListComponent} from './post-company/post-list/post-list.component';
import {DepartmentsListComponent} from './post-department/departments-list/departments-list.component';
import {PackageListComponent} from './package/package-list/package-list.component';
import {ClientListComponent} from './client/client-list/client-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'companies', pathMatch: 'full'
  },
  {
    path: 'companies', component: PostListComponent
  },
  {
    path: 'departments', component: DepartmentsListComponent
  },
  {
    path: 'packages', component: PackageListComponent
  },
  {
    path: 'clients', component: ClientListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export  class AppRoutingModule {}
