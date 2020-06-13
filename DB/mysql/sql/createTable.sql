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
DEFAULT CHARACTER SET = utf8mb4
COMMENT = 'User table to store user information';