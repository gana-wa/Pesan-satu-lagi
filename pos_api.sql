-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 18, 2020 at 07:55 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `week4_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_category`
--

CREATE TABLE `tb_category` (
  `category_id` int(3) NOT NULL,
  `category_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_category`
--

INSERT INTO `tb_category` (`category_id`, `category_name`) VALUES
(1, 'Food'),
(2, 'Beverage'),
(16, 'kategori coba');

-- --------------------------------------------------------

--
-- Table structure for table `tb_history`
--

CREATE TABLE `tb_history` (
  `history_id` int(8) NOT NULL,
  `invoice` int(11) NOT NULL,
  `cashier` varchar(100) NOT NULL,
  `total` double NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_history`
--

INSERT INTO `tb_history` (`history_id`, `invoice`, `cashier`, `total`, `date`) VALUES
(2, 10, 'Chelsea', 25000, '2020-08-02 13:34:11'),
(6, 11, 'Pevita', 300000, '2020-08-02 16:16:16'),
(7, 12, 'Angel', 200000, '2020-08-02 17:42:16'),
(9, 15, 'anya', 50000, '2020-08-03 03:43:09'),
(10, 20, 'anya', 20000, '2020-08-03 03:44:21'),
(11, 21, 'anya', 20000, '2020-08-03 03:46:06'),
(12, 21, 'anya', 20000, '2020-08-03 05:29:53'),
(13, 25, 'anya', 30000, '2020-08-03 09:17:01');

-- --------------------------------------------------------

--
-- Table structure for table `tb_level`
--

CREATE TABLE `tb_level` (
  `id` int(3) NOT NULL,
  `level` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_level`
--

INSERT INTO `tb_level` (`id`, `level`) VALUES
(1, 'Admin'),
(2, 'Cashier');

-- --------------------------------------------------------

--
-- Table structure for table `tb_product`
--

CREATE TABLE `tb_product` (
  `product_id` int(3) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `category_id` int(3) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_product`
--

INSERT INTO `tb_product` (`product_id`, `product_name`, `price`, `category_id`, `image`) VALUES
(3, 'Espresso', 10000, 2, 'https://week3-pos.netlify.app/assets/jeremy-ricketts-6ZnhM-xBpos-unsplash.png'),
(4, 'Coffe Latte', 15000, 2, 'https://week3-pos.netlify.app/assets/bear.png'),
(5, 'Cappucino', 5000, 2, 'https://week3-pos.netlify.app/assets/firdaus-roslan-pN769u0KHNA-unsplash.png'),
(6, 'Red Velvet Latte', 33000, 2, 'https://week3-pos.netlify.app/assets/redvelvet.png'),
(14, 'Choco Rhum', 28000, 2, 'https://week3-pos.netlify.app/assets/chocorum.png'),
(15, 'Black Forest', 30000, 1, 'https://week3-pos.netlify.app/assets/blackforest.png'),
(16, 'Chicken Katsu Dabu-dabu', 60000, 1, 'https://week3-pos.netlify.app/assets/chickenkatsu.png'),
(17, 'Salmon Truffle Teriyaki', 60000, 1, 'https://week3-pos.netlify.app/assets/salmon.png'),
(18, 'Salmon Truffle Teriyaki', 60000, 1, 'https://week3-pos.netlify.app/assets/wiener.png'),
(42, 'coba upload', 11000, 2, 'localhost:8000/Images/1597720051967-coba_upload.png');

-- --------------------------------------------------------

--
-- Table structure for table `tb_transaction`
--

CREATE TABLE `tb_transaction` (
  `id` int(20) NOT NULL,
  `invoice` int(11) NOT NULL,
  `product_id` int(3) NOT NULL,
  `quantity` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_transaction`
--

INSERT INTO `tb_transaction` (`id`, `invoice`, `product_id`, `quantity`) VALUES
(5, 10, 3, 1),
(6, 10, 4, 2),
(7, 11, 4, 2),
(8, 11, 6, 1),
(9, 11, 14, 1),
(10, 12, 14, 2),
(11, 12, 15, 1),
(12, 12, 16, 2),
(14, 15, 0, 1),
(15, 15, 0, 1),
(16, 20, 0, 1),
(17, 20, 0, 1),
(18, 21, 3, 1),
(19, 21, 4, 1),
(20, 21, 3, 1),
(21, 21, 4, 1),
(22, 25, 4, 1),
(23, 25, 3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tb_user`
--

CREATE TABLE `tb_user` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `level_id` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_user`
--

INSERT INTO `tb_user` (`id`, `username`, `password`, `level_id`) VALUES
(1, 'admin', '$2b$10$sRlfls6qDIHCe64/L17v6OB5ub73ioLvrRw/6wg2H/ouF3III1n8q', '1'),
(2, 'Pevita', '$2b$10$.Bh6zQZJcssCkU7ARUR3ceC9UO2YHJi2ezu9AR8Xp1c8yukdDr8JK', '2'),
(3, 'Chelsea', '$2b$10$uQBc1ApH1LS9qWO2T37Jruw26KlTLDYKajistmSAmye8apG2WVm/S', '2'),
(4, 'Anya', '$2b$10$SFJSyg1fYH1TK8mLaHY4v.tW.v1I2eBYoUOiS1jdGr9zatCoUtsRu', '2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_category`
--
ALTER TABLE `tb_category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `tb_history`
--
ALTER TABLE `tb_history`
  ADD PRIMARY KEY (`history_id`),
  ADD KEY `invoice` (`invoice`);

--
-- Indexes for table `tb_level`
--
ALTER TABLE `tb_level`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_product`
--
ALTER TABLE `tb_product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `tb_transaction`
--
ALTER TABLE `tb_transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `invoice` (`invoice`);

--
-- Indexes for table `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_category`
--
ALTER TABLE `tb_category`
  MODIFY `category_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `tb_history`
--
ALTER TABLE `tb_history`
  MODIFY `history_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tb_level`
--
ALTER TABLE `tb_level`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tb_product`
--
ALTER TABLE `tb_product`
  MODIFY `product_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `tb_transaction`
--
ALTER TABLE `tb_transaction`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `tb_user`
--
ALTER TABLE `tb_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
