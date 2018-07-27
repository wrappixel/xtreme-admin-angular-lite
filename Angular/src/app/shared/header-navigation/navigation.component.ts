import { Component, EventEmitter, Output } from '@angular/core';
declare var $: any;

@Component({
  selector: 'ap-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {

    @Output() toggleSidebar = new EventEmitter<void>();

    public showSearch:boolean = false;
    
    constructor() {}
}
