
require 'pg'

db_conn = PG.connect(:dbname => 'nba_db')
# db_conn = PG.connect(:dbname => 'nba_db', :host => 'localhost')

file = File.new("data.csv", "a+")

file.each do |line|
  player = line.split(",")
  name = player[0].gsub("'","")
  age = player[1]
  team = player[2]
  games_played = player[3]
  points = player[4]

  sql  = "INSERT INTO players (name, age, team, games, points)"
  sql += "VALUES ( '#{name}', '#{age}', '#{team}', '#{games_played}', '#{points}');"

  db_conn.exec(sql)

end

file.close

db_conn.close

=begin
1. SELECT * FROM players WHERE team = 'NYK';
2. SELECT * FROM players WHERE team = 'IND' AND age < 26;
3. SELECT * FROM players ORDER BY points DESC;
4. SELECT name, points/games FROM players ORDER BY points/games DESC LIMIT 20;
5. SELECT AVG(age) FROM players # 26.6443514...
   SELECT SUM(age)/MAX(id) FROM players # 26
6. SELECT AVG(age) FROM players WHERE team = 'OKC';
7. SELECT AVG(age) FROM players WHERE games > 40;
8. SELECT team, SUM(points) AS total FROM players GROUP BY team ORDER BY total DESC;

1. SELECT age, SUM(points)/SUM(games) FROM players GROUP BY age ORDER BY age;
2. team and the number of players who score above 12 points per game on that team, ordered from most to least ** cannot group by team?? how to display no. of teams grouped as one??

SELECT team, COUNT(*) AS count FROM players WHERE points/games > 12 GROUP BY team (ORDER BY points/games DESC??);


