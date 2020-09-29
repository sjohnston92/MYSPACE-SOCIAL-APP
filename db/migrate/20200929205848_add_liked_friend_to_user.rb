class AddLikedFriendToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :liked_friend, :text
  end
end
