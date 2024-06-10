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
-- Table structure for table `films`
--

DROP TABLE IF EXISTS `films`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `films` (
  `id` varchar(3) NOT NULL,
  `title` varchar(255) NOT NULL,
  `descript` varchar(500) NOT NULL,
  `id_user` int NOT NULL,
  `director` varchar(255) NOT NULL,
  `art` varchar(255) NOT NULL,
  `sound` varchar(255) NOT NULL,
  `cast` varchar(500) NOT NULL,
  `poster` text,
  `rating` decimal(2,1) DEFAULT NULL,
  `views` int DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `films`
--

LOCK TABLES `films` WRITE;
/*!40000 ALTER TABLE `films` DISABLE KEYS */;
INSERT INTO `films` VALUES ('1','La Leyenda del Sol Perdido','Un equipo de exploradores emprende un viaje para encontrar una antigua reliquia que podría salvar al mundo de la oscuridad eterna.',1,'Amanda Rodriguez','Carlos González','Javier Muñoz','Sofía Cruz, Diego García, Laura Martínez','http://localhost:3010/films/resource/poster/1.png',8.5,120000,1,0,'2024-06-03 18:25:33','2024-06-09 08:09:59',NULL),('10','El Secreto de la Montaña','Un grupo de alpinistas se enfrenta a desafíos mortales mientras intentan alcanzar la cima de una montaña imposible de escalar.',5,'Eva Martínez','Pablo López','María Sánchez','Alberto Fernández, Sofía Soto, David Pérez','http://localhost:3010/films/resource/poster/10.png',8.0,160000,1,0,'2024-06-03 18:25:33','2024-06-09 08:10:03',NULL),('11','La Ciudad de las Sombras','Un detective privado investiga una serie de asesinatos en una ciudad dominada por la oscuridad y la corrupción, donde nada es lo que parece.',1,'Laura Fernández','Antonio Martínez','Carmen Pérez','Javier García, Paula Martínez, Roberto Sánchez','http://localhost:3010/films/resource/poster/11.png',8.3,170000,1,0,'2024-06-03 18:25:33','2024-06-09 08:10:12',NULL),('2','Más Allá de las Estrellas','Una astronauta se encuentra atrapada en un planeta desconocido y debe encontrar una manera de regresar a la Tierra antes de que se agoten sus suministros.',2,'Eduardo Sánchez','María López','José Ramírez','Ana Pérez, Juan Fernández, Marta González','http://localhost:3010/films/resource/poster/2.png',9.0,180000,1,0,'2024-06-03 18:25:33','2024-06-09 08:10:20',NULL),('3','El Misterio del Círculo de Piedra','Un arqueólogo descubre un antiguo círculo de piedra que esconde secretos oscuros y peligrosos que podrían cambiar el curso de la historia.',3,'Roberto Gómez','Pablo Fernández','Andrea Díaz','Carlos Martínez, Elena Ruiz, Daniel Sánchez','http://localhost:3010/films/resource/poster/3.png',7.9,90000,1,0,'2024-06-03 18:25:33','2024-06-09 08:10:24',NULL),('4','La Última Frontera','Una tripulación de una nave espacial debe enfrentarse a peligros desconocidos en los confines del universo mientras buscan un nuevo hogar para la humanidad.',4,'Lucía Martín','Antonio Pérez','Raquel García','Pedro Rodríguez, Julia Fernández, Andrés Soto','http://localhost:3010/films/resource/poster/4.png',8.7,150000,1,0,'2024-06-03 18:25:33','2024-06-09 08:09:52',NULL),('5','El Secreto del Abismo','Un grupo de buzos se aventura en las profundidades del océano en busca de un legendario tesoro, pero descubren algo mucho más aterrador en las profundidades.',5,'Gonzalo López','Elena Martínez','David Gómez','Carmen Ruiz, Sergio González, Patricia Hernández','http://localhost:3010/films/resource/poster/5.png',7.6,110000,1,0,'2024-06-03 18:25:33','2024-06-09 08:10:38',NULL),('6','El Viaje del Tiempo','Un científico crea una máquina del tiempo y se embarca en un viaje a través de las eras para cambiar el curso de la historia y salvar a la humanidad.',1,'Javier Sánchez','María Fernández','Alberto Pérez','Laura García, Miguel Ruiz, Sofía Martín','http://localhost:3010/films/resource/poster/6.png',8.9,200000,1,0,'2024-06-03 18:25:33','2024-06-09 08:10:44',NULL),('7','El Misterio del Templo Perdido','Un arqueólogo intrépido se adentra en un templo antiguo en busca de un tesoro legendario, pero pronto descubre que no está solo.',2,'Ana Sánchez','Carlos Rodríguez','Elena Pérez','Mario Martínez, Paula Soto, Alejandro García','http://localhost:3010/films/resource/poster/7.png',7.8,130000,1,0,'2024-06-03 18:25:33','2024-06-09 08:10:51',NULL),('8','Aventura en la Selva','Un grupo de exploradores se interna en la selva amazónica en busca de una planta rara con poderes curativos, pero se enfrentan a peligros inesperados en su camino.',3,'Diego Martínez','Sara López','Juan Sánchez','Cristina Martín, Andrés Pérez, María Fernández','http://localhost:3010/films/resource/poster/8.png',8.2,140000,1,0,'2024-06-03 18:25:33','2024-06-09 08:10:55',NULL),('9','El Último Guerrero','En un mundo post-apocalíptico, un guerrero solitario emprende un viaje para vengar la muerte de su familia y restaurar la paz en la tierra desolada.',4,'Daniel Rodríguez','Lucía Pérez','Santiago Martínez','Ana García, Carlos Sánchez, Julia Pérez','http://localhost:3010/films/resource/poster/9.png',7.5,100000,1,0,'2024-06-03 18:25:33','2024-06-09 08:11:00',NULL);
/*!40000 ALTER TABLE `films` ENABLE KEYS */;
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
