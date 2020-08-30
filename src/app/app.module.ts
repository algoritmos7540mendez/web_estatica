import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pagina/menu/menu.component';
import { FooterComponent } from './pagina/footer/footer.component';
import { HeaderComponent } from './pagina/header/header.component';
import { InfoComponent } from './pagina/info/info.component';
import { MaterialComponent } from './pagina/material/material.component';
import { DocentesComponent } from './pagina/docentes/docentes.component';
import { CronogramaComponent } from './pagina/cronograma/cronograma.component';
import { EvaluacionesComponent } from './pagina/evaluaciones/evaluaciones.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginaComponent } from './pagina/pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    InfoComponent,
    MaterialComponent,
    DocentesComponent,
    CronogramaComponent,
    EvaluacionesComponent,
    PaginaComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
