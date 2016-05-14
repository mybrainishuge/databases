CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id int(5) auto_increment,
  name varchar(20),
  topic varchar(20),
  primary key (id)
);

CREATE TABLE users (
  id int(5) auto_increment,
  username varchar(20),
  firstName varchar(20),
  lastName varchar(20),
  location varchar(20),
  age int(3),
  gender varchar(6),
  primary key (id)
);

CREATE TABLE messages (
  id int(5) auto_increment,
  message varchar(180),
  user_id int(5),
  room_id int(5),

  foreign key (user_id) references users(id),
  foreign key (room_id) references rooms(id),
  primary key (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

