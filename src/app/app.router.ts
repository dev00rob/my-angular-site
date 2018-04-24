// STEP 1 Import ModuleWithProviders Routes, RouterModule

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Step 2 Import the components that will be linked to a route 

import { AppComponent } from './app.component';
import { DinnerComponent } from './dinner/dinner.component';
import { DogComponent } from './dog/dog.component';
import { StarComponent } from  './star/star.component';

// Step 3 Setup the Routes
export const router: Routes = [
    { path: '', redirectTo: 'dinner', pathMatch: 'full' },
    { path: 'dinner', component: DinnerComponent },
    { path: 'dog', component: DogComponent },
    { path: 'star', component: StarComponent }
];

// Step 4 -Tell angular to use this router
export const routes: ModuleWithProviders = RouterModule.forRoot(router);