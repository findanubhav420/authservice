require('dotenv').config();

module.exports={
  'development': {
    'username': 'postgres',
    'password': null,
    'database': 'auth_db',
    'host': '127.0.0.1',
    'dialect': 'postgres',
    'port':5433
  },
  'test': {
    'username': 'postgres',
    'password': null,
    'database': 'auth_db',
    'host': '127.0.0.1',
    'dialect': 'postgres',
    'port':5433
  }
};
