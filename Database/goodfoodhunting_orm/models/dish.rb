
class Dish < ActiveRecord::Base

  def dish_type_name
    if self.dish_type_id
      DishType.find(self.dish_type_id).name
    else
      'no type selected'
    end
  end

end
