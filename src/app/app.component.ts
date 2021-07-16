import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-udemy';
  loadedFeature = 'recipe';
  
  onNavigate(event:string) {
    this.loadedFeature = event;
  }
}
