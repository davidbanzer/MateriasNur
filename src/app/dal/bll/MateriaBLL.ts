import { DatabaseService } from '../../services/database.service';
export class MateriaBLL{
    public async selectAll(dbService: DatabaseService) {
        if (!dbService.database) {
            await dbService.createDb();
        }
        const sqlText = 'SELECT materia_id, nombre, docente FROM materias';
        return await dbService.database.executeSql(sqlText, []);
    }
    public async insert(dbService: DatabaseService, nombre: string, docente: string) {
        if (!dbService.database) {
            await dbService.createDb();
        }
        const sqlText = 'INSERT INTO materias(nombre, docente) VALUES (?,?)';
        try {
            return await dbService.database.executeSql(sqlText, [nombre, docente]);
        } catch (e) {
            console.log('error al insertar', e);
        }
    }
    public async delete(dbService: DatabaseService, id: number){
        if(!dbService.database){
            await dbService.createDb();
        }
        const sqlText = 'DELETE FROM materias WHERE materia_id = (?)';
        try {
            return await dbService.database.executeSql(sqlText,[id]);
        } catch (e) {
            console.log('error al eliminar',e);
        }
    }
    public async selectById(dbService: DatabaseService, id: string){
        if(!dbService.database){
            await dbService.createDb();
        }
        const sqlText = 'SELECT * FROM materias WHERE materia_id = (?)';
        try {
            return await dbService.database.executeSql(sqlText,[id]);
        } catch (e) {
            console.log('error al seleccionar por id',e);
        }
    }
}
