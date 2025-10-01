-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 01, 2025 lúc 04:27 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `app_todox`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `task`
--

CREATE TABLE `task` (
  `task_id` char(36) NOT NULL,
  `task_title` text NOT NULL,
  `task_status` tinyint(4) NOT NULL DEFAULT 0,
  `task_completedAt` timestamp NULL DEFAULT NULL,
  `task_createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `task_updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `task`
--

INSERT INTO `task` (`task_id`, `task_title`, `task_status`, `task_completedAt`, `task_createdAt`, `task_updatedAt`) VALUES
('01f85347-8e39-4e77-90e4-869e1b3ef880', 'Task 4', 0, NULL, '2025-10-01 01:20:09', '2025-10-01 01:23:03'),
('02a0306e-5664-46b3-893b-c798728ccc9a', 'Task 4', 0, NULL, '2025-10-01 01:20:00', '2025-10-01 01:23:05'),
('0a9eb25e-0052-40f2-bd87-899ff333386e', 'Task 16', 0, NULL, '2025-10-01 01:19:47', NULL),
('0bb8e4a8-4889-46a1-8744-a63c6a68d83c', 'Task 5', 0, NULL, '2025-10-01 01:14:41', NULL),
('149835a6-ad7d-480c-89ad-1f3a1f7c47c0', 'Task 6', 0, NULL, '2025-10-01 01:14:50', NULL),
('1d2a7059-ea66-402b-9155-195e66142190', 'Task 4', 0, NULL, '2025-10-01 01:20:22', '2025-10-01 01:23:02'),
('23650adc-1176-4cb6-903e-cb98afc49912', 'Task 2', 0, NULL, '2025-10-01 01:14:34', NULL),
('2ad90083-eb2c-4b47-a46e-cdc2d21409ce', 'Task 4', 0, NULL, '2025-10-01 01:20:21', '2025-10-01 01:23:03'),
('31ce71f0-0c81-4b5b-8641-23983f02ebb2', 'Task 4', 0, NULL, '2025-10-01 01:20:08', '2025-10-01 01:23:03'),
('3200936f-5d70-49c9-a166-fc3787d683c9', 'Task 3', 0, NULL, '2025-09-03 16:09:46', '2025-09-30 23:33:02'),
('3333a741-0925-4159-9c5f-866f529cb2e4', 'Task 4', 0, NULL, '2025-10-01 01:20:26', '2025-10-01 01:26:34'),
('3843d7ff-96e2-4705-b4ad-80b9e76e5b7d', 'Task 4', 0, NULL, '2025-10-01 01:20:01', '2025-10-01 01:23:05'),
('3d89ab24-02d7-4ff9-9337-a175fe2fb236', 'Task 4', 0, NULL, '2025-10-01 16:08:04', '2025-10-01 01:26:35'),
('41869292-6d38-42a0-8af3-f9e6f34f54cf', 'Task 4', 0, NULL, '2025-10-17 23:12:55', '2025-10-01 01:26:34'),
('4342e6a3-3982-4be5-b654-72616d9b3f6f', 'Task 10', 0, NULL, '2025-10-01 01:19:27', NULL),
('453100ad-9a82-4b88-a245-86dd17aaa827', 'Task 4', 0, NULL, '2025-10-01 01:20:17', '2025-10-01 01:23:03'),
('467d8e98-f69b-4e74-9bef-90bdc2b41252', 'Task 3', 0, NULL, '2025-10-01 01:14:38', NULL),
('53cc7586-113f-453d-aa93-8062425199fb', 'Task 9', 0, NULL, '2025-10-01 01:19:25', NULL),
('553b79e2-68ba-4a11-971f-904245dec488', 'Task 14', 0, NULL, '2025-10-01 01:19:44', NULL),
('58062a0c-7488-4719-a990-30bf39bb2136', 'Task 4', 0, NULL, '2025-10-01 01:20:25', '2025-10-01 01:26:35'),
('5d574373-350f-4b92-8162-45524ff7787c', 'Task 2', 0, NULL, '2025-09-13 16:08:08', '2025-09-30 23:53:48'),
('62e84482-43d0-474b-bb2f-c71872cc58a0', 'Task 4', 0, NULL, '2025-10-01 01:19:59', '2025-10-01 01:23:05'),
('650c41f0-9b58-49f7-9fad-c4e22c1143d3', 'Task 18', 0, NULL, '2025-10-01 01:19:50', NULL),
('67c8ebdc-3f57-4845-a625-26def5563820', 'Task 4', 0, NULL, '2025-10-01 01:20:06', '2025-10-01 01:23:04'),
('73cb373c-0e04-4c56-9afe-eba7103c7a4e', 'Task 13', 0, NULL, '2025-10-01 01:19:43', NULL),
('770488fe-3a54-430d-be2c-2b5dca667144', 'Task 11', 0, NULL, '2025-10-01 01:19:33', NULL),
('7a8d63ab-af72-4509-849b-27c5499786d6', 'Task 4', 0, NULL, '2025-10-01 01:20:08', '2025-10-01 01:23:04'),
('7c3f0aca-13cd-4b12-b614-f34186bca41f', 'Task 4', 0, NULL, '2025-10-01 01:19:52', '2025-10-01 01:23:05'),
('859f76b0-2982-4e1e-97c7-f0293d88ca8b', 'Task 12', 0, NULL, '2025-10-01 01:19:35', NULL),
('87d26c4f-2094-433d-9884-234153b186f3', 'Task 4', 0, NULL, '2025-10-01 01:20:20', '2025-10-01 01:23:03'),
('90502c29-37fe-4040-955e-72eacf5cbd9b', 'Task 17', 0, NULL, '2025-10-01 01:19:48', NULL),
('ac21a72a-94c4-46cb-bbaf-f16e2a254883', 'Task 8', 0, NULL, '2025-10-01 01:19:22', NULL),
('be97fe87-4e63-403c-ac6d-66739e5e44ee', 'Task 4', 0, NULL, '2025-10-01 01:20:23', '2025-10-01 01:23:02'),
('c449cc1d-6b63-477b-8d3f-2af60e22b0c2', 'Task 7', 0, NULL, '2025-10-01 01:14:58', NULL),
('cc306746-b2bc-4bce-bd5e-19eea270dca2', 'Task 4', 0, NULL, '2025-10-01 01:20:24', '2025-10-01 01:26:35'),
('ceb47bb1-aa66-4c38-a1ee-da27579da75e', 'Task 15', 0, NULL, '2025-10-01 01:19:45', NULL),
('d26f9148-5f78-4dec-b402-4955eb45a47d', 'Task 4', 0, NULL, '2025-10-01 01:20:02', '2025-10-01 01:23:04'),
('d40ec015-239b-47d7-8918-9e951a1cbf08', 'Task 4', 0, NULL, '2025-10-01 01:20:07', '2025-10-01 01:23:04'),
('e08e0b99-3100-4c5b-8a91-b139c9138487', 'Task 4', 0, NULL, '2025-10-01 01:20:19', '2025-10-01 01:23:03'),
('f12dc967-f5f7-4eb6-8f47-71ae7c56f2bd', 'Task 4', 0, NULL, '2025-10-01 01:20:05', '2025-10-01 01:23:04');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`task_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
