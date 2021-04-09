import * as sequelize from 'sequelize';
import {UserFactory} from "./user";
import {OrganizationFactory} from "./orginzation";
import {VolunteerFactory} from './volunteer'
const {
  DATABASE_URL: dbUrl
} = process.env
if (!dbUrl) {
  throw new Error('DATABASE_URL is not set')
}
export const dbConfig = new sequelize.Sequelize(dbUrl);
// THIS ONES ARE THE ONES YOU NEED TO USE ON YOUR CONTROLLERS
export const User = UserFactory(dbConfig)

// THIS ONES ARE THE ONES YOU NEED TO USE ON YOUR CONTROLLERS
export const Orgnization = OrganizationFactory(dbConfig)
export const Volunteer = VolunteerFactory(dbConfig)
Volunteer.belongsTo(User)
Volunteer.belongsTo(Orgnization)
// User.hasMany(Skills);