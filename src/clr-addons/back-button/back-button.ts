/*
 * Copyright (c) 2018 Porsche Informatik. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'clr-back-button',
  templateUrl: './back-button.html',
})
export class ClrBackButton {
  private previousUrls: Array<string>;
  private currentUrl: string = undefined;
  private preventPushUrl: EventEmitter<void>;
  constructor(private location: Location, private router: Router) {
    this.previousUrls = new Array<string>();
    this.preventPushUrl = new EventEmitter<void>();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        this.previousUrls.push(this.currentUrl);
        this.currentUrl = event.url;
      }
    });
    this.preventPushUrl.subscribe(() => this.previousUrls.pop());
  }

  public back(): void {
    this.location.back();
  }
  public goToPrevious(): void {
    console.log(this.previousUrls);
    if (!!this.previousUrls && this.previousUrls.length > 0) {
      this.router.navigate([this.previousUrls.pop()]);
      setTimeout(() => {
        this.preventPushUrl.emit();
      }, 1);
    }
  }
}
