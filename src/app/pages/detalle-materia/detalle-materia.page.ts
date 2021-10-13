import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MateriaBLL } from '../../dal/bll/MateriaBLL';
import { DatabaseService } from '../../services/database.service';
import { InscripcionBLL } from '../../dal/bll/InscripcionBLL';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-materia',
  templateUrl: './detalle-materia.page.html',
  styleUrls: ['./detalle-materia.page.scss'],
})
export class DetalleMateriaPage implements OnInit {
  materiaId: string;
  materia: any;
  materiaBLL: MateriaBLL = new MateriaBLL();
  inscripcionBLL: InscripcionBLL = new InscripcionBLL();
  // eslint-disable-next-line max-len
  constructor(private ar: ActivatedRoute,private dbService: DatabaseService, private navCtrl: NavController, public toastController: ToastController) {
  }

  ngOnInit() {
    this.materiaId = this.ar.snapshot.paramMap.get('id');
    this.obtenerDetalleMateria(this.materiaId);
  }
  obtenerDetalleMateria(id: string){
    this.materia = {};
    this.materiaBLL.selectById(this.dbService, id).then((res) => {
      this.materia = res.rows.item(0);
      console.log(this.materia);
      console.log(id);
    });
  }
  async inscribirMateria(id: string){
    await this.inscripcionBLL.insert(this.dbService,id).then(() => {
      this.presentToast('Materia inscrita correctamente');
    });
    this.navCtrl.back();
  }
  async presentToast(message){
    const toast = await this.toastController.create({
      message ,
      duration : 2000
    });
    toast.present();
  }
}
