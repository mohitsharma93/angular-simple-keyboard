import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullkeyboardComponent  } from "./fullkeyboard/fullkeyboard.component";
import { NumericKeyBoardComponent } from './numeric-key-board/numeric-key-board.component';


const routes: Routes = [
    {
      path: 'full-keyboard',
      component: FullkeyboardComponent
    },
    {
      path: 'numeric-keyboard',
      component: NumericKeyBoardComponent
    },
    { path: '', redirectTo: 'full-keyboard', pathMatch: 'full'},
  
  ];
  @NgModule({
    imports: [
      RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
  
  })
  export class AppRoutingModule { }