const checkModules = function(subModulesNama) {
 return async function(req, res, next) {
    (req.session.userModules && req.session.userModules.includes(subModulesNama))
    ? next()
    : res.status(403).send('Akses Terlarang')
 }
}

const checkAccess = function(subModulesNama) {
    return async function(req, res, next) {
       (req.session.userId)
       ? next()
       : res.status(403).send('Akses Terlarang')
    }
   }

module.exports={
    checkModules,
    checkAccess
}