import { Component } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDateNativeAdapter, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

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
  styles: [`
  .form-group.hidden {
    width: 0;
    margin: 0;
    border: none;
    padding: 0;
  }
  .custom-day {
    text-align: center;
    padding: 0.185rem 0.25rem;
    display: inline-block;
    height: 2rem;
    width: 2rem;
  }
  .custom-day.focused {
    background-color: #4fc3f7;
  }
  .custom-day.range, .custom-day:hover {
    background-color: #4fc3f7;
    color: white;
  }
  .custom-day:hover, .custom-day.focused {
    background-color: #4fc3f7;
  }
  .weekend {
    background-color: #4fc3f7;
    border-radius: 1rem;
    color: white;
    line-height:26px;
  }
  .custom-day.faded {
    background-color: rgb(225 240 255);
    color: #4fc3f7;
  }
`]
})
export class NgbdDatepickerBasicComponent {
  model: NgbDateStruct = Object.create(null);
  model4: NgbDateStruct = Object.create(null);

  model2 = Object.create(null);
  date: { year: number; month: number } = { year: -1, month: -1 };

  // Custom date adapter
  model1: Date = Object.create(null);
  model11: Date = Object.create(null);

  // footer
  model5: NgbDateStruct = Object.create(null);
  today5 = this.calendar5.getToday();

  get today() {
    return new Date();
  }

  // This is for multiple month
  displayMonths = 2;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';

  // This is for the disable datepicker
  model3: NgbDateStruct = { year: my.getFullYear(), month: my.getMonth() + 1, day: my.getDate() };
  disabled = true;

  // This is for the range date picker
  // hoveredDate: NgbDateStruct = Object.create(null);

  // fromDate: NgbDateStruct = Object.create(null);
  // toDate: NgbDate | null = null;

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  constructor(private calendar: NgbCalendar, private calendar1: NgbCalendar, private calendar5: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

  }
  isDisabled = (date: NgbDate, current: { month: number, year: number }) => date.month !== current.month;
  isWeekend = (date: NgbDate) => this.calendar.getWeekday(date) >= 6;
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }
}
