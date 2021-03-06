# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User


  serialize :liked_friend, Array

  has_many :posts


  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    Friend.where("id IN (?)", ids)
  end


  def self.random_friends(ids)
    ids = ids.empty? ? [0] : ids
    Friend.where("id NOT IN (?)", ids).order("RANDOM()")
  end


end




   