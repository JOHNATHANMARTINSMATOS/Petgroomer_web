import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorRoutingModule } from './administrator-routing.module';
import { MenuAdminstratorModule } from './menu-adminstrator/menu-adminstrator.module';
import { AgendaModule } from './agenda/agenda.module';
import { SharedModule } from '../../shared/shared.module';
import { RegisterClientModule } from './register-client/register-client.module';
import { ConsultClientModule } from './consult-client/consult-client.module';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { RegisterEmployeeModule } from './register-employee/register-employee.module';
import { ConsultEmployeeComponent } from './consult-employee/consult-employee.component';
import { ConsultEmployeeModule } from './consult-employee/consult-employee.module';
import { RegisterPetComponent } from './register-pet/register-pet.component';
import { RegisterPetModule } from './register-pet/register-pet.module';
import { ConsultPetComponent } from './consult-pet/consult-pet.component';
import { ConsultPetModule } from './consult-pet/consult-pet.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    MenuAdminstratorModule,
    AgendaModule,
    SharedModule,
    RegisterClientModule,
    ConsultClientModule,
    RegisterEmployeeModule,
    ConsultEmployeeModule,
    RegisterPetModule,
    ConsultPetModule
  ]
})
export class AdministratorModule { }
