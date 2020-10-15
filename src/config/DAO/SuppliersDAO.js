class SuppliersDAO{
    constructor(db) {
        this._db = db;
      }

    getAll(){
        return new Promise((resolve, reject) =>{
        this._db.all('SELECT * FROM suppliers',(err,rows)=>{
            if (err){
                reject(`not able to show suppliers${err}`);
            };
                resolve(rows);
        });
            
        });
    };

    getSingle(id){
        return new Promise((resolve, reject) =>{
        this._db.all('SELECT * FROM suppliers where id=?',[id],(err,rows)=>{
            if (err){
                reject(`not able to show suppliers${err}`);
            };
                resolve(rows);
        });
            
        });
    };

    post(req){
        return new Promise((resolve, reject) =>{
        this._db.run('INSERT INTO suppliers (trading_name, phone, company_name, cnpj, address) VALUES(?,?,?,?,?)',[req.body.trading_name, req.body.phone, req.body.company_name, req.body.cnpj, req.body.address],(err)=>{
            if (err){
                reject(`not able to insert supplier${err}`);
            }
            resolve(`Success insert `)
        });
            
        });
    };
    delete(id){
        return new Promise((resolve, reject) =>{
        this._db.run('DELETE FROM suppliers where id=?',[id],(err)=>{
            if (err){
                reject(`not able to delete supplier${err}`);
            }
            resolve(`Success delete `)

        });
            
        });
    };

    put(req){
        return new Promise((resolve, reject) =>{
        this._db.run('UPDATE suppliers SET trading_name = ?, phone = ?, company_name = ?, cnpj = ?, address = ? WHERE id=?',[req.body.trading_name, req.body.phone, req.body.company_name, req.body.cnpj, req.body.address, req.params.id],(err)=>{
            if (err){
                reject(`not able to update supplier${err}`);
            }
            resolve(`Success replace `)

        });
            
        });
    };
};


module.exports = SuppliersDAO;