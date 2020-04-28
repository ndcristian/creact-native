-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.18-0ubuntu0.16.04.1 - (Ubuntu)
-- Server OS:                    Linux
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for dojo-silex-app

-- CREATE DATABASE IF NOT EXISTS `dojo-silex-app` /*!40100 DEFAULT CHARACTER SET utf8 */;
-- USE `dojo-silex-app`;

-- Dumping structure for table dojo-silex-app._failed_logins
DROP TABLE IF EXISTS `_failed_logins`;
CREATE TABLE IF NOT EXISTS `_failed_logins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cui` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `what_failed` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'cui, login or password',
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table dojo-silex-app._failed_logins: ~0 rows (approximately)
/*!40000 ALTER TABLE `_failed_logins` DISABLE KEYS */;
/*!40000 ALTER TABLE `_failed_logins` ENABLE KEYS */;

-- Dumping structure for table dojo-silex-app._groups
DROP TABLE IF EXISTS `_groups`;
CREATE TABLE IF NOT EXISTS `_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `active` varchar(1) DEFAULT NULL,
  `user` varchar(50) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modifier` varchar(50) DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `login` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Dumping data for table dojo-silex-app._groups: ~0 rows (approximately)
/*!40000 ALTER TABLE `_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `_groups` ENABLE KEYS */;

-- Dumping structure for table dojo-silex-app._groups_users
DROP TABLE IF EXISTS `_groups_users`;
CREATE TABLE IF NOT EXISTS `_groups_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `group_id` int(11) NOT NULL,
  `user` varchar(50) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modifier` varchar(50) DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Dumping data for table dojo-silex-app._groups_users: ~0 rows (approximately)
/*!40000 ALTER TABLE `_groups_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `_groups_users` ENABLE KEYS */;

-- Dumping structure for table dojo-silex-app._sessions
DROP TABLE IF EXISTS `_sessions`;
CREATE TABLE IF NOT EXISTS `_sessions` (
  `sid` varchar(100) NOT NULL,
  `ip` varchar(15) NOT NULL,
  `username` varchar(50) NOT NULL,
  `role` varchar(50) DEFAULT NULL COMMENT 'client, controller',
  `created` datetime NOT NULL,
  `last_active` datetime NOT NULL,
  `path_info` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Dumping data for table dojo-silex-app._sessions: ~0 rows (approximately)
/*!40000 ALTER TABLE `_sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `_sessions` ENABLE KEYS */;

-- Dumping structure for table dojo-silex-app._settings
DROP TABLE IF EXISTS `_settings`;
CREATE TABLE IF NOT EXISTS `_settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '0',
  `value` varchar(250) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table dojo-silex-app._settings: ~0 rows (approximately)
/*!40000 ALTER TABLE `_settings` DISABLE KEYS */;
/*!40000 ALTER TABLE `_settings` ENABLE KEYS */;

-- Dumping structure for table dojo-silex-app._users
DROP TABLE IF EXISTS `_users`;
CREATE TABLE IF NOT EXISTS `_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `pwdhash` varchar(250) DEFAULT NULL,
  `salt` varchar(100) DEFAULT NULL,
  `role` varchar(50) NOT NULL,
  `full_name` varchar(150) DEFAULT NULL,
  `active` varchar(1) DEFAULT NULL,
  `settings` text,
  `last_login_attempt` datetime DEFAULT NULL,
  `fail_counter` smallint(5) unsigned DEFAULT '0',
  `user` varchar(50) DEFAULT NULL,
  `created` datetime NOT NULL,
  `modifier` varchar(50) DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `login` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Dumping data for table dojo-silex-app._users: ~1 rows (approximately)
/*!40000 ALTER TABLE `_users` DISABLE KEYS */;
INSERT INTO `_users` (`id`, `username`, `pwdhash`, `salt`, `role`, `full_name`, `active`, `settings`, `last_login_attempt`, `fail_counter`, `user`, `created`, `modifier`, `modified`) VALUES
	(65, 'adminu', 'Q+9IW8KOAvNPMS+dWXnLsRaUeRghBZGo1vWplkoudvI9emOLCdGE8Q==', '1GtKw7zqiHWEvoklbQiDLMWvM5+GZKZsxRzrLZEtZX9UQb6vTYHQPQ==', 'root', 'Administrator', '1', NULL, '2017-11-08 15:44:16', 0, NULL, '0000-00-00 00:00:00', 'anonymous', '2017-11-08 15:44:16');
/*!40000 ALTER TABLE `_users` ENABLE KEYS */;
DROP TABLE IF EXISTS `monitor`;
CREATE TABLE IF NOT EXISTS `monitor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `station` varchar(100)  NULL,
  `measure` varchar(250) DEFAULT NULL,
  `value` float(10,2) DEFAULT NULL,
	`moment` datetime  NULL,
  `user` varchar(50) DEFAULT NULL,
  `created` datetime  NULL,
  `modifier` varchar(50) DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;






