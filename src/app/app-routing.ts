import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: ()=> import('./home/home.component').then(a=> a.HomeComponent) }
];
