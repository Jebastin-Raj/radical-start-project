-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2023 at 06:02 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `newdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `fname` varchar(30) DEFAULT NULL,
  `lastname` varchar(30) DEFAULT NULL,
  `location` varchar(40) DEFAULT NULL,
  `gmail` varchar(30) DEFAULT NULL,
  `birthday` varchar(255) DEFAULT NULL,
  `education` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `fname`, `lastname`, `location`, `gmail`, `birthday`, `education`) VALUES
(1, 'jebastin', 'raj', 'rameswaram', 'jebastinraj1607@gmail.com', '1999-07-16', 'BCA'),
(2, 'selva ', 'kumar', 'chennai', 'selvakumar12@gmail.com', '2023-05-05', 'B.SC'),
(3, 'suresh', 'kannan', 'rameswaram', 'sureshkannan12@gmail.com', '1999-07-04', 'BBA'),
(4, 'selva', 'raja', 'rameswaram', 'selvaraja34@gmail.com', '1997-06-12', 'B.E'),
(5, 'siva', 'prakash', 'madurai', 'sivaprakash1616@gmail.com', '1998-11-07', 'B.SC.IT'),
(6, 'selva', 'mani', 'paramakudi', 'paramakudi3434@gmail.com', '2000-03-11', 'B.SC'),
(7, 'james', 'dinil', 'chennai', 'jamesdinil3456@gmail.com', '2023-05-18', 'MBA'),
(8, 'logesh', 'meeyaooo', 'rameswaram', 'logeshmeyaooo@gmail.com', '2008-06-05', 'B.E');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
