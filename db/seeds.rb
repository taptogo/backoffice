# u = SuperAdmin.new
# u.name = "admin"
# u.email = "admin@gmail.com"
# u.password = "12345678"
# u.password_confirmation = "12345678"
# u.save(validate: false)

json = JSON.parse(' [{"code":1,"name":"BANCO DO BRASIL S.A.", "default_color" : "#EDC800"},
  {"code":2,"name":"BANCO CENTRAL DO BRASIL-BACEN"},
  {"code":3,"name":"BANCO DA AMAZONIA S.A."},
  {"code":4,"name":"BANCO DO NORDESTE BRASIL S/A"},
  {"code":7,"name":"BNDES"},
  {"code":8,"name":"BANCO MERIDIONAL DO BRASIL S/A"},
  {"code":20,"name":"BANCO DO ESTADO DE ALAGOAS S.A."},
  {"code":21,"name":"BANCO DO ESTADO DO ESPIRITO SANTO S/A"},
  {"code":22,"name":"BANCO DE CREDITO REAL DE MINAS GERAIS S.A."},
  {"code":24,"name":"BANCO DO ESTADO DE PERNAMBUCO S.A."},
  {"code":25,"name":"BANCO ALFA S.A."},
  {"code":26,"name":"BANCO DO ESTADO DO ACRE S.A."},
  {"code":27,"name":"BANCO DO ESTADO DE SANTA CATARINA S.A."},
  {"code":28,"name":"BANCO DO ESTADO DA BAHIA S.A."},
  {"code":29,"name":"BANCO DO ESTADO DO RIO DE JANEIRO S.A."},
  {"code":30,"name":"PARAIBAN - BCO. DO ESTADO DA PARAIBA"},
  {"code":31,"name":"BANCO DO ESTADO DE GOIAS S.A."},
  {"code":32,"name":"BANCO DO ESTADO DE MATO GROSSO S.A."},
  {"code":33,"name":"BANCO SANTANDER BRASIL S.A.", "default_color" : "#EC0000"},
  {"code":34,"name":"BANCO DO ESTADO DO AMAZONAS S.A."},
  {"code":35,"name":"BANCO DO ESTADO DO CEARA S.A."},
  {"code":36,"name":"BANCO DO ESTADO DO MARANHAO S.A."},
  {"code":37,"name":"BANCO DO ESTADO DO PARA S.A."},
  {"code":38,"name":"BANCO DO ESTADO DO PARANA S.A."},
  {"code":39,"name":"BANCO DO ESTADO DO PIAUI S.A."},
  {"code":40,"name":"BANCO CARGILL S.A."},
  {"code":41,"name":"BANCO DO ESTADO DO RIO GRANDE DO SUL S.A."},
  {"code":45,"name":"BANCO OPPORTUNITY S.A."},
  {"code":47,"name":"BANCO DO ESTADO DO SERGIPE S.A."},
  {"code":48,"name":"BANCO DO ESTADO DE MINAS GERAIS S.A."},
  {"code":62,"name":"BANCO1.NET S.A"},
  {"code":63,"name":"BANCO IBI S.A. BANCO MÚLTIPLO"},
  {"code":65,"name":"LEMON BANK BANCO MÚLTIPLO S.A."},
  {"code":69,"name":"BANCO CREFISA"},
  {"code":70,"name":"BRB-BANCO DE BRASILIA S.A."},
  {"code":72,"name":"BANCO RURAL MAIS S.A."},
  {"code":74,"name":"BANCO J. SAFRA S.A."},
  {"code":77,"name":"BANCO INTERMEDIUM S.A."},
  {"code":104,"name":"CAIXA ECONOMICA FEDERAL", "default_color" : "#185E9C"},
  {"code":106,"name":"BANCO ITABANCO S/A"},
  {"code":107,"name":"BANCO BBM S/A"},
  {"code":109,"name":"BANCO CREDIBANCO S.A."},
  {"code":116,"name":"BNL BANCO DE INVESTIMENTOS S/A"},
  {"code":148,"name":"MULTI BANCO S.A."},
  {"code":151,"name":"NOSSA CAIXA-NOSSO BANCO S.A."},
  {"code":153,"name":"CAIXA ECONOMICA DO ESTADO DO RIO GRANDE DO SUL"},
  {"code":165,"name":"BANCO NORCHEM S.A."},
  {"code":166,"name":"BANCO INTER-ATLANTICO S.A."},
  {"code":168,"name":"BANCO CCF BRASIL S/A"},
  {"code":171,"name":"BANCO DE CRED E COMERC. DE INVEST. S.A."},
  {"code":175,"name":"CONTINENTAL BANCO S.A."},
  {"code":184,"name":"BANCO BBA-CREDITANSTALT S.A."},
  {"code":200,"name":"BANCO FICRISA AXELRUD S.A."},
  {"code":201,"name":"BANCO AXIAL S/A"},
  {"code":204,"name":"BANCO SRL S.A."},
  {"code":205,"name":"BANCO SUL AMERICA S.A."},
  {"code":206,"name":"BANCO MARTINELLI S.A."},
  {"code":208,"name":"BANCO PACTUAL S.A."},
  {"code":210,"name":"DRESDNER BANK LATEINAMERIKA A.G."},
  {"code":211,"name":"BANCO SISTEMA S.A."},
  {"code":212,"name":"BANCO MATONE S.A."},
  {"code":213,"name":"BANCO ARBI S.A."},
  {"code":214,"name":"BANCO DIBENS S.A."},
  {"code":215,"name":"BANCO AMERICA DO SUL S.A."},
  {"code":216,"name":"BANCO REGIONAL MALCON S.A."},
  {"code":217,"name":"BANCO AGROINVEST S.A."},
  {"code":218,"name":"BANCO BONSUCESSO S.A"},
  {"code":219,"name":"BANCO DE CREDITO DE SAO PAULO S.A."},
  {"code":220,"name":"BANCO CREFISUL S/A"},
  {"code":221,"name":"BANCO GRAPHUS S.A."},
  {"code":222,"name":"BANCO AGF BRASIL S/A"},
  {"code":224,"name":"BANCO FIBRA S.A."},
  {"code":225,"name":"BANCO CAPITALTEC S/A"},
  {"code":228,"name":"BANCO ICATU S.A."},
  {"code":229,"name":"BANCO CRUZEIRO DO SUL S.A."},
  {"code":230,"name":"BANCO BANDEIRANTES S.A."},
  {"code":231,"name":"BANCO BOAVISTA S.A."},
  {"code":232,"name":"BANCO INTERPART S.A."},
  {"code":233,"name":"BANCO MAPPIN S.A."},
  {"code":234,"name":"BANCO LAVRA S.A."},
  {"code":235,"name":"BANCO LIBERAL S.A."},
  {"code":236,"name":"BANCO CAMBIAL S.A."},
  {"code":237,"name":"BANCO BRADESCO S.A.", "default_color" : "#CD0931"},
  {"code":239,"name":"BANCO BANCRED S.A."},
  {"code":241,"name":"BANCO CLASSICO S.A."},
  {"code":242,"name":"BANCO EUROINVEST S.A."},
  {"code":243,"name":"BANCO STOCK S.A."},
  {"code":244,"name":"BANCO CIDADE S.A."},
  {"code":246,"name":"BANCO ABC-ROMA S.A."},
  {"code":247,"name":"BANCO OMEGA S.A."},
  {"code":248,"name":"BANCO BOAVISTA INTERATLÂNTICO S.A."},
  {"code":249,"name":"BANCO INVESTCRED S.A."},
  {"code":250,"name":"BANCO SCHAHIN CURY S.A."},
  {"code":252,"name":"BANCO FININVEST S.A."},
  {"code":254,"name":"PARANA BANCO S.A."},
  {"code":255,"name":"MILBANCO S.A."},
  {"code":256,"name":"BANCO GULFINVEST S.A."},
  {"code":258,"name":"BANCO INDUSCRED S.A."},
  {"code":262,"name":"BOREAL S/A BANCO COM. CR."},
  {"code":263,"name":"BANCO CACIQUE S.A."},
  {"code":264,"name":"BANCO PERFORMANCE S.A."},
  {"code":265,"name":"BANCO FATOR S.A."},
  {"code":266,"name":"BANCO CEDULA S.A."},
  {"code":277,"name":"BANCO PLANIBANC S.A."},
  {"code":291,"name":"BANCO DE CREDITO NACIONAL S.A."},
  {"code":294,"name":"BANCO DE CREDITO REAL DO RIO GRANDE DO SUL"},
  {"code":300,"name":"BANCO DE LA NACION ARGENTINA"},
  {"code":303,"name":"BANCO BHF S/A"},
  {"code":304,"name":"BANCO PONTUAL S.A."},
  {"code":318,"name":"BMG BANCO COMERCIAL S.A."},
  {"code":320,"name":"BANCO INDUSTRIAL E COMERCIAL S.A."},
  {"code":334,"name":"BANCO ECONOMICO S.A."},
  {"code":341,"name":"BANCO ITAU S.A.", "default_color" : "#F37C20"},
  {"code":346,"name":"BANCO BFB S/A"},
  {"code":347,"name":"BANCO SUDAMERIS BRASIL S.A."},
  {"code":351,"name":"BANCO BOZANO SIMONSEN S.A."},
  {"code":356,"name":"BANCO ABN AMRO S.A"},
  {"code":366,"name":"BANCO SOGERAL S.A."},
  {"code":369,"name":"BANCO DIGIBANCO S.A."},
  {"code":370,"name":"BANCO EUROPEU PARA AMERICA LATINA (BEAL)"},
  {"code":372,"name":"BANCO ITAMARATI S.A."},
  {"code":375,"name":"BANCO FENICIA S.A."},
  {"code":376,"name":"BANCO CHASE MANHATTAN S.A."},
  {"code":388,"name":"BANCO MERCANTIL DE DESCONTOS S.A."},
  {"code":389,"name":"BANCO MERCANTIL DO BRASIL S.A."},
  {"code":392,"name":"BANCO MERCANTIL DE SAO PAULO S"},
  {"code":394,"name":"BANCO BMC S.A."},
  {"code":399,"name":"BANCO HSBC BANK BRASIL"},
  {"code":409,"name":"UNIBANCO UNIAO DE BANCOS BRASILEIROS S.A."},
  {"code":412,"name":"BANCO NACIONAL DA BAHIA S.A."},
  {"code":415,"name":"BANCO NACIONAL S.A."},
  {"code":420,"name":"BANCO BANORTE S.A."},
  {"code":422,"name":"BANCO SAFRA S.A."},
  {"code":424,"name":"BANCO SANTANDER NOROESTE S.A."},
  {"code":453,"name":"BANCO RURAL S.A."},
  {"code":456,"name":"BANCO DE TOKIO-MITSUBISHI BR"},
  {"code":464,"name":"BANCO SUMITOMO BRASILEIRO S.A."},
  {"code":472,"name":"LLOYDS BANK PLC"},
  {"code":473,"name":"BANCO FINANCIAL PORTUGUES"},
  {"code":477,"name":"CITIBANK N.A.", "default_color" : "#003B70"},
  {"code":479,"name":"BANCO DE BOSTON S.A."},
  {"code":480,"name":"BANCO ROYAL DO CANADA"},
  {"code":487,"name":"DEUTSCHE BANK AG"},
  {"code":488,"name":"MORGAN GUARANTY TRUST"},
  {"code":489,"name":"BANCO FRANCES URUGUAY S/A"},
  {"code":492,"name":"ING BANK"},
  {"code":493,"name":"BANCO UNION S.A.C.A."},
  {"code":494,"name":"BANCO DE LA REP. ORIENTAL DEL URUGUAY"},
  {"code":495,"name":"BANCO DE LA PROVINCIA DE BUENOS AIRES"},
  {"code":496,"name":"BANCO EXTERIOR DE ESPANA S.A."},
  {"code":498,"name":"CENTRO HISPANO BANCO"},
  {"code":499,"name":"BANCO IOCHPE S.A."},
  {"code":501,"name":"BANCO BRASILEIRO IRAQUIANO S.A."},
  {"code":504,"name":"BANCO MULTIPLIC S.A."},
  {"code":505,"name":"BANCO GARANTIA S.A."},
  {"code":600,"name":"BANCO LUSO BRASILEIRO S.A."},
  {"code":602,"name":"BANCO PATENTE S.A."},
  {"code":604,"name":"BANCO SANTISTA S.A."},
  {"code":607,"name":"BANCO SANTOS NEVES S.A."},
  {"code":610,"name":"BANCO VR S.A."},
  {"code":611,"name":"BANCO PAULISTA S.A."},
  {"code":612,"name":"BANCO GUANABARA S.A."},
  {"code":613,"name":"BANCO PECUNIA S.A."},
  {"code":618,"name":"BANCO TENDENCIA S.A."},
  {"code":621,"name":"BANCO APLICAP S.A."},
  {"code":623,"name":"BANCO PANAMERICANO S.A."},
  {"code":624,"name":"BANCO GENERAL MOTORS S.A."},
  {"code":625,"name":"BANCO ARAUCARIA S.A."},
  {"code":626,"name":"BANCO FICSA S.A."},
  {"code":627,"name":"BANCO DESTAK S.A."},
  {"code":628,"name":"BANCO CRITERIUM S/A"},
  {"code":630,"name":"BANCO INTERCAP S.A."},
  {"code":633,"name":"BANCO RENDIMENTO S/A"},
  {"code":634,"name":"BANCO TRIANGULO S/A"},
  {"code":635,"name":"BANCO DO ESTADO DO AMAPA S/A"},
  {"code":637,"name":"BANCO SOFISA S.A."},
  {"code":638,"name":"BANCO PROSPER S.A."},
  {"code":640,"name":"BANCO STOTLER DIME S/A"},
  {"code":641,"name":"EXCEL ECONOMICO S/A / BBV"},
  {"code":643,"name":"BANCO SEGMENTO S.A."},
  {"code":645,"name":"BANCO DO ESTADO DE RORAIMA S.A."},
  {"code":647,"name":"BANCO MAKA S/A"},
  {"code":649,"name":"BANCO DIMENSAO S.A."},
  {"code":650,"name":"BANCO PEBB S.A."},
  {"code":652,"name":"BANCO ITAÚ HOLDING FINANCEIRA S.A."},
  {"code":653,"name":"BANCO INDUSVAL S.A."},
  {"code":654,"name":"BANCO A.J. RENNER S.A."},
  {"code":655,"name":"BANCO VOTORANTIM S.A."},
  {"code":656,"name":"BANCO MATRIX S/A"},
  {"code":657,"name":"BANCO TECNICORP S.A."},
  {"code":658,"name":"BANCO PORTO REAL S.A."},
  {"code":702,"name":"BANCO SANTOS S/A"},
  {"code":707,"name":"BANCO DAYCOVAL S/A"},
  {"code":718,"name":"BANCO OPERADOR S/A"},
  {"code":719,"name":"BANCO PRIMUS S.A."},
  {"code":720,"name":"BANCO MAXINVEST S/A"},
  {"code":721,"name":"BANCO CREDIBEL S/A"},
  {"code":722,"name":"BANCO DO INTERIOR DE SAO PAULO S/A"},
  {"code":725,"name":"BANCO FINANSINOS S/A"},
  {"code":729,"name":"BANCO FONTE S/A"},
  {"code":732,"name":"BANCO MINAS S/A"},
  {"code":733,"name":"BANCO DAS NAC?ES S/A"},
  {"code":734,"name":"BANCO GERDAU S/A"},
  {"code":735,"name":"BANCO POTTENCIAL S/A"},
  {"code":737,"name":"BANCO THECA S/A"},
  {"code":738,"name":"BANCO MORADA S/A"},
  {"code":739,"name":"BANCO BGN S/A"},
  {"code":740,"name":"BANCO BCN BARCLAYS S/A"},
  {"code":741,"name":"BANCO RIBEIRAO PRETO S/A"},
  {"code":742,"name":"BANCO EQUATORIAL S/A"},
  {"code":743,"name":"BANCO EMBLEMA S/A"},
  {"code":744,"name":"THE FIRST NATIONAL BANK OF BOSTON"},
  {"code":745,"name":"CITIBANK S/A"},
  {"code":746,"name":"BANCO MODAL S/A"},
  {"code":747,"name":"BANCO RAIBOBANK DO BRASIL S/A"},
  {"code":748,"name":"BANCO COOPERATIVO SICREDI S/A"},
  {"code":749,"name":"BR BANCO MERCANTIL S/A"},
  {"code":750,"name":"REPUBLIC NATION"},
  {"code":751,"name":"DRESDNER BANK LATINAMERIKA"},
  {"code":752,"name":"BNP"},
  {"code":753,"name":"BANCO COMERCIAL URUGUAI S/A"},
  {"code":755,"name":"BANCO MERRILL LYNCH DE INVESTIMENTOS S.A."},
  {"code":756,"name":"BANCO COOPERATIVO DO BRASIL S/A - BANCOOB"},
  {"code":757,"name":"BANCO KEB DO BRASIL S.A."}]')

json.each do |j|
	t = Bank.new(j)
	t.save
end

