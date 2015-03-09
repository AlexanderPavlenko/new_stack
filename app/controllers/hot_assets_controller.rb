class HotAssetsController < ActionController::Base

  def show
    redirect_to view_context.asset_path(params[:filename])
  end
end
