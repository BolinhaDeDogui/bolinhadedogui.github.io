angular.module('pedidexApp')
    .controller('ProdutoFormCtrl', ProdutoFormCtrl);

function ProdutoFormCtrl(ProdutoService, $state, $stateParams) {
    var vm = this;

    vm.titulo = 'Novo Registro';
    vm.produto = {};

    if ($stateParams.id) {
        vm.titulo = 'Editando ';
        vm.produto = ProdutoService.buscarUm($stateParams.id);
    }

    vm.gravar = function() {
        if (vm.produto.$id) {
            ProdutoService.atualizar(vm.produto);
        } else {
            ProdutoService.inserir(vm.produto);
        }
        $state.go('produtosList');
    }
}