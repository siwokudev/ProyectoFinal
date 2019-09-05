-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: qtm
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comanda`
--

DROP TABLE IF EXISTS `comanda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `comanda` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` int(11) NOT NULL,
  `total` float NOT NULL,
  `comentarios` varchar(250) DEFAULT NULL,
  `direccion` varchar(250) DEFAULT NULL,
  `estado` smallint(3) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_comanda_usuario1_idx` (`usuario`),
  CONSTRAINT `fk_comanda_usuario1` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comanda`
--

LOCK TABLES `comanda` WRITE;
/*!40000 ALTER TABLE `comanda` DISABLE KEYS */;
INSERT INTO `comanda` VALUES (28,1,60,'la pizza familiar,el café de medio litro por favor','Generation',3);
/*!40000 ALTER TABLE `comanda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comanda_has_producto`
--

DROP TABLE IF EXISTS `comanda_has_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `comanda_has_producto` (
  `id_producto` int(11) NOT NULL,
  `id_comanda` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `fk_producto_has_comanda_comanda1_idx` (`id_comanda`),
  KEY `fk_producto_has_comanda_producto1_idx` (`id_producto`),
  CONSTRAINT `fk_producto_has_comanda_comanda1` FOREIGN KEY (`id_comanda`) REFERENCES `comanda` (`id`),
  CONSTRAINT `fk_producto_has_comanda_producto1` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comanda_has_producto`
--

LOCK TABLES `comanda_has_producto` WRITE;
/*!40000 ALTER TABLE `comanda_has_producto` DISABLE KEYS */;
INSERT INTO `comanda_has_producto` VALUES (19,28,22),(26,28,23);
/*!40000 ALTER TABLE `comanda_has_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `producto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  `tipo_producto` int(11) NOT NULL,
  `tipo_comida` int(11) DEFAULT NULL,
  `tipo_bebida` int(11) DEFAULT NULL,
  `tipo_dulces` int(11) DEFAULT NULL,
  `precio` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_producto_tipo_producto1_idx` (`tipo_producto`),
  KEY `fk_producto_tipo_comida1_idx` (`tipo_comida`),
  KEY `fk_producto_tipo_bebida1_idx` (`tipo_bebida`),
  KEY `fk_producto_tipo_dulces1_idx` (`tipo_dulces`),
  CONSTRAINT `fk_producto_tipo_bebida1` FOREIGN KEY (`tipo_bebida`) REFERENCES `tipo_bebida` (`id`),
  CONSTRAINT `fk_producto_tipo_comida1` FOREIGN KEY (`tipo_comida`) REFERENCES `tipo_comida` (`id`),
  CONSTRAINT `fk_producto_tipo_dulces1` FOREIGN KEY (`tipo_dulces`) REFERENCES `tipo_dulces` (`id`),
  CONSTRAINT `fk_producto_tipo_producto1` FOREIGN KEY (`tipo_producto`) REFERENCES `tipo_producto` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (19,'Pepperoni',1,2,NULL,NULL,45),(20,'Mexicana',1,2,NULL,NULL,50),(21,'Margarita',1,2,NULL,NULL,50),(22,'Satun',1,1,NULL,NULL,35),(23,'Spavo',1,1,NULL,NULL,35),(25,'Verdura',1,4,NULL,NULL,50),(26,'Americano',2,NULL,2,NULL,15),(27,'Moka',2,NULL,2,NULL,20),(28,'Expresso',2,NULL,2,NULL,20),(29,'Mango',2,NULL,1,NULL,15),(30,'Sandia',2,NULL,1,NULL,15),(31,'Te verde',2,NULL,1,NULL,15),(32,'Cocacola',2,NULL,3,NULL,10),(33,'Sprite',2,NULL,3,NULL,10),(35,'Cesar',1,5,NULL,NULL,50),(36,'Manzana',1,6,NULL,NULL,50),(38,'Chips',7,NULL,NULL,NULL,13),(39,'Sabritas',7,NULL,NULL,4,15),(40,'Arcoiris',7,NULL,NULL,3,16),(41,'Emperador',7,NULL,NULL,3,16),(42,'Canelitas',7,NULL,NULL,3,16),(43,'Hershey',7,NULL,NULL,2,15),(44,'Crunch',7,NULL,NULL,2,18),(45,'Takis',7,NULL,NULL,4,15),(46,'Reeses',7,NULL,NULL,2,18),(47,'Platano',1,6,NULL,NULL,35),(48,'Bionico',1,6,NULL,NULL,35),(49,'Verdura',1,5,NULL,NULL,35),(50,'Pollo',1,5,NULL,NULL,35),(51,'Qjamon',1,4,NULL,NULL,30),(52,'Qpavo',1,4,NULL,NULL,30),(53,'Qchilorio',1,4,NULL,NULL,30),(54,'Sjamon',1,1,NULL,NULL,30);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_bebida`
--

DROP TABLE IF EXISTS `tipo_bebida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tipo_bebida` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_bebida`
--

LOCK TABLES `tipo_bebida` WRITE;
/*!40000 ALTER TABLE `tipo_bebida` DISABLE KEYS */;
INSERT INTO `tipo_bebida` VALUES (1,'Arizona'),(2,'Café'),(3,'Refresco');
/*!40000 ALTER TABLE `tipo_bebida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_comida`
--

DROP TABLE IF EXISTS `tipo_comida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tipo_comida` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_comida`
--

LOCK TABLES `tipo_comida` WRITE;
/*!40000 ALTER TABLE `tipo_comida` DISABLE KEYS */;
INSERT INTO `tipo_comida` VALUES (1,'Sandwich'),(2,'Pizza'),(4,'Quesadillas'),(5,'Ensalada Verdura'),(6,'Ensalada Fruta');
/*!40000 ALTER TABLE `tipo_comida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_dulces`
--

DROP TABLE IF EXISTS `tipo_dulces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tipo_dulces` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_dulces`
--

LOCK TABLES `tipo_dulces` WRITE;
/*!40000 ALTER TABLE `tipo_dulces` DISABLE KEYS */;
INSERT INTO `tipo_dulces` VALUES (2,'Chocolate'),(3,'Galleta'),(4,'Papas');
/*!40000 ALTER TABLE `tipo_dulces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_producto`
--

DROP TABLE IF EXISTS `tipo_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tipo_producto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_producto`
--

LOCK TABLES `tipo_producto` WRITE;
/*!40000 ALTER TABLE `tipo_producto` DISABLE KEYS */;
INSERT INTO `tipo_producto` VALUES (1,'Comida'),(2,'Bebida'),(7,'Dulces');
/*!40000 ALTER TABLE `tipo_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `contraseña` varchar(45) NOT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `es_admin` bit(1) NOT NULL DEFAULT b'0',
  `compañia` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`),
  UNIQUE KEY `correo_UNIQUE` (`correo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Adan','Adan@gmail.com','password','3344556677',_binary '\0','Oficina1'),(2,'admin','admin@admin','admin','1111',_binary '','aqui mero'),(4,'Alan','correo@Alan','contraseña','33001122',_binary '\0','Generations');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-05  3:06:43
