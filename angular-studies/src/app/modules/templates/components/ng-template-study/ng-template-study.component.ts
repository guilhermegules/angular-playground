import { AfterViewInit, Component, ContentChild, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ng-template-study',
  templateUrl: './ng-template-study.component.html',
  styleUrls: ['./ng-template-study.component.scss']
})
export class NgTemplateStudyComponent implements AfterViewInit {
  names = ['Guilherme', 'Pedro', 'João'];
  selected = false;

  // we can use the ViewChild query to inject the namesTemplate into our component as an instance of the class TemplateRef.
  @ViewChild('namesTemplate', { read: TemplateRef })
  namesTemplate: TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.viewContainerRef.createEmbeddedView(this.namesTemplate);
    })
  }
}
