require 'passbook'

Passbook.configure do |passbook|

  # Path to your wwdc cert file
  passbook.wwdc_cert = Rails.root.join('wwr.pem')

  # Path to your cert.p12 file
  passbook.p12_certificate = Rails.root.join('Certificates.p12')
  # passbook.p12_key = Rails.root.join('passcertificate.pem')  
  passbook.p12_password = 'caio'


end
