-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2019 at 03:48 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `naval_question`
--

-- --------------------------------------------------------

--
-- Table structure for table `questoes`
--

CREATE TABLE `questoes` (
  `id` int(11) NOT NULL,
  `grupo` varchar(30) DEFAULT NULL,
  `pergunta` varchar(255) DEFAULT NULL,
  `respostaCerta` varchar(10) DEFAULT NULL,
  `respostaA` varchar(255) DEFAULT NULL,
  `respostaB` varchar(255) DEFAULT NULL,
  `respostaC` varchar(255) DEFAULT NULL,
  `respostaD` varchar(255) DEFAULT NULL,
  `respostaE` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questoes`
--

INSERT INTO `questoes` (`id`, `grupo`, `pergunta`, `respostaCerta`, `respostaA`, `respostaB`, `respostaC`, `respostaD`, `respostaE`) VALUES
(3, 'js', 'TESTES ', 'd', 'RESPOSTA A', 'RESPOSTA B', 'RESPOSTA C', 'RESPOSTA D', 'RESPOSTA E'),
(4, 'js', 'GDSADSAD', 'b', 'DASDSAD', 'DSADS', 'DSADSA', 'DASDSA', 'DSADSAD');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `nome` varchar(30) DEFAULT NULL,
  `sobrenome` varchar(50) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`nome`, `sobrenome`, `email`, `senha`) VALUES
('Graziel', 'Medeiros', 'graziel@naval.com', 'a906449d5769fa7361d7ecc6aa3f6d28'),
('teste', 'teste2', 'teste@teste.com', '698dc19d489c4e4db73e28a713eab07b'),
('Teste2', 'teste22', 'teste@teste.com.br', '698dc19d489c4e4db73e28a713eab07b');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `questoes`
--
ALTER TABLE `questoes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `questoes`
--
ALTER TABLE `questoes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
