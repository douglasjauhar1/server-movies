/*
SQLyog Community v13.1.5  (64 bit)
MySQL - 5.5.62-log : Database - funny_movies
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`funny_movies` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `funny_movies`;

/*Table structure for table `share` */

DROP TABLE IF EXISTS `share`;

CREATE TABLE `share` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  `likes` int(11) DEFAULT NULL,
  `unlikes` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

/*Data for the table `share` */

LOCK TABLES `share` WRITE;

insert  into `share`(`id`,`link`,`user_id`,`created_date`,`update_date`,`likes`,`unlikes`,`title`,`description`) values 
(27,'gBkWR-WfEeU',2,'2020-01-02 04:19:55','2020-01-02 04:19:55',4,1,'Gryffin, Illenium - Feel Good ft. Daya','“Feel Good” by Gryffin & Illenium ft. Daya is out NOW.\nhttp://smarturl.it/FeelGoodGryffin\n\nFor more, visit:\nhttp://gryffinofficial.com \nhttps://www.facebook.com/gryffinofficial \nhttps://twitter.com/gryffinofficial \nhttps://www.instagram.com/gryffinoffici'),
(28,'yqu2BcD4-ow',1,'2020-01-02 04:20:57','2020-01-02 04:20:57',3,1,'ILLENIUM, Georgia Ku - Hold On (Visualizer)','My new album ASCEND is out now: https://Illenium.lnk.to/ASCEND\n\nGet tickets to see me on tour this Fall here: http://illenium.com/\n\nPre-order ASCEND on vinyl now: https://Illenium.lnk.to/ASCEND/Vinyl  \n\nFollow ILLENIUM: \nhttps://soundcloud.com/illeniumof');

UNLOCK TABLES;

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(80) DEFAULT NULL,
  `password` varchar(80) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `update_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=1622 DEFAULT CHARSET=latin1;

/*Data for the table `user` */

LOCK TABLES `user` WRITE;

insert  into `user`(`id`,`email`,`password`,`status`,`created_date`,`update_date`) values 
(1,'anto@gmail.com','123',1,'2020-01-01','2020-01-02'),
(2,'budi@gmail.com','123',0,'2020-01-01','2020-01-02');

UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;