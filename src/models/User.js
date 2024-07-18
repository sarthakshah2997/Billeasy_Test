const knex = require('../knexfile');

class User {
    static async fetchAll({role, active, page=1, limit=10, sort= 'created_at'}) {
        let query = knex('users')
            .select('users.id', 'users.name', 'users.email', 'roles.name as role', 'user_activities.is_active', 'users.created_at')
            .leftJoin('roles', 'user.role_id', 'roles.id')
            .leftJoin('user_activites', 'users.id', 'user_activities.user_id')
            .limit(limit)
            .offset((page-1) * limit);
        if(role) {
            query = query.where('roles.name', role);
        }
        if(active !== undefined) {
            query = query.where('user_activities.is_active', active === true);
        }
        if(sort === 'name') {
            query= query.orderBy('users.name');
        } else {
            query= query.orderBy('users.created_at');
        }

        return query;
    }
}

module.exports = User;