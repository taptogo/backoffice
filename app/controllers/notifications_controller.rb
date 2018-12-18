class NotificationsController < ApplicationController
  before_action :set_notification, only: [:show, :edit, :update, :destroy]

  # GET /notifications
  def index
    respond_to do |format|
      format.html 
      format.json { render json: NotificationsDatatable.new(view_context, current_user) }
    end    
  end

  # GET /notifications/1
  def show
  end

  # GET /notifications/new
  def new
    @notification = Notification.new
  end

  # GET /notifications/1/edit
  def edit
  end

  # POST /notifications
  def create
    @notification = Notification.new(notification_params)

    if @notification.users.count == 0
      @notification.users = User.all
    end
    
    if @notification.save
      redirect_to notifications_url, notice: 'Notificação criada com sucesso.'
    else
      render :new
    end
  end


  # DELETE /notifications/1
  def destroy
    @notification.destroy
    redirect_to notifications_url, notice: 'Notificação removida com sucesso.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_notification
      @notification = Notification.find(params[:id])
    end

  # Only allow a trusted parameter "white list" through.
    def notification_params
      params.require(:notification).permit(:title, :message, :fireDate, user_ids: [])
    end


end
