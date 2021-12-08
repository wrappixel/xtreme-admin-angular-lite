import { Component, Injectable } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDateNativeAdapter, NgbDate } from '@ng-bootstrap/ng-bootstrap';

const my = new Date();

// This is for the range date picker
// tslint:disable-next-line:max-line-length
const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two
    ? false
    : one.year === two.year
      ? one.month === two.month
        ? one.day === two.day
          ? false
          : one.day < two.day
        : one.month < two.month
      : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two
    ? false
    : one.year === two.year
      ? one.month === two.month
        ? one.day === two.day
          ? false
          : one.day > two.day
        : one.month > two.month
      : one.year > two.year;
// End range date picker

@Component({
  selector: 'app-datepicker-basic',
  templateUrl: './datepicker.component.html',
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
  styles: [
    `
      .custom-day {
        text-align: center;
        padding: 0.185rem 0.25rem;
        display: inline-block;
        height: 2rem;
        width: 2rem;
      }
      .custom-day.focused {
        background-color: #e6e6e6;
      }
      .custom-day.range,
      .custom-day:hover {
        background-color: #0275d8;
        color: white;
      }
      .faded {
        opacity: 0.5;
      }
      .weekend {
        background-color: #242a33;
        border-radius: 1rem;
        color: white;
      }
      .hidden {
        display: none;
      }
    `
  ]
})
export class NgbdDatepickerBasicComponent {
  model: NgbDateStruct;
  model4: NgbDateStruct;

  model2;
  date: { year: number; month: number };

  // Custom date adapter
  model1: Date;
  model11: Date;

  // footer
  model5: NgbDateStruct;
  today5 = this.calendar5.getToday();

  get today() {
    return new Date();
  }

  // This is for multiple month
  displayMonths = 2;
  navigation = 'select';
  showWeekNumbers = false;

  // This is for the disable datepicker
  model3: NgbDateStruct = { year: my.getFullYear(), month: my.getMonth() + 1, day: my.getDate() };
  disabled = true;

  // This is for the range date picker
  hoveredDate: NgbDateStruct;

  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;

  selectToday() {
    this.model = { year: my.getFullYear(), month: my.getMonth() + 1, day: my.getDate() };
  }

  constructor(calendar: NgbCalendar, private calendar1: NgbCalendar, private calendar5: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onDateChange(date: NgbDateStruct) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);
  isDisabled = (date: NgbDate, current: { month: number }) => date.month !== current.month;
  isWeekend = (date: NgbDate) => this.calendar1.getWeekday(date) >= 6;
}
