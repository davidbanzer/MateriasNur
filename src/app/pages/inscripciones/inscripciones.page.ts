import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InscripcionBLL } from '../../dal/bll/InscripcionBLL';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.page.html',
  styleUrls: ['./inscripciones.page.scss'],
})
export class InscripcionesPage implements OnInit {
  inscripcionBLL: InscripcionBLL = new InscripcionBLL();
  listaInscripciones: any = [];
  constructor(private dbService: DatabaseService, private navCtrl: NavController) {
    this.cargarInscripciones();
  }

  ngOnInit() {
  }
  cargarInscripciones(){
    this.listaInscripciones = [];
    this.inscripcionBLL.selectAll(this.dbService)
      .then((res) => {
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            const row = res.rows.item(i);
            this.listaInscripciones.push(row);
          }
        }
      });
      console.log(this.listaInscripciones);
  }
  eliminarInscripcion(id: string){
    this.inscripcionBLL.delete(this.dbService,id);
    this.cargarInscripciones();
  }
}
