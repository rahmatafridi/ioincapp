import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/account/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/account/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'newappointment/:saloonId/:date',
    loadChildren: () => import('./pages/appointment/newappointment/newappointment.module').then( m => m.NewappointmentPageModule)
  },
  {
    path: 'searchsaloonforappointment',
    loadChildren: () => import('./pages/saloon/searchsaloonforappointment/searchsaloonforappointment.module').then( m => m.SearchsaloonforappointmentPageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./pages/user/changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/account/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'resetpassword/:token',
    loadChildren: () => import('./pages/account/resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: 'archive-appointments',
    loadChildren: () => import('./pages/appointment/archive-appointments/archive-appointments.module').then( m => m.ArchiveAppointmentsPageModule)
  },
  {
    path: 'activateuser/:token',
    loadChildren: () => import('./pages/account/activateuser/activateuser.module').then( m => m.ActivateuserPageModule)
  },  {
    path: 'my-appointments',
    loadChildren: () => import('./pages/appointment/my-appointments/my-appointments.module').then( m => m.MyAppointmentsPageModule)
  },
  {
    path: 'saloon-admin-archive',
    loadChildren: () => import('./pages/appointment/saloon-admin-archive/saloon-admin-archive.module').then( m => m.SaloonAdminArchivePageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
