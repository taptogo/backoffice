class SaleChannelsController < ApplicationController
    before_action :set_sale_channel, only: [:show, :edit, :update, :destroy]
    before_action :check_super_admin

    def index
        respond_to do |format|
            format.html 
            format.json { render json: SaleChannelsDatatable.new(view_context, current_user) }
        end 
    end

    # GET /sale_channels/:id
    def show
    end

    # GET /sale_channels/new
    def new
        @sale_channel = SaleChannel.new
    end

    # POST /sale_channels
    def create
        @sale_channel = SaleChannel.new(sale_channels_params)
        @sale_channel.password = ENV["DEFAULT_PASSWORD"]
        if @sale_channel.save(validate: false)
            redirect_to sale_channels_params, notice: 'Canal de Venda criado com sucesso.'
        #elsif @sale_channel.errors
            #redirect_to sale_channels_url, notice: 'Algum erro ocorreu ao cadastrar o Canal de Venda'
        else
            render :new
        end
    end

    # PATCH/PUT /sale_channels/:id
    def update
        if @sale_channel.update(sale_channels_params)
            redirect_to sale_channels_url, notice: 'Canal de Venda alterado com sucesso.'
        #elsif @sale_channel.errors
            #redirect_to sale_channels_url, notice: 'Algum erro ocorreu ao atualizar o Canal de Venda'
        else
            render :edit
        end
    end

    # DELETE /sale_channels/:id
    def destroy
        @sale_channel.destroy
        redirect_to sale_channels_url, notice: 'Canal de Venda removido com sucesso.'
    end

    private
        def set_sale_channel
            @sale_channel = SaleChannel.find(params[:id])
        end   
        # Only allow a trusted parameter "white list" through.
        def sale_channels_params
            params.require(:sale_channel).permit(:zip, :street, :number, :complement, :neighborhood, :city, :state, :country, :enabled, :bank_code, :agencia, :agencia_dv, :conta, :conta_dv,:full_name, :name_establishment, :email, :cpf_cnpj, :phone, :recipient_id, :store)
        end
end