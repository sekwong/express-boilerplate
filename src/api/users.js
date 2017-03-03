import resource from 'resource-router-middleware';
import User from '../models/users';

export default ({ config, db }) => resource({


	/** GET / - List all entities */
	index({ params }, res) {
        User.find({}).then(function(users) {
            res.json(users);
        })
	},

});