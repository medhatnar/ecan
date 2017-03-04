-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema events_manager
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema events_manager
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `events_manager` DEFAULT CHARACTER SET utf8 ;
USE `events_manager` ;

-- -----------------------------------------------------
-- Table `events_manager`.`permissions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `events_manager`.`permissions` (
  `id` INT NOT NULL,
  `create` VARCHAR(45) NULL,
  `read` VARCHAR(45) NULL,
  `update` VARCHAR(45) NULL,
  `delete` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `events_manager`.`groups`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `events_manager`.`groups` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `permission_id`
    FOREIGN KEY (`id`)
    REFERENCES `events_manager`.`permissions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `events_manager`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `events_manager`.`users` (
  `id` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `groups_id`
    FOREIGN KEY (`id`)
    REFERENCES `events_manager`.`groups` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `permissions_id`
    FOREIGN KEY (`id`)
    REFERENCES `events_manager`.`permissions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
