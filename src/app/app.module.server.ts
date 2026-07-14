import { NgModule } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';

import { AppModule } from './app-module';
import { serverRoutes } from './app.routes.server';
import { Shell } from './Components/shell/shell';

@NgModule({
  imports: [AppModule],
  providers: [provideServerRendering(withRoutes(serverRoutes))],
  bootstrap: [Shell],
})
export class AppServerModule {}
