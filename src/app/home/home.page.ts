import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title;

  films: any[] = [];

  

  constructor(private http: HTTP,
    public router: Router,) {
    //this.getData();
  }

  search() {
    this.films = [];
    this.http.get('http://www.omdbapi.com/?apikey=87464d13', {t:this.title}, {}).then((value) => {
      var filmsJSON = JSON.parse(value.data);
      if(filmsJSON.Response === 'True') {
        this.films.push(filmsJSON);
      }
    })
  }

  details(film) {
    this.router.navigate(['/details', {film: JSON.stringify(film)}])
  }

}
