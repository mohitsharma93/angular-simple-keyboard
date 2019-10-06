// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import Keyboard from "simple-keyboard";

@Component({
  selector: 'app-numeric-key-board',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './numeric-key-board.component.html',
  styleUrls: ['./numeric-key-board.component.css',
  "../../../node_modules/simple-keyboard/build/css/index.css",]
})
export class NumericKeyBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value = "";
  keyboard: Keyboard;

  ngAfterViewInit() {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button),
      layout: {
        default: ["1 2 3", "4 5 6", "7 8 9", "{shift} 0 _", "{bksp}"],
        shift: ["! / #", "$ % ^", "& * (", "{shift} ) +", "{bksp}"]
      },
      theme: "hg-theme-default hg-layout-numeric numeric-theme"
    });
  }

  onChange = (input: string) => {
    this.value = input;
    console.log("Input changed", input);
  };

  onKeyPress = (button: string) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  };

  handleShift = () => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  };

}
