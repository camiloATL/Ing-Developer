import  sql from "mssql"

async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('Server=localhost\\SQLTEST,1433;Database=titandbtest;User Id=sa;Password=Titan123*;Encrypt=true')
        const result = await sql.query`select * from mytable where id = ${value}`
        console.dir(result)
    } catch (err) {
        // ... error checks
    }
}