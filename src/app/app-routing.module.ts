import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostListComponent} from './post-company/post-list/post-list.component';
import {DepartmentsListComponent} from './post-department/departments-list/departments-list.component';
import {PackageListComponent} from './package/package-list/package-list.component';
import {ClientListComponent} from './client/client-list/client-list.component';
import {PostDepartmentDetailComponent} from './post-department/post-department-detail/post-department-detail.component';
import {PackageDetailComponent} from './package/package-detail/package-detail.component';
import {ClientDetailComponent} from './client/client-detail/client-detail.component';
import {PostCompanyDetailComponent} from './post-company/post-company-detail/post-company-detail.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'companies', pathMatch: 'full'
  },
  {
    path: 'companies', component: PostListComponent
  }, {
    path: 'company/:id', component: PostCompanyDetailComponent
  },
  {
    path: 'departments', component: DepartmentsListComponent
  },
  {
    path: 'department/:id', component: PostDepartmentDetailComponent
  },
  {
    path: 'packages', component: PackageListComponent
  },
  {
    path: 'package/:id', component: PackageDetailComponent
  },
  {
    path: 'clients', component: ClientListComponent
  },
  {
    path: 'client/:id', component: ClientDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      enableTracing: false,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export  class AppRoutingModule {}
