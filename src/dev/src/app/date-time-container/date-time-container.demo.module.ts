/*
 * Copyright (c) 2018 Porsche Informatik. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClarityModule } from '@clr/angular';
import { ClrAddonsModule } from '@porscheinformatik/clr-addons';

import { DateTimeContainerDemo } from './date-time-container.demo';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ClrAddonsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: DateTimeContainerDemo }]),
  ],
  declarations: [DateTimeContainerDemo],
  exports: [DateTimeContainerDemo],
})
export class DateTimeContainerDemoModule {}
