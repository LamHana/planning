import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropDown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  //   @HostListener('click') toggleDropdown() {
  //     this.isOpen = !this.isOpen;
  //   }

  constructor(private elRef: ElementRef) {}

  @HostListener('document: click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
}
