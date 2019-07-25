CREATE TABLE wlh8 (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    phone VARCHAR(20),
    address VARCHAR(255)
);

INSERT INTO wlh8 (name, phone, address)
VALUES ('Wyatt', '555-555-5555', '123 Cool Ct.'),
    ('Desmond', '444-444-4444', '456 Awesome Ave.'),
    ('Eric', '333-333-3333', '789 Neat St.');