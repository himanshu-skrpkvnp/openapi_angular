import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokesService } from './jokes.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'openapi_angular';
  joke : String = "" ;
  constructor( private jokeService : JokesService ){

  }
  fetchJoke(): void {
    this.jokeService.getJoke().subscribe((data: any) => {
      this.joke = data.joke;
    });
  }
}
