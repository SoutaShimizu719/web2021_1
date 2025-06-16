const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sql = `
select game.id, game.name, company.name as name2
from game inner join company
on game.company_id=company.id;
`

db.serialize( () => {
db.all( sql, (error, row) => {
if(error) {
console.log('Error: ', error );
return;
}
for( let data of row ) {
console.log( data.id + ' : ' + data.name + ':' + data.name2 );
}
});
});