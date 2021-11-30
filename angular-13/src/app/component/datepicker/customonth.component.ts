import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbDatepicker, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-customonth',
    templateUrl: './customonth.component.html',
    encapsulation: ViewEncapsulation.None,
    styles: [`
    .custom-datepicker .ngb-dp-header {
      padding: 0;
    }
    .custom-datepicker .ngb-dp-content {
      display: grid;
      grid-template-columns: auto auto;
      grid-column-gap: 2px;
      grid-row-gap: 0.5rem;
    }
  `]
})
export class Custommonth {

    @ViewChild(NgbDatepicker, { static: true }) datepicker: NgbDatepicker = Object.create(null);

    constructor(public i18n: NgbDatepickerI18n) { }

    navigate(number: number) {
        const { state, calendar } = this.datepicker;
        this.datepicker.navigateTo(calendar.getNext(state.firstDate, 'm', number));
    }

    today() {
        const { calendar } = this.datepicker;
        this.datepicker.navigateTo(calendar.getToday());
    }
}