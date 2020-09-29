Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do 
    resources :samples
    resources :friends, only: [:index, :update]
    get 'my_friends', to: 'friends#my_friends'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
