const db = require('../configs/db')

const allGroup= async (req, res) => {
    db('group')
    .select('*')
    .then((resp) => {
        if(resp.length){
            res.status(200).send(resp)
        } else{
            res.send('TIDAK ADA DATA GROUP')
        }
    })
    .catch(e => res.status(400).send(e))
}


const addGroup= async (req, res) => {
    const {nama, keterangan} = req.body
    db('group')
    .insert({
        nama: nama,
        keterangan: keterangan
    })
    .then(resp => res.status(201).send(resp))
    .catch(e => res.status(400).send(e.code))
}

const delGroup= async (req, res) => {
    const id = req.params.id
    db('group')
    .where('id', id)
    .del()
    .then(resp => res.send(resp.toString()))
    .catch(e => res.status(400).send(e))
}

const editGroup= async (req, res) => {
    const id = req.params.id
    const {nama, keterangan} = req.body
    db('group')
    .where('id', id)
    .update({
        nama: nama,
        keterangan: keterangan
    })
    .then(resp => res.status(201).send(resp.toString()))
    .catch(e => res.status(400).send(e.code))
}

const allGroupAccess= async (req, res) => {
    const groupId = req.params.id
    db('group_access')
    .select('*')
    .where('group_id', groupId)
    .then((resp) => {
        if(resp.length){
            res.status(200).send(resp)
        } else{
            res.send('TIDAK ADA DATA GROUP ACCESS')
        }
    })
    .catch(e => res.status(400).send(e))
}


const addGroupAccess= async (req, res) => {
    const {groupId, subModuleId} = req.body
    db('group')
    .insert({
        sub_module_id: groupId,
        group_id: subModuleId
    })
    .then(resp => res.status(201).send(resp))
    .catch(e => res.status(400).send(e.code))
}

const delGroupAccess= async (req, res) => {
    const id = req.params.id
    db('group_access')
    .where('id', id)
    .del()
    .then(resp => res.send(resp.toString()))
    .catch(e => res.status(400).send(e))
}

module.exports= {
    allGroup,
    addGroup,
    delGroup,
    editGroup,
    allGroupAccess,
    addGroupAccess,
    delGroupAccess
}