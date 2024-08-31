const users = require('../utils/users')

function login(req, res) {
    const { email, password } = req.query;
    let valido;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email && users[i].password === password) {
            valido = true
        }
    }
    if (valido) {
        res.status(200).json({ acces: true })
    } else {
        res.status(200).json({ acces: false })
    }

    // users.find(v =>{v.email === email && v.password === password})

    // if(valido){
    //     res.status(200).json({acces: true})
    // }else{
    //     res.status(200).json({acces: false})
    // }

}


module.exports = login

// let emailValido;
// let passwordValido;

// for(let i = 0; i < array.length; i++){
//   if(array[i].email == email &&  array[i].password === password){
//         emailValido = email
//         passwordValido = password
//   }
// }