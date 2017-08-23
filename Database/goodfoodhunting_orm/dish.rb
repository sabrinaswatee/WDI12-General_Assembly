
class Dish

  def self.all
    conn = PG.connect(dbname: 'goodfoodhunting')
    result = conn.exec(sql)
    conn.close
    result
  end

end
