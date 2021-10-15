//jwt
const jwt = require('jsonwebtoken');

const verificarAuth = (req, res, next) => {

    const token = req.get('token');
    jwt.verify(token, 'secret', (err, decoded) => {

        if (err) {
            return res.status(401).json({
                mensaje: 'Usuario no valido'
            })
        }
        req.user = decoded.data;
        next();

    })

}

const verificarAdmin = (req, res, next) => {

    const tipo_usuario = req.user.tipo_usuario;
    if (tipo_usuario === 'admin') {
        next();
    } else {
        return res.status(401).json({
            mensaje: 'Usuario no valido'
        })
    }
}
const verificarPoster = (req, res, next) => {

    const tipo_usuario = req.user.tipo_usuario;
    if (tipo_usuario === 'poster') {
        next();
    } else {
        return res.status(401).json({
            mensaje: 'Usuario no valido'
        })
    }
}



module.exports = { verificarAuth, verificarAdmin,verificarPoster };