-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema project
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema project
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `project` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `project` ;

-- -----------------------------------------------------
-- Table `project`.`articles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project`.`articles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(1000) NOT NULL,
  `content` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `project`.`pronounciation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project`.`pronounciation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 37
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `project`.`synonyms`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project`.`synonyms` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 40
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `project`.`tenses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project`.`tenses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tense_name` VARCHAR(1000) NOT NULL,
  `exemple_tense` VARCHAR(1000) NOT NULL COMMENT '\\nINSERT INTO tenses (tense_name, example_sentence) VALUES (\'Simple Present\', \'She plays the piano every day\');',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 16
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `project`.`transitional`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `project`.`transitional` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(1000) NOT NULL,
  `word` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
