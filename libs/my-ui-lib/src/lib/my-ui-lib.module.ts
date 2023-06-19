import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { RandomuserService } from './randomuser.service';

@NgModule({
  providers:[RandomuserService],
  imports: [CommonModule,HttpClientModule],
})
export class MyUiLibModule {
  static forRoot(): ModuleWithProviders<MyUiLibModule> {
    return {
      ngModule: MyUiLibModule,
      providers: [
        RandomuserService,
        // {provide: SomeConfig, useValue: config }
      ]
    };
  }
}


