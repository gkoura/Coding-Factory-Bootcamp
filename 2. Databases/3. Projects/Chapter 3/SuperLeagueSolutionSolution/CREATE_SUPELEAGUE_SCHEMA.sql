CREATE TABLE CITIES
(CityID int PRIMARY KEY, 
 City VARCHAR(50) NOT NULL, 
 );
 
CREATE TABLE STADIUMS
(StadiumID int PRIMARY KEY, 
 StadiumName VARCHAR(100) NOT NULL, 
 ); 

CREATE TABLE NATIONALITIES
(NationalityID int PRIMARY KEY, 
 Nationality VARCHAR(50) NOT NULL, 
 );

CREATE TABLE POSITIONS
(PositionID int PRIMARY KEY, 
 Position VARCHAR(50) NOT NULL, 
 );

CREATE TABLE TEAMS
(TeamID INT PRIMARY KEY, 
 TeamName VARCHAR(50) NOT NULL,
 YearFounded INT NOT NULL,
 CityID INT FOREIGN KEY REFERENCES CITIES(CityID),
 StadiumID INT FOREIGN KEY REFERENCES STADIUMS(StadiumID), 
 PresidentFname VARCHAR(30),
 PresidentLname VARCHAR(30),
 CoachFname VARCHAR(30),
 CoachLname VARCHAR(30)
);

CREATE TABLE PLAYERS
(PlayerID int PRIMARY KEY, 
 FirstName VARCHAR(50),
 LastName VARCHAR(50) NOT NULL,
 BirthDate DATE,
 NatinalityID INT FOREIGN KEY REFERENCES NATIONALITIES(NationalityID),
 PositionID INT FOREIGN KEY REFERENCES POSITIONS(PositionID), 
 CurrentValue INT,
 TeamID INT FOREIGN KEY REFERENCES TEAMS(TeamID)
);

CREATE TABLE MATCHES
(MatchID int PRIMARY KEY, 
 MatchDate DATE,
 HomeTeamID INT FOREIGN KEY REFERENCES TEAMS(TeamID),
 AwayTeamID INT FOREIGN KEY REFERENCES TEAMS(TeamID),
 HomeTeamsGoals INT,
 AwayTeamsGoals INT
);

CREATE TABLE PARTICIPATIONS
(MatchID int FOREIGN KEY REFERENCES MATCHES(MatchID),
 PlayerID int FOREIGN KEY REFERENCES PLAYERS(PlayerID),
 Goals INT, 
 Assists INT, 
 YelloCards INT,
 RedCards INT, 
 PRIMARY KEY (MatchID, PlayerID)
);