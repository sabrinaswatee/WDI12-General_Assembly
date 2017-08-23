class AddPasswordDigestToZombie < ActiveRecord::Migration[5.1]
  def change
    add_column :zombies, :password_digest, :text
  end
end
