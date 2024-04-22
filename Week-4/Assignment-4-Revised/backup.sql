-- MySQL dump 10.13  Distrib 8.0.35, for Win64 (x86_64)
--
-- Host: localhost    Database: assignment
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `assignment`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `assignment` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `assignment`;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `author` (`author`),
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`author`) REFERENCES `user` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'123@gmail.com','123test','hello'),(3,'123@gmail.com','Adventure','Exploring new territories, finding hidden treasures.'),(4,'test@gmail.com','Memories','Reminiscing about cherished moments from the past.'),(5,'1233@yahoo.com.tw','Dreams','Aspiring for greatness, reaching for the stars.'),(6,'test@gd','Reflection','Contemplating life\'s journey, pondering its meaning.'),(7,'asdfads@adg','Journey','Embarking on a quest, overcoming obstacles along the way.'),(8,'user1@example.com','Discovery','Uncovering mysteries, unlocking secrets of the universe.'),(9,'456@gmail.com','Hope','Embracing optimism, believing in a brighter tomorrow.'),(10,'test@gmail.com','Adventure','Exploring new territories, finding hidden treasures.'),(11,'123@gmail.com','Memories','Reminiscing about cherished moments from the past.'),(12,'1233@yahoo.com.tw','Dreams','Aspiring for greatness, reaching for the stars.'),(13,'test@gd','Reflection','Contemplating life\'s journey, pondering its meaning.'),(14,'asdfads@adg','Journey','Embarking on a quest, overcoming obstacles along the way.'),(15,'user1@example.com','Discovery','Uncovering mysteries, unlocking secrets of the universe.'),(16,'456@gmail.com','Hope','Embracing optimism, believing in a brighter tomorrow.'),(17,'123@gmail.com','Adventure','Exploring new territories, finding hidden treasures.'),(18,'test@gmail.com','Memories','Reminiscing about cherished moments from the past.'),(19,'1233@yahoo.com.tw','Dreams','Aspiring for greatness, reaching for the stars.'),(20,'test@gd','Reflection','Contemplating life\'s journey, pondering its meaning.'),(21,'asdfads@adg','Journey','Embarking on a quest, overcoming obstacles along the way.'),(22,'user1@example.com','Discovery','Uncovering mysteries, unlocking secrets of the universe.'),(23,'456@gmail.com','Hope','Embracing optimism, believing in a brighter tomorrow.'),(24,'123@gmail.com','Adventure','Exploring new territories, finding hidden treasures.'),(25,'test@gmail.com','Memories','Reminiscing about cherished moments from the past.'),(26,'1233@yahoo.com.tw','Dreams','Aspiring for greatness, reaching for the stars.'),(27,'test@gd','Reflection','Contemplating life\'s journey, pondering its meaning.'),(28,'asdfads@adg','Journey','Embarking on a quest, overcoming obstacles along the way.'),(29,'user1@example.com','Discovery','Uncovering mysteries, unlocking secrets of the universe.'),(30,'456@gmail.com','Hope','Embracing optimism, believing in a brighter tomorrow.'),(31,'123@gmail.com','Adventure','Exploring new territories, finding hidden treasures.'),(32,'test@gmail.com','Memories','Reminiscing about cherished moments from the past.'),(33,'1233@yahoo.com.tw','Dreams','Aspiring for greatness, reaching for the stars.'),(34,'test@gd','Reflection','Contemplating life\'s journey, pondering its meaning.'),(35,'asdfads@adg','Journey','Embarking on a quest, overcoming obstacles along the way.');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'123@gmail.com','123'),(2,'test@gmail.com','test'),(3,'1233@yahoo.com.tw','dsaf'),(4,'test@gd','fdf'),(5,'asdfads@adg','asdfasdf'),(8,'user1@example.com','123'),(9,'456@gmail.com','adfase');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-19 14:36:19
