//import config from "./database.js";
import sql from "mssql"

async function getUsers() {
    try {
        let pool = await sql.connect('Server=localhost,1433;Database=titandbtest;User Id=sa;Password=Titan123*;Encrypt=true')
        let usuarios = await pool.request().query("SELECT * FROM table_user")
        return usuarios.recordset
    } catch (error) {
        console.log(`El error es: ${error}`);
    }
}
export default getUsers
