/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc module
 *  @module
 *  @name <%= classify(name) %>Module
 *  @description
 *
 *  @file <%= dasherize(name) %>.module.ts
 *
**/

import { NgModule } from '@angular/core';<% if (commonModule) { %>
import { CommonModule } from '@angular/common';<% } %><% if (routing) { %>

import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';<% } %>

@NgModule({
  imports: [<% if (commonModule) { %>
    CommonModule<%= routing ? ',' : '' %><% } %><% if (routing) { %>
    <%= classify(name) %>RoutingModule<% } %>
  ],
  declarations: []
})
export class <%= classify(name) %>Module { }
