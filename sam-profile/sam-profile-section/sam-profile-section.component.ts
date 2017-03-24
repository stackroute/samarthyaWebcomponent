import { SamDynamicElementBase } from './../../sam-dynamic-section/sam-dynamic-element/sam-dynamic-element-base';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sam-profile-section',
  templateUrl: './sam-profile-section.component.html',
  styleUrls: ['./sam-profile-section.component.css'],
})
export class SamProfileSectionComponent implements OnInit {

  elements: any[];
  alignElement: string;
  @Input() section: SamDynamicElementBase<any>[] = [];
  @Input() sectionTitle: string;
  @Input() align: string;

  constructor() {
  }
  ngOnInit() {
    this.elements = this.section;
    this.alignElement = this.align;
  }
}
