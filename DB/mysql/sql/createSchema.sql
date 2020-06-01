#Create emart schema, create emart user and grant permission
DROP SCHEMA if exists emart;
CREATE SCHEMA emart DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
drop user if EXISTS 'emart'@'%' ;
flush privileges;
CREATE USER 'emart'@'%' identified BY 'gdsafd2#@rwf1';
grant all privileges on emart.* to 'emart'@'%';