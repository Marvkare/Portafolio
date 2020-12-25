let rememberCtrl = {};

rememberCtrl.renderRememberThis = (req, res)=>{
    
    req.getConnection((err,connection)=>{
        const query = connection.query('SELECT * FROM Words', (err, Words)=>{
            if(err){
                res.json(err);
            }   
            //console.log(Words)         
            res.render('rememberThis', {data: Words});
        })
    })
    
}

rememberCtrl.addWords = (req, res)=>{
    const data = req.body
    
    
    if (data.wordOne == "" || data.wordTwo == ""){
        console.log("Ingrese datos por favor")
        res.redirect('/rememberThis')
    }else{
        req.getConnection((err, connection)=>{
            const query = connection.query('INSERT INTO Words set ?', data, (err,Words)=>{
                res.redirect('/rememberThis')
            })
        })
    }
}

rememberCtrl.deleteWords = (req, res)=>{
    //console.log(req.params)
    const {wordOne} = req.params 
    //console.log(">"+wordOne)
    req.getConnection((err, conn)=>{
        const query = conn.query('DELETE FROM  Words WHERE wordOne = ?', wordOne, (err, row)=>{
            res.redirect('/rememberThis')
            console.log('se elimino')
        })
    })
}

rememberCtrl.editWords = (req, res)=>{
    const {wordOne}= req.params;
    //console.log([wordOne])
    req.getConnection((err, conn)=>{
        const query = conn.query('SELECT * FROM Words WHERE wordOne =?', wordOne, (err, rows)=>{
            console.log(rows)
            res.render('editWords', {data:rows})
            
            
        })
    })    
}

rememberCtrl.updateWords = (req, res)=>{
    const words = req.body;
    const{id}= req.params
    console.log(words)
    req.getConnection((err, conn )=>{
        const query = conn.query('UPDATE Words set ? WHERE id = ?',  [words,id] , (err, rows)=>{
            
            res.redirect('/rememberThis')
        })
    })
} 
 
module.exports = rememberCtrl