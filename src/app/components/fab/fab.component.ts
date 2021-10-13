import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
})
export class FabComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  irMaterias(){
    this.navCtrl.navigateForward(['/materias']);
  }
  irInscripciones(){
    this.navCtrl.navigateForward(['/inscripciones']);
  }
}
