
DROP procedure Rate_flights_1
CREATE PROCEDURE Rate_flights_1 AS
DECLARE @price numeric
DECLARE @fno varchar(10)
BEGIN 
DECLARE cursor_flights CURSOR 
 FOR SELECT fno, price FROM flights;

OPEN cursor_flights;
FETCH NEXT FROM cursor_flights INTO @fno, @price 
WHILE @@FETCH_STATUS=0 
BEGIN
   IF @price<=500 
	    PRINT @fno+': '+CAST(@price AS VARCHAR(12)) + ' - Φθηνή'
   ELSE 
     IF @price<=1500  
	    PRINT @fno+': '+CAST(@price AS  VARCHAR(12)) + ' - Κανονική'
      ELSE 
	     PRINT @fno+': '+CAST(@price AS VARCHAR(12)) + ' - Ακριβή'
  
	FETCH NEXT FROM cursor_flights INTO @fno, @price
END;
 CLOSE cursor_flights;
 DEALLOCATE cursor_flights;
END

execute rate_flights_1
