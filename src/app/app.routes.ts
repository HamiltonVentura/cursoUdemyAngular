import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { PerfilComponent } from './components/perfil/perfil.component';

export const routes: Routes = [
{path:"", component:HomeComponent},
{path:"perfil", component:PerfilComponent},



];
