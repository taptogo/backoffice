module ApplicationHelper
 

def created_info(model)
    begin
      if !model.updated_by.nil?
        model.updated_by.name
      elsif !model.created_by.nil?
        model.created_by.name
      else
        ""
      end
    rescue
      ""
    end
end

def br_states
  [
   ['São Paulo', 'SP'],
    ['Acre', 'AC'],
    ['Alagoas', 'AL'],
    ['Amapá', 'AP'],
    ['Amazonas', 'AM'],
    ['Bahia', 'BA'],
    ['Ceará', 'CE'],
    ['Distrito Federal', 'DF'],
    ['Espírito Santo', 'ES'],
    ['Goiás', 'GO'],
    ['Maranhão', 'MA'],
    ['Mato Grosso', 'MT'],
    ['Mato Grosso do Sul', 'MS'],
    ['Minas Gerais', 'MG'],
    ['Pará', 'PA'],
    ['Paraába', 'PB'],
    ['Paraná', 'PR'],
    ['Pernambuco', 'PE'],
    ['Piauí', 'PI'],
    ['Rio de Janeiro', 'RJ'],
    ['Rio Grande do Norte', 'RN'],
    ['Rio Grande do Sul', 'RS'],
    ['Rondônia', 'RO'],
    ['Roraima', 'RR'],
    ['Santa Catarina', 'SC'],
    ['Sergipe', 'SE'],
    ['Tocantins', 'TO']
  ]
  end
  
   def sexos
    [
      ['Masculino','Masculino'],
      ['Feminino','Feminino']
    ]
   end

  def br_bancos
    [
      ["Banco do Brasil S.A.", "001"],
      ["Banco Santander S.A.", "033"],
      ["Caixa Economica Federal", "104"],
      ["Banco Bradesco S.A.", "237"],
      ["Itau Unibanco S.A.", "341"],
      ["HSBC Bank Brasil S.A.", "399"],
      ["Banco Safra S.A.", "422"],
      ["Banco Citibank S.A.", "745"],
      ["Banco Cooperativo Sicredi S.A.", "748"],
      ["Banco Cooperativo do Brasil S.A.", "756"]
    ]
   end
  
  def transfers
    [
      ["Semanal", "weekly"],
      ["Mensal", "monthly"],
      ["Diário", "daily"]
    ]
   end

  
 def icons
    File.readlines('icons.txt')
  end

  def openwebicons
    File.readlines('openweb.txt')
  end

  def nav_active(options = {})
    cumbs = request.fullpath.to_s
    paths = cumbs.split("/")
    found = false
    paths.each do |path|
      if !options[:warning].blank? and options[:warning].to_s == path
        found = true
      end
    end
    if found
      return "active" 
    end
      return ""
  end

  def notice_helper
    notice = ""
    flash.each do |name, msg|       
      if msg.length > 0 && msg.downcase.include?("sucesso")
        notice += "<div class='alert bg-green alert-dismissible'>
            <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button>
             <b>Sucesso</b> 
             #{ msg }  
          </div> "
      elsif msg.length > 0
        notice += "<div class='alert bg-red alert-dismissable'>
             <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button>
             <b>Erro!</b> 
             #{ msg }  
          </div> "
        end
    end

     html = <<-HTML
              #{ notice }
               HTML
            html.html_safe
  end  


  def notice_helper_login
    notice = ""
    flash.each do |name, msg|
     puts name       
     puts msg 
     if  msg.length > 0 
        notice += " 
            <script>
            $( document ).ready(function() {
            alert('@@');
            });
            </script>
          ".gsub("@@", msg)
      elsif msg.length > 0
        notice += " 
            <script>
            $( document ).ready(function() {
             alert('Você deve fazer seu login antes de continuar.');
            });
            </script>
          "
        end
    end
     html = <<-HTML
              #{ notice }
               HTML
            html.html_safe
  end  



  def layout_opts (user,d,path)
      notice = '<div class="btn-group"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">OPÇÕES <span class="caret"></span></button><ul class="dropdown-menu">'

       tail = "</ul></div>"

       show =  "<li><a href='/#{path}/#{d.id}' class='waves-effect waves-block'>Detalhes</a></li>"      
       edit =  "<li><a href='/#{path}/#{d.id}/edit' class='waves-effect waves-block'>Editar</a></li>"      
       remove =  "<li><a href='/#{path}/#{d.id}' data-confirm='Deseja Remover o Item?'' data-method='delete' rel='nofollow' class='waves-effect waves-block'>Remover</a></li>"      
      

        if path == "companies" || path == "participants"
            extra =  "<li><a href='javascript:addPoints(" + '"' + d.id + '")' + "'" + " class='waves-effect waves-block'>Adicionar Pontos</a></li>"      
        elsif path == "banners" || path == "plans" || path == "cards" || path == "modalities"
            show = ""
        elsif path == "timelines"
          extra =  "<li><a href='/timelineitens/new?timeline_id=#{d.id}' class='waves-effect waves-block'>Adicionar Item</a></li>"    
        elsif path == "galleries"
          extra =  "<li><a href='/galleryitens/new?gallery_id=#{d.id}' class='waves-effect waves-block'>Adicionar Item</a></li>"    
        elsif path == "timelineitens" || path == "galleryitens" || path == "menus"
            show = ""
        elsif path == "accounts"
              show = ""
        elsif  path == "app_users"
            edit = ""
            if d.blocked
              extra =  "<li><a href='/#{path}/unlock?id=#{d.id}' class='waves-effect waves-block'>Desbloquear Usuario</a></li>"      
            else
              extra =  "<li><a href='/#{path}/lock?id=#{d.id}' class='waves-effect waves-block'>Bloquear Usuario</a></li>"      
            end
            extra +=  "<li><a href='/#{path}/reset_pass?id=#{d.id}' class='waves-effect waves-block'>Resetar Senha</a></li>"      
        elsif  path == "super_admins"
            show = ""
            extra =  "<li><a href='/#{path}/reset_pass?id=#{d.id}' class='waves-effect waves-block'>Resetar Senha</a></li>"      
        elsif  path == "managers"
            show = ""
            extra =  "<li><a href='/#{path}/reset_pass?id=#{d.id}' class='waves-effect waves-block'>Resetar Senha</a></li>"      
        elsif  path == "sellers"
            show = ""
            extra =  "<li><a href='/#{path}/reset_pass?id=#{d.id}' class='waves-effect waves-block'>Resetar Senha</a></li>"      
        elsif path == "faqs" 
            show = ""
        elsif path == "maps"
            extra =  "<li><a href='/maps/build_graph?id=#{d.id}' class='waves-effect waves-block'>Montar grafo</a></li>"
        end

        html = <<-HTML
                #{ notice }
                #{ show }
                #{ extra }
                #{ edit }
                #{ remove }
                #{ tail }
                 HTML
        html.html_safe

    end

  def layout_opts_stores (d,path)
    notice = '<div class="btn-group">
              <button type="button" class="btn btn-default">Opções</button>
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu" role="menu">'

       str = '"' + d.id + '"'
       tail = " </ul></div>"

       map = ""
       if !d.coordinates.nil? && d.coordinates.count > 0
         map =  "<li><a href='https://www.google.com.br/maps/place/#{d.coordinates.last},#{d.coordinates.first}' target='_blank' ><i class='fa fa-map-marker'></i> Ver no Mapa</a></li>"               
       end

       areas =  "<li><a href='/payments?store=#{d.id}'><i class='fa fa-credit-card'></i> Pagamentos</a></li>"      
       hours =  "<li><a href='/hours?store=#{d.id}'><i class='fa fa-clock-o'></i> Horários de Atendimento</a></li>"      
       combos =  "<li><a href='/combos?store=#{d.id}'><i class='fa fa-cutlery'></i> Combos</a></li>"      
       sizes =  "<li><a href='/sizes?store=#{d.id}'><i class='fa fa-list'></i> Tamanhos</a></li>"      
       borders =  "<li><a href='/borders?store=#{d.id}'><i class='fa fa-list'></i> Bordas</a></li>"      
       pizzas =  "<li><a href='/discounts?store=#{d.id}'><i class='fa fa-dollar'></i> Economias</a></li>"      
       pizzas_doces =  "<li><a href='/sweet_pizzas?store=#{d.id}'><i class='fa fa-birthday-cake'></i> Pizzas Doces</a></li>"      
       bebidas =  "<li><a href='/beverages?store=#{d.id}'><i class='fa fa-beer'></i> Bebidas</a></li>"      
       banners = "<li><a href='/banners?store=#{d.id}'><i class='fa fa-picture-o'></i> Fotos</a></li>"      
       show =  "<li><a href='/#{path}/#{d.id}'><i class='fa fa-search'></i> Detalhes</a></li>"      
       edit =  "<li><a href='/#{path}/#{d.id}/edit'><i class='fa fa-pencil'></i> Editar</a></li>"      
       remove = "<li><a href='/#{path}/#{d.id}' data-confirm='Deseja Remover o Estabelecimento?'' data-method='delete' rel='nofollow'><i class='fa fa-trash-o'></i> Remover</a></li>"      
   

        html = <<-HTML
                #{ notice }
                #{ show }
                #{ pizzas }
                #{ hours }
                #{ areas }
                #{ banners }
                #{ map }
                #{ edit }
                #{ remove }
                #{ tail }
                 HTML
        html.html_safe

    end

    def analytics_helper
      html =   '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-116777117-1"></script>'
      html +=    '<script>'
      html +=    'window.dataLayer = window.dataLayer || [];'
      html +=    'function gtag(){dataLayer.push(arguments);}'
      html +=    "gtag('js', new Date());"
      html +=    "gtag('config', 'UA-116777117-1');"
      html +=    '</script>'


        html = <<-HTML
          #{ html }
        HTML
        html.html_safe

    end


end
