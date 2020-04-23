var orm = require ("../config/orm");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(name, cb) {
        orm.create("burgers", ["burher_name", "devoured"], [name, false], cb);

    },
    update: function(id, cb) {
        var condition = "id=" + id;
        orm.update("burger", {
            devoured: true, 
          },  condition, cb);
        }
    };
module.exports = burger;