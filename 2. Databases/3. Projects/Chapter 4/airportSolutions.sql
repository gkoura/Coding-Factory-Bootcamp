/* 1 */

select * from flights 
 where depDate='2018-05-01' and toCity='Τορόντο'


 /* 2 */

 select * from flights 
 where distance between 900 and 1500
 order by distance 

 /* 3 */

 select tocity, count(*) 
 from flights
 where depDate between '2018-05-01' and '2018-05-30'
 group by tocity

/* 4 */

select tocity, count(*) 
 from flights 
group by tocity
having count(*) >=3


/* 5 */

select firstname, lastname, count(certified.empid)   
 from employees, certified 
 where employees.empid=certified.empid
 group by firstname, lastname 
 having count(certified.empid) >=3


/* 6 */

select sum(salary) from employees

/* 7 */

select sum (salary) from employees 
where exists (select * from  certified where employees.empid=certified.empid


/* 8 */

select sum (salary) from employees 
where NOT exists (select * from  certified where employees.empid=certified.empid)


/* 9 */

select aname from aircrafts where crange >= 
(select distance 
  from flights 
where fromcity='Αθήνα' and toCity='Μελβούρνη')


/* 10 */

select distinct lastname, firstname 
 from employees, certified, aircrafts 
 where employees.empid=certified.empid and
       certified.aid=aircrafts.aid and 
	   aname like  'Boeing%' 


/* 11 */

select  lastname, firstname 
 from employees, certified, aircrafts 
 where employees.empid=certified.empid and
       certified.aid=aircrafts.aid and 
	   crange > 3000
	   
EXCEPT 

select  lastname, firstname 
 from employees, certified, aircrafts 
 where employees.empid=certified.empid and
       certified.aid=aircrafts.aid and 
	   aname like  'Boeing%' 

/* 12 */

select  lastname, firstname
 from employees 
 where salary= (select max(salary) from employees)


/* 13 */

select  lastname, firstname, salary
 from employees 
 where salary= (select max(salary) from employees 
                  where salary <> (SELECT max (salary) from employees))


/* 14 */

/* Πρώτος τρόπος */

select  distinct aid, aname 
 from aircrafts 
 where not exists (select  * 
  from  certified, employees 
 where  aircrafts.aid=certified.aid and certified.empid=employees.empid and
	   salary < 6000) 

/* Δεύτερος τρόπος */
select  aid, aname 
 from aircrafts 
 
 except 
 
 select  aircrafts.aid, aircrafts.aname 
  from aircrafts, certified, employees 
 where aircrafts.aid=certified.aid and 
       certified.empid=employees.empid and 
	   salary < 6000 

/* 15 */

select certified.empid, max (aircrafts.crange)
 from certified, aircrafts
 where certified.aid=aircrafts.aid
 group by certified.empid
 having count(*) >= 3


/* 16 */

select distinct firstname, lastname, salary 
 from employees
 where salary < (select min(price) from flights where tocity='Μελβούρνη')

/* 17 */

select lastname, firstname, salary 
  from employees
  where empid not in (select distinct certified.empid from certified) and salary > ( select avg(salary) from employees where empid in (select distinct empid from certified))


 /* Δ ΟΨΕΙΣ */

 /* 18 */

 create view pilots as 
  select distinct employees.* 
    from employees, certified where employees.empid = certified.empid

create view others as 
	select distinct employees.* 
    from employees, certified where employees.empid not in (select empid from  certified) 



select sum (salary) from pilots



select sum (salary) from others



select * from others where salary > (select avg(salary) from pilots)

/* 19 */

 create view nonstop as 
   select aname,crange, fno, fromcity, tocity, distance
    from aircrafts, flights 
   where crange >= distance 

   select aname, count(*) from nonstop group by aname
   

   /* Ε ΔΙΑΔΙΚΑΣΙΕΣ */

   /*20*/

CREATE PROCEDURE Rate_flights AS

DECLARE @price numeric
DECLARE @minfno varchar(10)

SELECT @minfno=min(fno) FROM flights

WHILE @minfno is NOT NULL
BEGIN
   SET @price= (SELECT price FROM flights WHERE flights.fno=@minfno) 
   
IF (@price is NOT NULL) 
BEGIN
  --Υλοποίηση με χρήση case
  SELECT CASE
    WHEN @price<=500 THEN @minfno+': '+CAST(@price AS VARCHAR(12)) + ' - Φθηνή'
    WHEN @price<=1500 THEN @minfno+': '+CAST(@price AS  VARCHAR(12)) + ' - Κανονική'
    ELSE @minfno+': '+CAST(@price AS VARCHAR(12)) + ' - Ακριβή'
  END
END
SELECT @minfno=min(fno) FROM flights where @minfno < fno
END


execute rate_flights


/* 21 */

drop procedure Pilots_certification
create procedure Pilots_Certification
@lastname varchar(30), @firstname varchar(30), @empid int, @name varchar(20), @aid int
as
declare @pilot int
declare @aircraft int
declare @certification bit
begin
	select @pilot=empid from employees where employees.empid=@empid
	select @aircraft=aid from aircrafts where aid=@aid
	begin
		if(not exists(select * from certified where empid=@empid and aid=@aid))
		begin
			if(@pilot is null) insert into employees values (@empid, @lastname, @firstname, 1)
			if(@aircraft is null) insert into aircrafts values (@aid, @name, 0)
			insert into certified values (@empid, @aid)
		end
		else
		begin
			print 'Ο συγκεκριμένος πιλότος είναι ήδη πιστοποιημένος στην λειτουργία του συγκεκριμένου αεροσκάφους.'
		end
	end
end


 /* ΣΤ ΠΥΡΟΔΟΤΕΣ */

   /*22*/

create trigger Increase_salary_of_pilots
on certified
after insert
as
begin
	declare @empid int
	set @empid = (select empid from INSERTED)
	if(3=(select count(aid) from certified where empid=@empid))
	begin
		update employees set salary= salary *1.1  where empid=@empid
	end
end

/* 23 */

create trigger History_of_tickets
on flights
after update
as if update(price)
begin
	declare @fno varchar(5)
	select @fno = (select fno from deleted)
	declare @price_old int
	select @price_old = (select price from deleted)
	declare @price_new int
	select @price_new = (select price from inserted)
	insert into flight_history values(@fno, user_name(), getdate(), @price_old, @price_new)
end