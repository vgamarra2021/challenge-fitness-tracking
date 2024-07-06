import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileContainer } from './profile.container';

const routes: Routes = [
  {
    path: '',
    component: ProfileContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
