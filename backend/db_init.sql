-- Create the frontend backend database and storage table for SAMS.
CREATE DATABASE IF NOT EXISTS sams_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE sams_db;

CREATE TABLE IF NOT EXISTS builds (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  summary VARCHAR(255) NOT NULL,
  power_draw VARCHAR(50) NOT NULL,
  battery_life VARCHAR(50) NOT NULL,
  profile VARCHAR(50) NOT NULL,
  selection_json LONGTEXT NOT NULL,
  stats_json LONGTEXT NOT NULL,
  components_json LONGTEXT NOT NULL
);
