/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc component
 *  @module
 *  @name <%= classify(name) %>Component
 *  @description
 *
 *  @file <%= dasherize(name) %>.component.ts
 *
**/

import { Component, OnInit<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';

@Component({
  selector: '<%= selector %>',<% if(inlineTemplate) { %>
  template: `
    <p>
      <%= dasherize(name) %> works!
    </p>
  `,<% } else { %>
  templateUrl: './<%= dasherize(name) %>.component.html',<% } if(inlineStyle) { %>
  styles: []<% } else { %>
  styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %><% if(!!viewEncapsulation) { %>,
  encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection !== 'Default') { %>,
  changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>
})
export class <%= classify(name) %>Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
