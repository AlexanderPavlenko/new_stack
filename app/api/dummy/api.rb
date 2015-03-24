module Dummy
  class API < Grape::API
    version 'v1', using: :header, vendor: 'dummy'
    format :json
    prefix :api

    helpers do
      def current_user
        @current_user ||= begin
          if env['HTTP_AUTHORIZATION']
            token = env['HTTP_AUTHORIZATION'].match(/JWT token="(.+)"/)[1]
            if token
              data = JWT.decode(token, Rails.application.secrets.secret_key_base)[0]
              User.find(data[:user_id])
            end
          end
        rescue => ex
          Rails.logger.debug ex
          nil
        end
      end

      def authenticate!
        error!('401 Unauthorized', 401) unless current_user
      end
    end

    desc "Return a JWT token."
    params do
      requires :user, type: Hash do
        requires :email, type: String, desc: 'Your email.'
        requires :password, type: String, desc: 'Your password.'
      end
    end
    post :sign_in do
      if params[:user][:email] == 'example@example.com' && params[:user][:password] == 'example'
        {jwt: JWT.encode(
          {
            exp: Time.current.to_i + 14.days.to_i,
            user_id: 1,
          },
          Rails.application.secrets.secret_key_base
        )}
      else
        error!('401 Unauthorized', 401)
      end
    end

    post :sign_out do
      # blacklist token until its expiration?
    end
  end
end
