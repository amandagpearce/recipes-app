import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[dropdownDirective]'
})
export class DropDownDirective {
 @HostBinding('class.open') isOpen = false;
 //will work on bootstrap elements that respond to the class open ex: li.dropdown, .btn-group
 
 @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}

}