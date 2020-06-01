#Create User Table   role = 0 ->admin  role=1->seller  role=2->buyer
DROP TABLE if exists `emart`.`user`;
CREATE TABLE `emart`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NULL,
  `phone_number` VARCHAR(45) NULL,
  `create_date` DATE NULL,
  `company_name` VARCHAR(45) NULL,
  `GSTIN` VARCHAR(45) NULL,
  `company_brief` VARCHAR(100) NULL,
  `postal_address` VARCHAR(45) NULL,
  `website` VARCHAR(45) NULL,
  `role` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COMMENT = 'User table to store user information';