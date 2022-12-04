const { userRoles } = require('../../configs/enums');
const hashPassword = require('../../helpers/hashGenerator');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('users', (table) => {
            table.increments('id', { primaryKey: true });
            table.string('name', 255).notNullable();
            table.string('login', 50).notNullable().unique();
            table.string('password', 100).notNullable();
            table.smallint('role').defaultTo(userRoles.member);
            table.timestamps(true, true, false);
        })
        .createTable('categories', (table) => {
            table.increments('id', { primaryKey: true });
            table.string('name', 255).notNullable().unique();
            table.string('description', 1000);
            table.timestamps(true, true, false);
        })
        .createTable('articles', (table) => {
            table.increments('id', { primaryKey: true });
            table.string('name', 255).notNullable();
            table.text('content').notNullable();
            table.integer('user_id').notNullable();
            table.integer('category_id').notNullable();
            table.timestamps(true, true, false);

            table
                .foreign('user_id')
                .references('id')
                .inTable('users')
                .withKeyName('fk_articles_user_id');
            
            table
                .foreign('category_id')
                .references('id')
                .inTable('categories')
                .withKeyName('fk_articles_category_id');
        })
        .then(() => {
            return knex('users')
                .insert([
                    {
                        name: 'Hrand Arakelian',
                        login: 'admin1',
                        password: hashPassword('123456'),
                        role: userRoles.admin,
                    },
                    {
                        name: 'Tatevik Hovsepian',
                        login: 'moderator1',
                        password: hashPassword('123456'),
                        role: userRoles.moderator,
                    },
                    {
                        name: 'Vahram Poghosian',
                        login: 'member1',
                        password: hashPassword('123456'),
                        role: userRoles.member,
                    },
                ]);
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('articles')
        .dropTableIfExists('categories')
        .dropTableIfExists('users');
};
