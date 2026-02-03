CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE tasks (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255),
    completed BOOLEAN DEFAULT false,
    user_id BIGINT REFERENCES users(id)
);

-- password = admin
INSERT INTO users (name, email, password)
VALUES (
    'admin',
    'admin@example.com',
    '$2a$10$7QyY7kzQGJZb5m5xjH1k8uU1tZ1P8TnHjU0H6Zk5J0yR5g2k5lq'
);