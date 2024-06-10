-- MySQL dump 10.13  Distrib 8.0.36, for macos14 (x86_64)
--
-- Host: localhost    Database: gretadb
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `film_genre`
--

DROP TABLE IF EXISTS `film_genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `film_genre` (
  `film_id` int NOT NULL,
  `genre_id` int NOT NULL,
  PRIMARY KEY (`film_id`,`genre_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `film_genre`
--

LOCK TABLES `film_genre` WRITE;
/*!40000 ALTER TABLE `film_genre` DISABLE KEYS */;
INSERT INTO `film_genre` VALUES (1,1),(1,3),(1,5),(2,2),(2,4),(3,3),(3,6),(3,9),(4,4),(4,7),(5,5),(5,8),(5,10),(6,1),(6,2),(7,3),(7,4),(7,6),(8,5),(8,7),(9,6),(9,8),(9,10),(10,7),(10,9),(11,1),(11,8),(11,10),(12,2),(12,9),(13,3),(13,5),(13,10),(14,1),(14,4),(15,2),(15,5),(15,7),(16,3),(16,6),(17,4),(17,7),(17,9),(18,5),(18,8),(19,6),(19,9),(19,10),(20,1),(20,7),(21,2),(21,4),(21,8),(22,3),(22,9),(23,4),(23,6),(23,10),(24,1),(24,5),(25,2),(25,6),(25,8),(26,3),(26,7),(27,4),(27,8),(27,10),(28,5),(28,9),(29,1),(29,6),(29,10),(30,2),(30,7),(31,3),(31,4),(31,8);
/*!40000 ALTER TABLE `film_genre` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-09 11:16:25
