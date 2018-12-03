class PasswordController <  ApplicationController



   # PUT /menus/1.json
  def change_post
    @usuario = User.find(current_user.id)
    
      p = params[:user]
    if current_user.isManager? && p == []
      p = params[:manager]
    elsif current_user.isSuperAdmin? && p == []
      p = params[:super_admin]
    end

    if p[:password] == p[:password_confirmation] && p[:password].length >= 8
        p = p.permit(:password, :password_confirmation, :current_password)
        if @usuario.update_with_password(p)
          @usuario = User.find(current_user.id)
          sign_in @usuario, :bypass => true
          redirect_to("/change_password", :flash => { :notice_success => "Senha alterada com sucesso." })   
        else
          redirect_to("/change_password", :flash => { :notice_error => "Insira a senha atual corretamente." })   
        end
    else
      redirect_to("/change_password", :flash => { :notice_error => "A nova senha deve ter 8 ou mais caracteres." })   
    end
  end


end