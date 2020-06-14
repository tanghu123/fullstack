#User Table, role: admin=0, buyer=1,seller =2   status: 1=active 0=locked
CREATE TABLE `emart`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone_number` VARCHAR(45) NOT NULL,
  `create_date` DATETIME NULL,
  `company_name` VARCHAR(45) NULL,
  `GSTIN` VARCHAR(45) NULL,
  `company_brief` VARCHAR(100) NULL,
  `postal_address` VARCHAR(45) NULL,
  `website` VARCHAR(45) NULL,
  `role` INT NOT NULL,
  `status` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
COMMENT = 'User table to store user information';

#Create table category
CREATE TABLE `emart`.`category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brief` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `emart`.`subcategory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brief` varchar(255) DEFAULT NULL,
  `gst` decimal(19,2) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (category_id) REFERENCES `emart`.category (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;