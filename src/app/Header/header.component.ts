import { Component, EventEmitter, Output } from '@angular/core';
import {  } from 'protractor';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  
  onSelect(feature: string){
    this.featureSelected.emit(
      feature
    );
  }
}
