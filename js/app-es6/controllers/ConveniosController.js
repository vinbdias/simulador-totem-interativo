class ConveniosController {

    constructor() {        

        this._conveniosService = new ConveniosService();

        this._listaCategoriasConvenios = new ListaCategoriasConvenios();
        this._categoriasConveniosView = new CategoriasConveniosView($('#categoriasConveniosView'));     

        this._listaCategoriasConvenios = new Bind(
            new ListaCategoriasConvenios(),
            new CategoriasConveniosView($('#categoriasConveniosView')),
            'adiciona');         

        this._listaConvenios = new Bind(
            new ListaConvenios(),
            new ConveniosView($('#conveniosView')),
            'adiciona', 'limpa');                  

        this._conveniosService.obterCategorias()
                               .then(categorias => 
                                        categorias.forEach(categoria => this._listaCategoriasConvenios.adiciona(categoria)));   
                               
        this._convenio = new Bind(
            new Convenio(),
            new ConvenioView($('#convenioView')),
            'convenio'
        );        
    }

    listarConveniosPorCategoria(categoriaId) {

        this._conveniosService.obterConveniosPorCategoria(categoriaId)
                              .then(convenios => {

                                  this._listaConvenios.limpa();
                                  convenios.forEach(convenio => this._listaConvenios.adiciona(convenio));                                                                                                
                              });
    }

    mostrarConvenio(convenioId) {

        this._conveniosService.obterConvenio(convenioId)
                              .then(convenio => {

                                  this._convenio.convenio = convenio;                                                                  
                              });                              
    }
}