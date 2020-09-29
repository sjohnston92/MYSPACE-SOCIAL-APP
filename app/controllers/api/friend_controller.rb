class Api::FriendController < ApplicationController
  before_action :authenticate_user!
  def index
    # we need a presentation of possible friends, or a sample of possible friends, top 8 might be good option, or a sample of all friends.
    render json: User.friend.all
  end

  def update
    # Occasion where we need to have a single friend updated
    current_user.liked_friend << params[:id].to_i
    current_user.save
  end

  def my_friends
    render json: User.liked(current_user.liked_friend)
  end
end
