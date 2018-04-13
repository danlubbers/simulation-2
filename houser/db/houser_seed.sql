CREATE TABLE houser (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(2),
    zip INTEGER,
    img TEXT,
    mortgage DECIMAL,
    rent DECIMAL
)

insert into houser (name, address, city, state, zip, img, mortgage, rent) 
values ('Triplex', '4567 S Road st', 'Orem', 'UT', 41312, 'https://www.utahrealestate.com/site/img/common/marquee-05.jpg', 250000.00, 1500.00);

insert into houser (name, address, city, state, zip, img, mortgage, rent) 
values ('Dummy House', '4567 Dummy Road', 'Dummy', 'UT', 41312, 'http://www.dummyduck.com/wordpress/wp-content/uploads/2016/04/dummy-house-01.png', 100000.00, 750.00);