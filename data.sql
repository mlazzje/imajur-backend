INSERT INTO `user` (`id`, `pseudo`, `mail`, `password`) VALUES
(1, 'quentin888', 'quentin888@gmx.fr', 'a95bc16631ae2b6fadb455ee018da0adc2703e56d89e3eed074ce56d2f7b1b6a'),
(2, 'boris', 'boris.leduff@yopmail.com', '90788af8e778c975c4f7f1a095333fcc86be481fca2ca6f464c71137faa3441e'),
(3, 'eric', 'eric.gillet@cpe.fr', '90788af8e778c975c4f7f1a095333fcc86be481fca2ca6f464c71137faa3441e'),
(4, 'mathieu', 'mdegaine@gmail.com', '90788af8e778c975c4f7f1a095333fcc86be481fca2ca6f464c71137faa3441e'),
(5, 'maxime', 'mlazzje@gmail.com', '90788af8e778c975c4f7f1a095333fcc86be481fca2ca6f464c71137faa3441e');

INSERT INTO `image` (`id`, `id_user`, `titre`, `extension`, `date`) VALUES
(1, 1, 'An awesome cat', 'png', 1417704255),
(2, 3, 'My grandma twerking', 'jpg', 1417445055),
(3, 4, 'How to kill Boris', 'jpg', 1416321855),
(4, 5, 'A very nice pair or bewbz', 'gif', 1415717055),
(5, 2, 'How do you like it ?', 'png', 1415025855);

INSERT INTO `commentaire` (`id`, `id_user`, `id_image`, `date`, `content`, `notifie`) VALUES
(1, 2, 3, 1417700512, 'C''est un super photographie !', 0),
(2, 1, 3, 1417701512, 'J''adore', 0),
(3, 5, 3, 1417702512, 'LOOOOOL', 0),
(4, 4, 2, 1417703512, 'FRENCH SUXX !!', 0),
(5, 2, 4, 1417704512, 'Mdr g pa lu', 0);

INSERT INTO `vote` (`id`, `id_user`, `id_image`, `point`) VALUES
(1, 1, 4, -1),
(2, 2, 2, 1),
(3, 2, 4, -1),
(4, 3, 4, 1),
(5, 5, 4, 1);
