class CategoriasConveniosView extends View {

    template(model) {

        return `
            <ul>
                ${model.categorias.map(categoria => `
                <li class="categoriasConveniosItem" id="categoria${StringHelper.ucWordsSanitizeRemoverEspacosEmBranco(categoria.CATEGORIA)}" onclick="conveniosController.listarConveniosPorCategoria(${categoria.ID})">${categoria.CATEGORIA}</li>
                `).join('')}
            </ul>
        `;
    }
}