SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `magazin`
--

USE `catalog`;

-- --------------------------------------------------------




CREATE TABLE IF NOT EXISTS `orders` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` smallint(5) DEFAULT NULL,
  `product_name` varchar(100) DEFAULT NULL,
  `specials` varchar(100) DEFAULT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp,
  PRIMARY KEY (`id`),
  KEY `id_produseorders` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;



