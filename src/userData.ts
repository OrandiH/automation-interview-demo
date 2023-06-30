// Data file for form testing

import chance = require('chance')

const Chance = chance.Chance();

const userData = {
    firstname: Chance.first(),
    lastname: Chance.last(),
    email: Chance.email(),
    countryCode:'1876',
    phoneNumber: Chance.phone(),
    address1: Chance.address(),
    address2: Chance.address(),
    state: Chance.state(),
    postalCode: Chance.postal(),
    country: Chance.country(),
    dob: '01/10/1993',
    gender: Chance.integer({min: 0, max: 2})
}

export default userData;
