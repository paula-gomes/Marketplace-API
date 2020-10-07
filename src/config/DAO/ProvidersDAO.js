class ProvidersDAO{
    constructor(db) {
        this._db = db;
      }

    getProviders(){
        return new Promise((resolve, reject) =>{
        this._db.all('SELECT * FROM suppliers',(err,rows)=>{
            if (err){
                reject(`not able to show providers${err}`);
            };
                resolve(rows);
        });
            
        });
    };

    getSingleProvider(id){
        return new Promise((resolve, reject) =>{
        this._db.all('SELECT * FROM suppliers where id=?',[id],(err,rows)=>{
            if (err){
                reject(`not able to show providers${err}`);
            };
                resolve(rows);
        });
            
        });
    };

    postProvider(req){
        return new Promise((resolve, reject) =>{
        this._db.run('INSERT INTO suppliers (name, phone) VALUES(?,?)',[req.body.name, req.body.phone],(err)=>{
            if (err){
                reject(`not able to insert provider${err}`);
            }
            resolve(`Success insert `)
        });
            
        });
    };
    deleteProvider(id){
        return new Promise((resolve, reject) =>{
        this._db.run('DELETE FROM suppliers where id=?',[id],(err)=>{
            if (err){
                reject(`not able to delete provider${err}`);
            }
            resolve(`Success delete `)

        });
            
        });
    };

    replaceProvider(id){
        return new Promise((resolve, reject) =>{
        this._db.run('UPDATE suppliers SET name =?, phone =? WHERE id=?',[req.body.name, req.body.phone, req.body.id],(err)=>{
            if (err){
                reject(`not able to update provider${err}`);
            }
            resolve(`Success replace `)

        });
            
        });
    };
};


module.exports = ProvidersDAO.js;