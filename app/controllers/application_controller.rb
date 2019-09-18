# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :authenticate_user!, except: [:password]

  before_action :check_user_redirect, except: [:password]
  before_action :set_raven_context

  def check_user_redirect
    if !current_user.nil? && (!current_user.isSuperAdmin? && !current_user.isManager?)
      sign_out current_user
      render_password
    end
  end

  def check_super_admin
    if !current_user.nil? && !current_user.isSuperAdmin?
      sign_out current_user
      redirect_to '/'
    end
  end

  def redirect_success(message, controller, action)
    redirect_to({ controller: controller, action: action }, flash: { notice_success: message })
  end

  def redirect_success_home(message)
    redirect_to('/home', flash: { notice_success: message })
  end

  def redirect_success_show(message, controller, id)
    redirect_to({ controller: controller, action: :show, id: id }, flash: { notice_success: message })
  end

  def redirect_success_index_show(message, controller, id)
    redirect_to({ controller: controller, action: :index, store: id }, flash: { notice_success: message })
end

  def redirect_success_index_show2(message, controller, id)
    redirect_to({ controller: controller, action: :index, especialidade: id }, flash: { notice_success: message })
end

  def redirect_error(message, controller, action)
    redirect_to({ controller: controller, action: action }, flash: { notice_error: message })
  end

  def sendEmail(data, nome, descricao)
    # Aluno.all.each do |aluno|
    #  DatasMailer.datas(aluno.email,data, nome, descricao).deliver
    # end
  end

  def render_404
    respond_to do |format|
      format.html { render file: "#{Rails.root}/public/404.html", status: :not_found }
      format.xml  { head :not_found }
      format.any  { head :not_found }
    end
  end

  def render_password
    respond_to do |format|
      format.html { render file: "#{Rails.root}/public/password.html", status: :not_found }
      format.xml  { head :not_found }
      format.any  { head :not_found }
    end
  end

  private

  def set_raven_context
    Raven.user_context(id: session[:current_user_id]) # or anything else in session
    Raven.extra_context(params: params.to_unsafe_h, url: request.url)
  end
end
