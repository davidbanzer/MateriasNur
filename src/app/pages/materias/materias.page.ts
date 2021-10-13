import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MateriaBLL } from '../../dal/bll/MateriaBLL';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
})
export class MateriasPage implements OnInit {
  listaMaterias: any = [];
  materiaBLL: MateriaBLL = new MateriaBLL();
  constructor(private dbService: DatabaseService, private navCtrl: NavController) {
    //this.insertarMaterias();
    this.cargarMaterias();
  }

  ngOnInit() {
  }
  cargarMaterias() {
    this.listaMaterias = [];
    this.materiaBLL.selectAll(this.dbService)
      .then((res) => {
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            const row = res.rows.item(i);
            //TODO: Convertir de row a persona
            this.listaMaterias.push(row);
          }
        }
      });
  }
  async insertarMaterias(){
    await this.materiaBLL.insert(this.dbService,'Programación de Aplicaciones Móviles ll','Jose Miguel');
    await this.materiaBLL.insert(this.dbService,'Ingeniería Web lll','Jose Miguel');
    await this.materiaBLL.insert(this.dbService,'Seguridad en Sistemas','Mario Balboa');
    await this.materiaBLL.insert(this.dbService,'Planificación de Proyectos','Hugo Molina');
    await this.materiaBLL.insert(this.dbService,'Taller de Actualización IV','Mario Marañón');
    await this.materiaBLL.insert(this.dbService,'Auditoria de Sistemas','Mario Balboa');
    await this.materiaBLL.insert(this.dbService,'Idioma Originario','Perico de los Palotes');
    await this.materiaBLL.insert(this.dbService,'Gamificación y programación funcional','Eduardo Flores');
    this.cargarMaterias();
  }
  irDetalle(id: string){
    this.navCtrl.navigateForward(['/detalle-materia/'+id]);
  }

}
