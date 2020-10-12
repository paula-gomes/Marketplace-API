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
        this._db.run('INSERT INTO suppliers (trading_name, phone, company_name, cnpj, address) VALUES(?,?,?,?,?)',[req.body.trading_name, req.body.phone, req.body.company_name, req.body.cnpj, req.body.address],(err)=>{
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
        this._db.run('UPDATE suppliers SET trading_name = ?, phone = ?, company_name = ?, cnpj = ?, address = ? WHERE id=?',[req.body.trading_name, req.body.phone, req.body.company_name, req.body.cnpj, req.body.address, req.body.id],(err)=>{
            if (err){
                reject(`not able to update provider${err}`);
            }
            resolve(`Success replace `)

        });
            
        });
    };
};


module.exports = ProvidersDAO;