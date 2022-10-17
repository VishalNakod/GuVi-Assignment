-- Exercise 1 — Tasks

-- 1. Find the title of each film 
-- Ans:
SELECT title FROM movies;

-- 2.Find the director of each film
-- Ans:
SELECT director FROM movies;

-- 3.Find the title and director of each film
-- Ans:
SELECT title, director FROM movies;

-- 4.Find the title and year of each film 
SELECT title, year FROM movies;

--5.Find all the information about each film 
-- Ans:
SELECT * FROM movies;



-- Exercise 2 — Tasks

-- 1.Find the movie with a row id of 6 
-- Ans:
SELECT * FROM movies
where id=6;

-- 2.Find the movies released in the years between 2000 and 2010 
-- Ans:
SELECT * FROM movies
where Year between 2000 and 2010 ;

-- 3.Find the movies not released in the years between 2000 and 2010 ✓
-- Ans:
SELECT * FROM movies
where Year not between 2000 and 2010 ;

-- 4.Find the first 5 Pixar movies and their release year 
-- Ans:
SELECT * FROM movies
where id<6;



-- Exercise 3 — Tasks
-- 1.Find all the Toy Story movies 
-- Ans:
SELECT * FROM movies
where title like "Toy Story%";

-- 2.Find all the movies directed by John Lasseter 
-- Ans:
SELECT * FROM movies
where Director like "John Lasseter";

-- 3.Find all the movies (and director) not directed by John Lasseter 
-- Ans:
SELECT * FROM movies
where Director not like "John Lasseter";

-- 4.Find all the WALL-* movies 
-- Ans:
SELECT * FROM movies
where title like "wall-_";







-- Exercise 4 — Tasks
-- 1.List all directors of Pixar movies (alphabetically), without duplicates     
-- Ans:
SELECT DISTINCT Director FROM movies
order by Director ;

-- 2.List the last four Pixar movies released (ordered from most recent to least) 
-- Ans:
SELECT * FROM movies
order by year desc
limit 4;

-- 3.List the first five Pixar movies sorted alphabetically 
-- Ans:
SELECT * FROM movies
order by title 
limit 5;

-- 4List the next five Pixar movies sorted alphabetically 
-- Ans:
SELECT * FROM movies
order by title 
limit 5 offset 5;



-- Exercise 5  Review 1 — Tasks
--1.List all the Canadian cities and their populations 
-- Ans:
SELECT * FROM north_american_cities
where country="Canada";

-- 2.Order all the cities in the United States by their latitude from north to south ✓
-- Ans:
SELECT * FROM north_american_cities
where country="United States"
order by latitude desc;

-- 3.List all the cities west of Chicago, ordered from west to east 
-- Ans:
SELECT * FROM north_american_cities
where Longitude	< -87.629798
order by Longitude desc ;

-- 4.List the two largest cities in Mexico (by population) 
-- Ans:
SELECT * FROM north_american_cities
where Country="Mexico"
order by Population desc
limit 2;

-- 5.List the third and fourth largest cities (by population) in the United States and their population 
-- Ans:
SELECT * FROM north_american_cities
where Country="United States"
order by Population desc
limit 2 offset 2;



-- Exercise 6 — Tasks

-- 1.Find the domestic and international sales for each movie :

-- Ans:
SELECT * FROM movies
inner join Boxoffice
on movies.id=boxoffice.movie_id;

-- 2.Show the sales numbers for each movie that did better internationally rather than domestically

-- Ans:
SELECT * FROM movies
inner join Boxoffice
on movies.id=boxoffice.movie_id
where International_sales > Domestic_sales;

-- 3.List all the movies by their ratings in descending order

-- Ans
SELECT * FROM movies
inner join Boxoffice
on id=movie_id
order by rating desc;


-- Exercise 7 — Tasks
-- 1.Find the list of all buildings that have employees
-- Ans:
SELECT distinct Building FROM employees;

-- 2.Find the list of all buildings and their capacity
-- Ans:
SELECT * FROM Buildings ;

-- 3.List all buildings and the distinct employee roles in each building (including empty buildings) 
-- Ans:
SELECT distinct Building_name ,Role FROM Buildings
LEFT join Employees 
on Building_name = Building;


-- Exercise 8 — Tasks
-- 1.Find the list of all buildings that have employees
-- Ans:	
SELECT * FROM employees
where Building	is null;

-- 2.Find the names of the buildings that hold no employees
-- Ans:	
SELECT * FROM Buildings 
left join Employees 
on building_name=building
where role is null;

-- Exercise 9 — Tasks
-- 1.List all movies and their combined sales in millions of dollars 
-- Ans:
SELECT Title,(Domestic_sales +International_sales)/1000000 as TotalSales
FROM movies
inner join Boxoffice 
on Id=Movie_id;

-- 2.List all movies and their ratings in percent
-- Ans:
SELECT Title,Rating*10 as Percentage
FROM movies
inner join Boxoffice 
on Id=Movie_id;

-- 3.List all movies that were released on even number years ✓
-- Ans:
SELECT Title,year FROM movies where year%2 =0;


-- Exercise 10 — Tasks
-- 1.Find the longest time that an employee has been at the studio ✓
-- Ans:
SELECT role,max (Years_employed)  
FROM employees 
where Years_employed;

-- 2.For each role, find the average number of years employed by employees in that role 
-- Ans:
SELECT role,avg (years_employed)FROM employees 
group by role;

-- 3.Find the total number of employee years worked in each building 
-- Ans:
SELECT *, sum(Years_employed) FROM employees
group by building;


-- Exercise 11 — Tasks
--1. Find the number of Artists in the studio (without a HAVING clause) 
-- Ans:
SELECT role, count(role) FROM employees where role="Artist" ;

--2. Find the number of Employees of each role in the studio ✓
-- Ans:
SELECT role, count(role) FROM employees
group by role;

-- 23.Find the total number of years employed by all Engineers ✓
-- Ans:
SELECT role, sum(Years_employed) FROM employees where role="Engineer";

-- Exercise 12 — Tasks
-- 1.Find the number of movies each director has directed ✓
-- Ans:
SELECT Title , count(Director) FROM movies
group by Director;

-- 1.Find the total domestic and international sales that can be attributed to each director ✓
-- Ans:
SELECT Title, Director, sum(Domestic_sales+International_sales)
FROM movies
inner join Boxoffice 
on Id = Movie_id
group by director;

-- Exercise 13 — Tasks
-- 1.Add the studio's new production, Toy Story 4 to the list of movies (you can use any director) ✓
-- Ans:
INSERT INTO Movies 
VALUES(4,"Toy Story 4", "Andrew Stanton",2022,120)

-- 2.Toy Story 4 has been released to critical acclaim! It had a rating of 8.7, and made 340 million domestically and 270 million internationally. Add the record to the BoxOffice table. 
-- Ans:
INSERT INTO Boxoffice  
VALUES(4,8.7,340000000,270000000)

-- Exercise 14 — Tasks
--1. The director for A Bug's Life is incorrect, it was actually directed by John Lasseter ✓
-- Ans:
UPDATE Movies
SET Director="John Lasseter"
where id=2;

--2. Both the title and director for Toy Story 8 is incorrect! The title should be "Toy Story 3" and it was directed by Lee Unkrich ✓
-- Ans:
update movies
set title="Toy Story 3",
director="Lee Unkrich"
Where id=11;

-- 3.The year that Toy Story 2 was released is incorrect, it was actually released in 1999 ✓
-- Ans:
update movies
set Year=1999
where id=3;


-- Exercise 15 — Tasks
-- 1.This database is getting too big, lets remove all movies that were released before 2005. ✓
-- Ans:
Delete from movies where year<2005;

-- 2.Andrew Stanton has also left the studio, so please remove all movies directed by him. ✓
-- Ans:
Delete FROM movies where director="Andrew Stanton";

-- Exercise 16 — Tasks
-- 1.Create a new table named Database with the following columns:
Name A string (text) describing the name of the database
Version A number (floating point) of the latest version of this database
Download_count An integer count of the number of times this database was downloaded
This table has no constraints. ✓

-- Exercise 17 — Tasks
-- 1.Add a column named Aspect_ratio with a FLOAT data type to store the aspect-ratio each movie was released in. ✓
ALTER TABLE Movies
ADD Aspect_ratio FLOAT 

-- 2.Add another column named Language with a TEXT data type to store the language that the movie was released in. Ensure that the default for this language is English. ✓
ALTER TABLE Movies
ADD Language  TEXT 
Default English

-- Exercise 18 — Tasks
--1. We've sadly reached the end of our lessons, lets clean up by removing the Movies table ✓

DROP TABLE Movies ;

-- 2.And drop the BoxOffice table as well

DROP TABLE BoxOffice 
