-- ========================
-- USERS TABLE
-- ========================
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Initial admin user (password = admin)
INSERT INTO users (name, email, password)
VALUES (
    'admin',
    'admin@example.com',
    '$2a$10$7QyY7kzQGJZb5m5xjH1k8uU1tZ1P8TnHjU0H6Zk5J0yR5g2k5lq'
);

-- ========================
-- TASKS TABLE
-- ========================
CREATE TABLE tasks (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(500),
    status VARCHAR(50),
    priority VARCHAR(50),
    completed BOOLEAN DEFAULT false,
    user_id BIGINT REFERENCES users(id) ON DELETE CASCADE
);

-- Example tasks for admin
INSERT INTO tasks (title, description, status, priority, completed, user_id)
VALUES
('Setup Project', 'Initialize project repository and basic setup', 'TODO', 'HIGH', false, 1),
('Implement Auth', 'Add JWT authentication and registration', 'IN_PROGRESS', 'HIGH', false, 1);

-- ========================
-- WEBSOCKET MESSAGES TABLE
-- ========================
CREATE TABLE websocket_messages (
    id BIGSERIAL PRIMARY KEY,
    sender VARCHAR(100),
    message TEXT,
    timestamp TIMESTAMP DEFAULT NOW()
);

-- Example WebSocket message
INSERT INTO websocket_messages (sender, message)
VALUES ('admin@example.com', 'Welcome to the chat!');