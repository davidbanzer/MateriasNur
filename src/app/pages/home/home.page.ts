import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import { MateriaBLL } from '../../dal/bll/MateriaBLL';
import { InscripcionBLL } from '../../dal/bll/InscripcionBLL';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  materiaBLL: MateriaBLL = new MateriaBLL();
  inscripcionBLL: InscripcionBLL = new InscripcionBLL();
  ruta = '';
  // eslint-disable-next-line max-len
  constructor(public router: Router, private dbService: DatabaseService, private ar: ActivatedRoute) {
    this.verificarInscritas();
    setTimeout(() =>{
      this.router.navigateByUrl(this.ruta,{replaceUrl:true});
    }, 2000);
  }
  verificarInscritas(){
    this.inscripcionBLL.selectAll(this.dbService).then((res) => {
      if(res.rows.length > 0){
        this.ruta = 'inscripciones';
      } else {
        this.ruta = 'materias';
      }
    });
  }
}
