import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  film;

  constructor(public router: Router,
    private route: ActivatedRoute,
    public navCtrl: NavController,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var filmString = params['film'];
      this.film = JSON.parse(filmString);
    });
  }

  back() {
		this.navCtrl.navigateBack('home');
  }

}
