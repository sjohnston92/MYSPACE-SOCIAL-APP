Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do 
    resources :samples
    resources :posts, only: [:index,:create]
    resources :friends, only: [:index, :show,:update]
    get 'my_friends', to: 'friends#my_friends'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
