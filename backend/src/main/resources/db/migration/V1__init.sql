-- USERS TABLE
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);

-- TASKS TABLE
CREATE TABLE tasks (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50),
    user_id BIGINT,
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

-- SAMPLE USER (password = admin)
INSERT INTO users (username, password, role)
VALUES (
    'admin',
    '$2a$10$7QyY7kzQGJZb5m5xjH1k8uU1tZ1P8TnHjU0H6Zk5J0yR5g2k5lq',
    'ROLE_USER'
);