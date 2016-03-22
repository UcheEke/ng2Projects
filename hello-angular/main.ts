// Imports
import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

// Component configuration object
var config: any = {
    selector: 'hello', 
    templateUrl: 'tpls/hello.html'
};

// Decorate the class HelloAngular (i.e. the Component) with the @Component metatag
@Component(config) class HelloAngular {
    name : string;
    mySelector: string;
    constructor() {
        this.name = 'Angular 2!!';
        this.mySelector = "<hello>";
    }
}

// Start your component, with zero dependencies injected (hence the '[]' empty array)!
bootstrap(HelloAngular, []);
