CREATE DATABASE assignment;
USE assignment;

CREATE TABLE `user`(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    `password` VARCHAR(255) NOT NULL
);

-- INSERT INTO `user`(email, `password`)
-- VALUES
-- ("123@gmail.com", "123");