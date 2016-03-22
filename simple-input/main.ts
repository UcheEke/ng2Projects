// Imports
import {Component, Input} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

@Component({
    selector: 'example',
    templateUrl: 'tpls/example.html'
}) class Example {
    @Input() private id: string; // id: Input as the variable 'App.appId' in the <example> tag
    @Input() private sn: string; // Short name - provided as an input string directly into the <example> tag
    myOpenTag: string;
    myCloseTag: string;
    constructor() {
        this.myOpenTag = "<example>";
        this.myCloseTag = "</example>";
    }
}

@Component({
    selector: 'app',
    directives: [Example],
    templateUrl: 'tpls/app.html'
}) class App {
    name : string;
    appId: string;
    myOpenTag: string;
    myCloseTag: string;
    constructor() {
        this.name =  "Input example";
        this.appId = "Basic Input eXample App";
        this.myOpenTag = "<app>";
        this.myCloseTag = "</app>";
    }
}

// Start your component, with zero dependencies injected (hence the '[]' empty array)!
bootstrap(App, []);
