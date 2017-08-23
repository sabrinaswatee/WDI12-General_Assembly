Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :dishes
  # what's generated behind the scene
  # get '/dishes', to: 'dishes#index'
  # post '/dishes', to: 'dishes#create'
  # get '/dishes/new', to: 'dishes#new'
  # get '/dishes/:id', to: 'dishes#show'
  # get '/dishes/:id/edit', to: 'dishes#edit'
  # delete '/dishes/:id', to: 'dishes#destroy'

  get '/about', to: 'pages#about'

  resources :reviews, only: [:new, :create]
  # get '/reviews/new', to: 'reviews#new'
  # post '/reviews', to: 'reviews#create'

end
