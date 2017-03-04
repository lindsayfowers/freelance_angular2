"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DocumentsComponent = (function () {
    function DocumentsComponent() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
            {
                title: "My First Doc",
                description: "asdfasdf",
                file_url: 'http://google.com',
                updated_at: '03/02/17',
                image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
            },
            {
                title: "My Second Doc",
                description: "asdfasdf",
                file_url: 'http://google.com',
                updated_at: '03/02/17',
                image_url: 'https://blogst.workana.com/blog/wp-content/uploads/2012/10/freelancer-sketch.png',
            },
            {
                title: "My Last Doc",
                description: "asdfasdf",
                file_url: 'http://google.com',
                updated_at: '03/02/17',
                image_url: 'https://www.ticketbooth.com.au/ticketing/wp-content/uploads/2016/02/photodune-7575550-human-resources-and-selfdevelopment-modern-business-resized-1.jpg',
            }
        ];
    }
    return DocumentsComponent;
}());
DocumentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'documents',
        templateUrl: 'documents.component.html',
        styleUrls: ['documents.component.css']
    })
], DocumentsComponent);
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map