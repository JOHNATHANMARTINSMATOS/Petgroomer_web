import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuAdminstratorComponent } from './menu-adminstrator/menu-adminstrator.component';
import { AgendaComponent } from './agenda/agenda.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { ConsultClientComponent } from './consult-client/consult-client.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { ConsultEmployeeComponent } from './consult-employee/consult-employee.component';
import { RegisterPetComponent } from './register-pet/register-pet.component';
import { ConsultPetComponent } from './consult-pet/consult-pet.component';

const routes: Routes = [
    { path: '', component: MenuAdminstratorComponent, children: [
      { path: '', component: AgendaComponent },
      { path: 'registerClient', component:RegisterClientComponent },
      { path: 'consultClient', component:ConsultClientComponent },
      {path:'registerEmployee', component: RegisterEmployeeComponent},
      {path:'consultEployee', component: ConsultEmployeeComponent},
      {path:'registerPet', component:RegisterPetComponent},
      {path:'ConsultPet', component:ConsultPetComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
