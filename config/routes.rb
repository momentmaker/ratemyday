Rails.application.routes.draw do
  root 'welcome#index'

  resources :days
  resource :session, only: [:new, :create, :destroy]

  get "/auth/:provider/callback", to: "sessions#create"
  get "/auth/failure", to: "sessions#failure"
  get "/sign_out", to: "sessions#destroy", as: "user_sign_out"
  get "/auth/twitter", as: "user_sign_in"

end
