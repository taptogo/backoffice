class PackagesController < ApplicationController

# GET /participants.json
  def index
    respond_to do |format|
      format.html 
      format.json { render json: PackagesDatatable.new(view_context, current_user, params[:from], params[:to], params[:offer_id]) }
    end
  end    



end    
