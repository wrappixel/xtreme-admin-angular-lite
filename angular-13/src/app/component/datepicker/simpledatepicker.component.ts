import { Component } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-datepicker-simple',
    templateUrl: './simpledatepicker.component.html'
})
export class SimpleDatepickerBasic {

    model: NgbDateStruct = Object.create(null);
    date: { year: number, month: number, day: number } = { year: -1, month: 0, day: 0 };

    constructor(private calendar: NgbCalendar) {
    }

    selectToday() {
        this.model = this.calendar.getToday();
    }
}