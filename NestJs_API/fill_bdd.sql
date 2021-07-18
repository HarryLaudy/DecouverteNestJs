 USE idruide;

load data local infile '/home/hlaudy/NestJs_API/fr-en-annuaire-education.csv'
into table annuaire
COLUMNS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
ESCAPED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;
