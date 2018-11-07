# ClientSideValidations Initializer


#Uncomment the following block if you want each input field to have the validation messages attached.
 ActionView::Base.field_error_proc = Proc.new do |html_tag, instance|
   unless html_tag =~ /^<label/
     old_html = html_tag
     old_html += "<label id='name-error' class='error' for='name'>Erro #{instance.error_message.first}.</label>".html_safe
     %{#{old_html}}.html_safe
   else
     %{<div class="form-line error">#{html_tag}</div>}.html_safe
   end
 end

