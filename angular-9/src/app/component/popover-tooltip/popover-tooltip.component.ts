import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-ngbd-popover-tooltip',
	templateUrl: './popover-tooltip.component.html',
	encapsulation: ViewEncapsulation.None,
	styles: [
		`
			.card {
				overflow: hidden;
			}
			.my-custom-class {
				font-size: 125%;
			}
			.my-custom-class.tooltip > .tooltip-inner {
				background-color: darkgreen;
			}
			.my-custom-class.tooltip .arrow::before {
				border-top-color: darkgreen;
			}
		`
	]
})
export class NgbdPopTooltipComponent {
	greeting = {};

	name = 'World';
	lastShown: Date;
	lastHidden: Date;
	@ViewChild('p', { static: true }) public popover;

	public changeGreeting(greeting: any): void {
		const isOpen = this.popover.isOpen();
		this.popover.close();
		if (greeting !== this.greeting || !isOpen) {
			this.greeting = greeting;
			this.popover.open(greeting);
		}
	}

	toggleWithGreeting(tooltip, greeting: string) {
		if (tooltip.isOpen()) {
			tooltip.close();
		} else {
			tooltip.open({ greeting });
		}
	}

	recordShown() {
		this.lastShown = new Date();
	}

	recordHidden() {
		this.lastHidden = new Date();
	}
}
