CREATE DATABASE SUPER_LEAGUE_DB
COLLATE SQL_Latin1_General_CP1_CI_AS;


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TEAMS](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[year] [int] NULL,
	[city] [nvarchar](50) NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TEAMS] ADD  CONSTRAINT [PK_TEAMS] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO


CREATE TABLE [dbo].[COACHES] (
    [id]         INT           IDENTITY (1, 1) NOT NULL,
    [first_name] NVARCHAR (50) NULL,
    [last_name]  INT           NULL,
    [team_id]    INT           NULL,
    CONSTRAINT [PK_COACHES] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [FK_COACHES_TEAMS] FOREIGN KEY ([team_id]) REFERENCES [dbo].[TEAMS] ([id])
);


CREATE TABLE [dbo].[PRESIDENTS] (
    [id]         INT           IDENTITY (1, 1) NOT NULL,
    [first_name] NVARCHAR (50) NULL,
    [last_name]  NVARCHAR (50) NULL,
    [team_id]    INT           NULL,
    CONSTRAINT [PK_PRESIDENTS] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [FK_PRESIDENTS_TEAMS] FOREIGN KEY ([team_id]) REFERENCES [dbo].[TEAMS] ([id])
);

CREATE TABLE [dbo].[STADIUM] (
    [id]       INT IDENTITY (1, 1) NOT NULL,
    [name]     INT NULL,
    [capacity] INT NULL,
    [team_id]  INT NULL,
    CONSTRAINT [PK_STADIUM] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [FK_STADIUM_TEAMS] FOREIGN KEY ([team_id]) REFERENCES [dbo].[TEAMS] ([id])
);


CREATE TABLE [dbo].[PLAYERS] (
    [id]           INT           IDENTITY (1, 1) NOT NULL,
    [first_name]   NVARCHAR (50) NULL,
    [last_name]    NVARCHAR (50) NULL,
    [birth_date]   DATE          NULL,
    [nationality]  NVARCHAR (50) NULL,
    [position]     NVARCHAR (50) NULL,
    [market_value] INT           NULL,
    [team_id]      INT           NULL,
    CONSTRAINT [PK_PLAYERS] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [FK_PLAYERS_TEAMS] FOREIGN KEY ([team_id]) REFERENCES [dbo].[TEAMS] ([id])
);

CREATE TABLE [dbo].[MATCHES] (
    [id]              INT IDENTITY (1, 1) NOT NULL,
    [home_team_id]    INT NULL,
    [away_team_id]    INT NULL,
    [home_team goals] INT NULL,
    [away_team_goals] INT NULL,
    CONSTRAINT [PK_MATCHES] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [FK_MATCHES_AWAY_TEAM] FOREIGN KEY ([away_team_id]) REFERENCES [dbo].[TEAMS] ([id]),
    CONSTRAINT [FK_MATCHES_HOME_TEAM] FOREIGN KEY ([home_team_id]) REFERENCES [dbo].[TEAMS] ([id])
);


CREATE TABLE [dbo].[MATCHES_PLAYERS] (
    [match_id]     INT IDENTITY (1, 1) NOT NULL,
    [player_id]    INT NOT NULL,
    [time]         INT NULL,
    [goals]        INT NULL,
    [assists]      INT NULL,
    [yellow_cards] INT CONSTRAINT [DEFAULT_MATCHES_PLAYERS_yellow_cards] DEFAULT 0 NULL,
    [red_card]     INT CONSTRAINT [DEFAULT_MATCHES_PLAYERS_red_card] DEFAULT 0 NULL,
    CONSTRAINT [PK_MATCHES_PLAYERS] PRIMARY KEY CLUSTERED ([match_id] ASC, [player_id] ASC),
    CONSTRAINT [FK_MATCHES_PLAYERS_MATCHES] FOREIGN KEY ([match_id]) REFERENCES [dbo].[MATCHES] ([id]),
    CONSTRAINT [FK_MATCHES_PLAYERS_PLAYERS] FOREIGN KEY ([player_id]) REFERENCES [dbo].[PLAYERS] ([id])
);

