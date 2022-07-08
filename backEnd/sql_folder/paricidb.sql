-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 08, 2022 at 12:59 PM
-- Server version: 5.7.24
-- PHP Version: 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `paricidb`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id_categorie` int(11) NOT NULL,
  `title_categorie` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `id_circuit` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `circuits`
--

CREATE TABLE `circuits` (
  `id_circuit` int(11) NOT NULL,
  `name_circuit` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_circuit` text COLLATE utf8mb4_unicode_ci,
  `arrondissement` text COLLATE utf8mb4_unicode_ci,
  `image_circuit` text COLLATE utf8mb4_unicode_ci,
  `group_date` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `group_time` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `circuits`
--

INSERT INTO `circuits` (`id_circuit`, `name_circuit`, `description_circuit`, `arrondissement`, `image_circuit`, `group_date`, `group_time`, `created_at`, `updated_at`) VALUES
(1, 'Ballade en Seine', 'La Seine comme vous n\'avez jamais vu', '75007', 'https://images.unsplash.com/photo-1611512429151-780176f93478?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60', '25/02/2022', '12h30', '2022-07-04 18:47:20', '2022-07-04 18:47:20'),
(2, 'Ballade Parisienne', 'La Seine comme vous n\'avez jamais vu', 'Ballade Parisienne', 'https://images.unsplash.com/photo-1611512429151-780176f93478?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60', NULL, '2022-07-07 00:00:00.000', '2022-07-04 18:47:44', '2022-07-04 18:47:44'),
(3, 'La dolce vita à Paris', 'Italiano', '75005', 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80', NULL, '2022-07-07 00:00:00.000', '2022-07-04 18:50:00', '2022-07-04 18:50:00'),
(4, 'Flagrance', 'Un circuit se composant de commerces variés et passionnants autour des fleurs.', 'Primeur', 'https://images.unsplash.com/photo-1611512429151-780176f93478?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60', NULL, '2022-07-07 00:00:00.000', '2022-07-05 09:16:30', '2022-07-05 09:16:30'),
(5, 'NouveauCircuit', 'Flagrance du sud, amusez-vous bien !', '75007', 'https://images.unsplash.com/photo-1547240089-566513e12c89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', NULL, '2022-07-07 00:00:00.000', '2022-07-06 15:15:50', '2022-07-06 15:15:50'),
(6, 'NouveauCircuit', 'Flagrance du sud, amusez-vous bien !', '75007', 'https://images.unsplash.com/photo-1547240089-566513e12c89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', NULL, '2022-07-07 00:00:00.000', '2022-07-06 15:15:57', '2022-07-06 15:15:57');

-- --------------------------------------------------------

--
-- Table structure for table `circuit_magasins`
--

CREATE TABLE `circuit_magasins` (
  `id_circuit_magasin` int(11) NOT NULL,
  `id_circuit` int(11) DEFAULT NULL,
  `id_magasin` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `circuit_magasins`
--

INSERT INTO `circuit_magasins` (`id_circuit_magasin`, `id_circuit`, `id_magasin`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2022-07-04 18:47:20', '2022-07-04 18:47:20'),
(2, 2, 2, '2022-07-04 18:47:44', '2022-07-04 18:47:44'),
(3, 2, 3, '2022-07-04 18:47:44', '2022-07-04 18:47:44'),
(4, 3, 7, '2022-07-04 18:50:00', '2022-07-04 18:50:00'),
(5, 3, 4, '2022-07-04 18:50:00', '2022-07-04 18:50:00'),
(6, 3, 5, '2022-07-04 18:50:00', '2022-07-04 18:50:00'),
(7, 3, 8, '2022-07-04 18:50:00', '2022-07-04 18:50:00'),
(8, 3, 6, '2022-07-04 18:50:00', '2022-07-04 18:50:00'),
(9, 4, 12, '2022-07-05 09:16:30', '2022-07-05 09:16:30'),
(10, 4, 13, '2022-07-05 09:16:30', '2022-07-05 09:16:30'),
(11, 4, 11, '2022-07-05 09:16:30', '2022-07-05 09:16:30'),
(12, 4, 10, '2022-07-05 09:16:30', '2022-07-05 09:16:30'),
(13, 4, 14, '2022-07-05 09:16:30', '2022-07-05 09:16:30'),
(14, 4, 15, '2022-07-05 09:16:30', '2022-07-05 09:16:30'),
(15, 5, 18, '2022-07-06 15:15:50', '2022-07-06 15:15:50'),
(16, 5, 16, '2022-07-06 15:15:50', '2022-07-06 15:15:50'),
(17, 5, 17, '2022-07-06 15:15:50', '2022-07-06 15:15:50'),
(18, 5, 19, '2022-07-06 15:15:50', '2022-07-06 15:15:50'),
(19, 5, 20, '2022-07-06 15:15:50', '2022-07-06 15:15:50'),
(20, 6, 21, '2022-07-06 15:15:57', '2022-07-06 15:15:57'),
(21, 6, 22, '2022-07-06 15:15:57', '2022-07-06 15:15:57'),
(22, 6, 23, '2022-07-06 15:15:57', '2022-07-06 15:15:57'),
(23, 6, 24, '2022-07-06 15:15:57', '2022-07-06 15:15:57'),
(24, 6, 25, '2022-07-06 15:15:57', '2022-07-06 15:15:57');

-- --------------------------------------------------------

--
-- Table structure for table `favoris`
--

CREATE TABLE `favoris` (
  `id_favori` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id_circuit` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `magasins`
--

CREATE TABLE `magasins` (
  `id_magasin` int(11) NOT NULL,
  `record_id_magasin` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `magasins`
--

INSERT INTO `magasins` (`id_magasin`, `record_id_magasin`, `created_at`, `updated_at`) VALUES
(1, '', '2022-07-04 18:47:20', '2022-07-04 18:47:20'),
(2, 'Le Jardin du Bac', '2022-07-04 18:47:44', '2022-07-04 18:47:44'),
(3, 'Christophe Cottin', '2022-07-04 18:47:44', '2022-07-04 18:47:44'),
(4, 'Michel BOUETARD / sombrero75', '2022-07-04 18:50:00', '2022-07-04 18:50:00'),
(5, 'Pizzeria Luciana', '2022-07-04 18:50:00', '2022-07-04 18:50:00'),
(6, 'Cofftea', '2022-07-04 18:50:00', '2022-07-04 18:50:00'),
(7, 'Verger Mouffetard', '2022-07-04 18:50:00', '2022-07-04 18:50:00'),
(8, 'Poissonnerie Maubert Marée', '2022-07-04 18:50:00', '2022-07-04 18:50:00'),
(9, 'Au Verger des Arènes', '2022-07-04 18:50:00', '2022-07-04 18:50:00'),
(10, 'Sebbah primeurs', '2022-07-05 09:16:30', '2022-07-05 09:16:30'),
(11, 'ERRAPRIM', '2022-07-05 09:16:30', '2022-07-05 09:16:30'),
(12, 'La Fine Gueule', '2022-07-05 09:16:30', '2022-07-05 09:16:30'),
(13, 'Au Verger Duret', '2022-07-05 09:16:30', '2022-07-05 09:16:30'),
(14, 'Le Jardin du Bac', '2022-07-05 09:16:30', '2022-07-05 09:16:30'),
(15, 'Halles du Faubourg', '2022-07-05 09:16:30', '2022-07-05 09:16:30'),
(16, 'Le Jardin du Bac', '2022-07-06 15:15:50', '2022-07-06 15:15:50'),
(17, 'L\'Épicerie fine Rive Gauche', '2022-07-06 15:15:50', '2022-07-06 15:15:50'),
(18, 'Christophe Cottin', '2022-07-06 15:15:50', '2022-07-06 15:15:50'),
(19, 'Qu jing', '2022-07-06 15:15:50', '2022-07-06 15:15:50'),
(20, 'Da Rocco', '2022-07-06 15:15:50', '2022-07-06 15:15:50'),
(21, 'Le Jardin du Bac', '2022-07-06 15:15:57', '2022-07-06 15:15:57'),
(22, 'L\'Épicerie fine Rive Gauche', '2022-07-06 15:15:57', '2022-07-06 15:15:57'),
(23, 'Qu jing', '2022-07-06 15:15:57', '2022-07-06 15:15:57'),
(24, 'Da Rocco', '2022-07-06 15:15:57', '2022-07-06 15:15:57'),
(25, 'Christophe Cottin', '2022-07-06 15:15:57', '2022-07-06 15:15:57');

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

CREATE TABLE `subscribers` (
  `id_subs` int(11) NOT NULL,
  `first_name_subs` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name_subs` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel_subs` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_subs` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `id_circuit` int(11) DEFAULT NULL,
  `date_of_group` date DEFAULT NULL,
  `time_of_group` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `pseudo` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` text COLLATE utf8mb4_unicode_ci,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `pseudo`, `password`, `photo`, `created_at`, `updated_at`) VALUES
(1, 'Amo', '$2b$10$WFrEJn0DUpjQKY7kGho0s.umwPbVE9fhLHzzUSDflAMFBXP.ucCfG', NULL, '2022-07-06 16:13:43', '2022-07-06 16:13:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_categorie`),
  ADD KEY `id_circuit` (`id_circuit`);

--
-- Indexes for table `circuits`
--
ALTER TABLE `circuits`
  ADD PRIMARY KEY (`id_circuit`);

--
-- Indexes for table `circuit_magasins`
--
ALTER TABLE `circuit_magasins`
  ADD PRIMARY KEY (`id_circuit_magasin`),
  ADD UNIQUE KEY `circuit_magasins_id_magasin_id_circuit_unique` (`id_circuit`,`id_magasin`),
  ADD KEY `id_magasin` (`id_magasin`);

--
-- Indexes for table `favoris`
--
ALTER TABLE `favoris`
  ADD PRIMARY KEY (`id_favori`),
  ADD UNIQUE KEY `favoris_id_user_id_circuit_unique` (`id_circuit`,`id_user`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `magasins`
--
ALTER TABLE `magasins`
  ADD PRIMARY KEY (`id_magasin`);

--
-- Indexes for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD PRIMARY KEY (`id_subs`),
  ADD UNIQUE KEY `email_subs` (`email_subs`),
  ADD KEY `id_circuit` (`id_circuit`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `pseudo` (`pseudo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id_categorie` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `circuits`
--
ALTER TABLE `circuits`
  MODIFY `id_circuit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `circuit_magasins`
--
ALTER TABLE `circuit_magasins`
  MODIFY `id_circuit_magasin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `favoris`
--
ALTER TABLE `favoris`
  MODIFY `id_favori` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `magasins`
--
ALTER TABLE `magasins`
  MODIFY `id_magasin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `id_subs` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`id_circuit`) REFERENCES `circuits` (`id_circuit`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `circuit_magasins`
--
ALTER TABLE `circuit_magasins`
  ADD CONSTRAINT `circuit_magasins_ibfk_1` FOREIGN KEY (`id_circuit`) REFERENCES `circuits` (`id_circuit`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `circuit_magasins_ibfk_2` FOREIGN KEY (`id_magasin`) REFERENCES `magasins` (`id_magasin`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `favoris`
--
ALTER TABLE `favoris`
  ADD CONSTRAINT `favoris_ibfk_1` FOREIGN KEY (`id_circuit`) REFERENCES `circuits` (`id_circuit`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `favoris_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD CONSTRAINT `subscribers_ibfk_1` FOREIGN KEY (`id_circuit`) REFERENCES `circuits` (`id_circuit`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
