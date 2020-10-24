CREATE DATABASE if not exists master;
USE master;
CREATE USER if not exists 'dwhistle' IDENTIFIED BY 'dwhistle';
GRANT ALL ON *.* TO 'dwhistle';
FLUSH PRIVILEGES;