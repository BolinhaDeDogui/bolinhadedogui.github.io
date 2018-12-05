angular.module('pedidexApp')
    .controller('ProdutoListCtrl', ProdutoListCtrl);

function ProdutoListCtrl(ProdutoService) {
    var vm = this;

    vm.produtos = ProdutoService.buscarTudo();

    vm.excluir = function(item) {
        if (confirm('Tem certeza que deseja excluir o produto?')) {
            ProdutoService.excluir(item.$id);
        }
    }
}