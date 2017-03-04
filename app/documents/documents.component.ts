import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  
  documents: Document[] = [
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
  ]
}