"use strict";

module.exports = {
    scripts: "./src/**/*.js",
    assets: ["./src/**/*",
           "./challenges/**/*"],
    dirs:  ["./src",
          "./src/data",
          "./challenges"],
    users: [{
        username: 'admin',
        password: 'admin_password',
        pages: ['scoresheet','teams','scores','ranking','settings','clock'],
        mhubPassword: 'admin_password'
    }, {
        username: 'ref',
        password: 'referee_password',
        pages: ['scoresheet'],
        mhubPassword: 'referee_password'
    }, {
        username: 'scorekeeper',
        password: 'scorekeeper_password',
        pages: ['scoresheet','scores','ranking'],
        mhubPassword: 'scorekeeper_password'
    }, {
        username: 'mc',
        password: 'mc_password',
        pages: ['teams','clock'],
        mhubPassword: 'mc_password'
    }]
};
