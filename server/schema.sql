CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id int(5) auto_increment,
  roomname varchar(20),
  UNIQUE KEY roomname(roomname),
  primary key (id)
);

CREATE TABLE users (
  id int(5) auto_increment,
  username varchar(20),
  UNIQUE KEY username(username),
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

