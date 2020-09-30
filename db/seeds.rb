# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seed are being generated, hold on a sec..."

Friend.destroy_all
100.times do
    name = Faker::Name.unique.name
    age = 20 + Random.rand(11)
    bio = Faker::GreekPhilosophers.quote

    Friend.create(name: name, age: age, bio: bio)
end

10.times do
    body = Faker::TvShows::DumbAndDumber.quote

    Post.create(body: body)
    puts 'some posts were created'
end

puts Friend.all.length 
puts "^ # Seed created"


# User.each.5.times do |n|
#     body = Faker::TvShows::DumbAndDumber.quote

#     User.posts.create(body: body)