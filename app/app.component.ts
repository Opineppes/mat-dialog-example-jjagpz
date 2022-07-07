import { Component, Injectable, Injector } from '@angular/core';
import { ViewContainerRef } from '@angular/core/src/linker';
import { VERSION, MatDialog, MatSnackBar } from '@angular/material';

@Injectable()
export class MyService {
  public isGood = false;
}

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
})
export class DialogComponent {
  version = VERSION;

  constructor(private myService: MyService) {
    console.log(this.myService.isGood);
  }
}

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  providers: [MyService],
})
export class AppComponent {
  version = VERSION;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private myService: MyService,
    private viewContainerRef: ViewContainerRef
  ) {
    this.myService.isGood = true;
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      viewContainerRef: this.viewContainerRef,
    });
    const snack = this.snackBar.open('Snack bar open before dialog');
  }
}

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// var dates = []

//     var now = moment().startOf('day').hour(10).minute(30).seconds(0)
//     var deadline = moment().hour(19).minute(0).seconds(0)
//     //dates.push(now.format('HH:mm A'))
//     while (now.diff(deadline) < 0) {
//       if (now >= moment(now).hour(10)) {
//         dates.push(now.format('hh:mm A'))
//       }
//       now.add(12, 'minutes');
//     }
