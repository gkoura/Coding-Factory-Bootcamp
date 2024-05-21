CREATE TABLE borrowers
 (bid INTEGER PRIMARY KEY,
  fname VARCHAR(30), 
  lname VARCHAR(30),
  sex VARCHAR(1),
  profession VARCHAR(30)
 );

CREATE TABLE authors
 (authid INTEGER PRIMARY KEY, 
  lname VARCHAR(30) NOT NULL,
  fname VARCHAR(20)
  );

 CREATE TABLE publishers
  (pubid INTEGER PRIMARY KEY, 
   publisher VARCHAR (100) NOT NULL
   );
   
 CREATE TABLE subject_terms
   ( stid INTEGER PRIMARY KEY,
     sterm VARCHAR(50) NOT NULL
   );

CREATE TABLE books
( bookid INTEGER PRIMARY KEY, 
  title VARCHAR(200) NOT NULL,
  isbn  VARCHAR(14), 
  edition VARCHAR(10),
  pyear INTEGER, 
  place VARCHAR(30),
  pubid  INTEGER,
  CONSTRAINT fk_pubid FOREIGN KEY (pubid) REFERENCES publishers(pubid)
);

CREATE TABLE copies
( barcode INTEGER PRIMARY KEY, 
  bookid  INTEGER, 
  bid     INTEGER,
  location VARCHAR(10),
  cstatus  VARCHAR(20), 
  price   NUMERIC(5,2),
  loan_date DATE,
  return_date DATE,
          CONSTRAINT fk_bookid FOREIGN KEY (bookid) REFERENCES books(bookid)
          
);

CREATE TABLE book_author 
(
  bookid INTEGER, 
  authid INTEGER,
        PRIMARY KEY(bookid,authid),
        CONSTRAINT fk1_bookid FOREIGN KEY (bookid) REFERENCES books(bookid),
        CONSTRAINT fk_authid0 FOREIGN KEY (authid) REFERENCES authors (authid)
);

CREATE TABLE book_st 
(
  bookid INTEGER, 
  stid INTEGER,
        PRIMARY KEY(bookid,stid),
        CONSTRAINT fk2_bookid FOREIGN KEY (bookid) REFERENCES books(bookid),
        CONSTRAINT fk2_stid FOREIGN KEY (stid) REFERENCES subject_terms (stid)
);



