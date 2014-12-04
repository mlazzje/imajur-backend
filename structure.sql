CREATE TABLE `commentaire` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `id_user` int(9) NOT NULL,
  `id_image` int(15) NOT NULL,
  `date` int(19) NOT NULL,
  `content` text NOT NULL,
  `notifie` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `date` (`date`),
  KEY `id_user` (`id_user`),
  KEY `id_image` (`id_image`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

CREATE TABLE `image` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `id_user` int(9) NOT NULL,
  `titre` varchar(32) NOT NULL,
  `extension` enum('jpg','png','gif') NOT NULL DEFAULT 'jpg',
  `date` int(19) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

CREATE TABLE `user` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(32) NOT NULL,
  `mail` varchar(128) NOT NULL,
  `password` varchar(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pseudo` (`pseudo`),
  UNIQUE KEY `mail` (`mail`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

CREATE TABLE `vote` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `id_user` int(9) NOT NULL,
  `id_image` int(15) NOT NULL,
  `point` int(1) NOT NULL DEFAULT '-1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_user_2` (`id_user`,`id_image`),
  KEY `id_user` (`id_user`),
  KEY `id_image` (`id_image`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;


ALTER TABLE `commentaire`
  ADD CONSTRAINT `commentaire_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `commentaire_ibfk_2` FOREIGN KEY (`id_image`) REFERENCES `image` (`id`);

ALTER TABLE `image`
  ADD CONSTRAINT `image_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

ALTER TABLE `vote`
  ADD CONSTRAINT `vote_ibfk_2` FOREIGN KEY (`id_image`) REFERENCES `image` (`id`),
  ADD CONSTRAINT `vote_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);
