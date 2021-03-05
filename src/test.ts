// This file is required by karma.conf.js and loads recursively all the .spec and framework files
  
//import 'zone.js/dist/long-stack-trace-zone';
//import 'zone.js/dist/proxy.js';
//import 'zone.js/dist/sync-test';
//import 'zone.js/dist/jasmine-patch';
//import 'zone.js/dist/async-test';
//import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';


// Unfortunately there's no typing for the `_karma_` variable. Just declare it as any.
declare var _karma_: any;
declare var require: any;

// Prevent Karma from running prematurely.
_karma_.loaded = function () {};
