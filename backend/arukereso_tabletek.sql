-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Nov 20, 2024 at 09:05 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `arukereso_tabletek`
--

-- --------------------------------------------------------

--
-- Table structure for table `tabletek`
--

CREATE TABLE `tabletek` (
  `id` int NOT NULL,
  `termek_nev` varchar(255) NOT NULL,
  `ar` decimal(10,2) NOT NULL,
  `ertekeles` decimal(2,1) DEFAULT NULL,
  `processzor` varchar(255) DEFAULT NULL,
  `memoria` int DEFAULT NULL,
  `hattertar` int DEFAULT NULL,
  `kepernyo_meret` decimal(3,1) DEFAULT NULL,
  `oprendszer` varchar(50) DEFAULT NULL
) ;

--
-- Dumping data for table `tabletek`
--

INSERT INTO `tabletek` (`id`, `termek_nev`, `ar`, `ertekeles`, `processzor`, `memoria`, `hattertar`, `kepernyo_meret`, `oprendszer`) VALUES
(1, 'Apple iPad 10.2', '120000.00', '4.8', 'Apple A13 Bionic', 3, 64, '10.2', 'iOS'),
(2, 'Samsung Galaxy Tab S7', '200000.00', '4.7', 'Snapdragon 865+', 6, 128, '11.0', 'Android'),
(3, 'Huawei MatePad Pro', '150000.00', '4.5', 'Kirin 990', 6, 128, '10.8', 'HarmonyOS'),
(4, 'Lenovo Tab P11', '100000.00', '4.3', 'Snapdragon 662', 4, 64, '11.0', 'Android'),
(5, 'Xiaomi Pad 5', '130000.00', '4.6', 'Snapdragon 860', 6, 128, '11.0', 'Android'),
(6, 'Microsoft Surface Go 2', '220000.00', '4.4', 'Intel Pentium Gold 4425Y', 8, 128, '10.5', 'Windows'),
(7, 'Amazon Fire HD 10', '70000.00', '4.0', 'Mediatek MT8183', 3, 32, '10.1', 'Fire OS'),
(8, 'Sony Xperia Z4 Tablet', '160000.00', '4.2', 'Snapdragon 810', 3, 32, '10.1', 'Android'),
(9, 'Apple iPad 1000.2', '120000.00', '4.8', 'Apple A13 Bionic', 3, 64, '10.2', 'iOS'),
(10, 'Apple iPad 11111.2', '120000.00', '4.8', 'Apple A13 Bionic', 3, 64, '10.2', 'iOS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tabletek`
--
ALTER TABLE `tabletek`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tabletek`
--
ALTER TABLE `tabletek`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
