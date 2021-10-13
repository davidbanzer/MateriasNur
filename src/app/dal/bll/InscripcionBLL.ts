import { DatabaseService } from 'src/app/services/database.service';

export class InscripcionBLL {
    public async selectAll(dbService: DatabaseService) {
        if (!dbService.database) {
            await dbService.createDb();
        }
        // eslint-disable-next-line max-len
        const sqlText = 'SELECT * FROM inscripciones LEFT JOIN materias ON inscripciones.materia_id = materias.materia_id WHERE inscripciones.inscripcion_id IS NOT NULL';
        return await dbService.database.executeSql(sqlText, []);
    }
    public async insert(dbService: DatabaseService, id: string){
        if(!dbService.database){
            await dbService.createDb();
        }
        const sqlText = 'INSERT INTO inscripciones (materia_id) VALUES (?)';
        try {
            return await dbService.database.executeSql(sqlText, [id]);

        } catch (e) {
            console.log('error al insertar una inscripción', e);
        }
    }
    public async delete(dbService: DatabaseService, id: string){
        if(!dbService.database){
            await dbService.createDb();
        }
        const sqlText = 'DELETE FROM inscripciones WHERE inscripcion_id = (?)';
        try {
            return await dbService.database.executeSql(sqlText, [id]);
        } catch (e) {
            console.log('error al eliminar una inscripción', e);
        }
    }
}
