import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public database: SQLiteObject;
  constructor(private sqlite: SQLite, private platform: Platform) {
    this.platform.ready().then(() => {
      this.createDb();
    });
  }

  async createDb() {
    await this.sqlite.create({
      name: 'materias.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.database = db;
      this.createTableMaterias();
      this.createTableInscripciones();
    }, (error) => {
      console.log('Error al crear BD', error);
    });
  }

  async createTableMaterias() {
    try {
      // eslint-disable-next-line max-len
      await this.database.executeSql('CREATE TABLE materias(materia_id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, docente TEXT)');
      // eslint-disable-next-line max-len
    } catch (error) {
      console.log('Error al crear materias', error);
    }
  }
  async createTableInscripciones(){
    try {
      // eslint-disable-next-line max-len
      await this.database.executeSql('CREATE TABLE inscripciones(inscripcion_id INTEGER PRIMARY KEY AUTOINCREMENT, materia_id INTEGER, FOREIGN KEY(materia_id) REFERENCES materias(materia_id))');
    } catch (error) {
      console.log('Error al crear inscripciones',error);
    }
  }
}


