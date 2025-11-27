import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button class="text-black w-full px-5 py-2 rounded-xl shadow-md shadow-emerald-300 hover:bg-emerald-100"
            (click)="btnClicked.emit()"
            [disabled]="disabled()"
            [attr.type]="type()">
       <span >{{ label() }}</span>
    </button>
  `,
  styles: ``,
})
export class Button {
  label = input('');

  btnClicked = output();

  disabled = input<boolean>(false);

  type = input<'button' | 'submit' | 'reset'>('button');

}
