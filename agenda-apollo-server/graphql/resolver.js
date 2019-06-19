module.exports = {
    Query: {
        agenda: (parent, args, { db }, info) => db.Agenda.findAll(),
        agendum: (parent, { id }, { db }, info) => db.Agenda.findByPk(id),
    },
    Mutation: {
        createAgendum: (parent, { time, title, location, description }, { db }, info) => {
            return db.Agenda.create({ time, title, location, description })
        },
        updateAgendum: (parent, { id, time, title, location, description }, { db }, info) => {
            db.Agenda.update({ time, title, location, description }, {
                where: {
                    id: id
                }
            })
        },
        deleteAgendum: (parent, { id }, { db }, info) => {
           return db.Agenda.destroy({
                where: {
                    id: id
                }
            });
        }
    }
}