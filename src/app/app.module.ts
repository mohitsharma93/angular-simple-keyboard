import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FullkeyboardComponent } from './fullkeyboard/fullkeyboard.component';
import { AppRoutingModule } from "./app-routing.module";
import { NumericKeyBoardComponent } from './numeric-key-board/numeric-key-board.component';


@NgModule({
  declarations: [AppComponent, FullkeyboardComponent, NumericKeyBoardComponent],
  imports: [BrowserModule, AppRoutingModule,],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [FullkeyboardComponent]
})
export class AppModule {}
