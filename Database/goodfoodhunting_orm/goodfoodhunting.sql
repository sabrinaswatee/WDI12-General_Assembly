CREATE TABLE dishes(
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400),
  image_url TEXT
);

INSERT INTO dishes (name, image_url) VALUES ('pudding',  'http://img.sndimg.com/food/image/upload/v1/img/recipes/42/71/vtKZLiMzRnyiHRS1GmZ6_Vanilla-Pudding-7.jpg');

INSERT INTO dishes (name, image_url) VALUES ('cake',  'http://img.taste.com.au/ua3rYMoq/taste/2016/11/sticky-date-pudding-with-caramel-sauce-39519-1.jpeg');

CREATE TABLE comments(
  id SERIAL4 PRIMARY KEY,
  body TEXT,
  dish_id INTEGER
);

CREATE TABLE users(
  id SERIAL4 PRIMARY KEY,
  email VARCHAR(400),
  password_digest TEXT
);

CREATE TABLE dish_types(
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400)
);

ALTER TABLE dishes ADD COLUMN dish_type_id INTEGER;
