SELECT firstname, lastname, city
FROM customers;
-- prints selected columns from customers table 

SELECT *
FROM customers;
-- prints ALL columns from customers

SELECT city 
from customers
ORDER BY city ASC;
-- prints in ascending order (alphabetically) of city

SELECT DISTINCT city 
from customers;
-- prints unique values with ascending order by default

SELECT firstname, lastname
FROM customers
WHERE city = 'Αθήνα';
-- WHERE is a filtering method
-- single quotes for strings

SELECT DISTINCT firstname, lastname, city
FROM customers
WHERE city = 'Αθήνα';
-- prints everything coz distint refers to all selected columns

SELECT city, lastname, firstname
FROM customers  
ORDER BY city, lastname DESC;
-- double order criteria. first orders by city asc (default) and then by last name with descending order

---------------------------------------------------------------------------------------------------------------------

SELECT * 
FROM accounts
WHERE balance >= 5000 AND balance <=20000
ORDER BY balance DESC;
-- AND operator (logical) used with relational operators to give 2 filters 

SELECT * 
FROM accounts 
WHERE balance BETWEEN 5000 AND 20000;
-- BETWEEN [] replaces the double relational operators 

------------------------------------------------------------------------------------------------------------------------

SELECT lastname, firstname, accno
FROM customers, accounts;
-- cartesian product between two tables

SELECT * FROM accounts;
SELECT * FROM customers;


SELECT lastname, firstname, accno
FROM customers, depositors
WHERE customers.cid=depositors.cid AND city = 'Αθήνα'
ORDER BY lastname
-- one way to join tables is to use where but its not the right way
-- we use customers.cid coz cid is located in two different tables


SELECT lastname, firstname, accounts.accno, balance
FROM customers, depositors, accounts
WHERE customers.cid = depositors.cid 
AND depositors.accno = accounts.accno
ORDER BY lastname;
-- if we wanted to call accounts table we need a double where for the middle table depositors


---------------------------------------------------------------------------------------------------------------------

SELECT lastname, firstname, accno 
FROM customers, depositors
WHERE customers.cid = depositors.cid 
ORDER BY lastname;


SELECT lastname, firstname, accno 
FROM customers INNER JOIN depositors
on customers.cid = depositors.cid 
ORDER BY lastname;
-- the 2 above queries are the same but the most correct way is the second!


SELECT firstname, lastname, lnum 
FROM customers LEFT JOIN borrowers 
on customers.cid = borrowers.cid
ORDER BY lnum desc;
-- this is a good example why join is stronger coz now we can print mismatches as well


SELECT firstname, lastname, loans.lnum, amount 
FROM customers INNER JOIN borrowers 
on customers.cid = borrowers.cid
INNER JOIN loans 
on borrowers.lnum = loans.lnum
ORDER BY lastname;
-- double join. second JOIN joins borrowers (joined with customers on first JOIN) with loans

