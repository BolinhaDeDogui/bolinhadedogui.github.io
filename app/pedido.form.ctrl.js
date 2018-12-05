angular.module('pedidexApp')
    .controller('PedidoFormCtrl', PedidoFormCtrl);

function PedidoFormCtrl(PedidoService, ProdutoService, ClienteService, $state, $stateParams) {
    var vm = this;

    vm.titulo = 'Novo Empréstimo';
    vm.pedido = {};

    // para os combos
    vm.clientes = ClienteService.buscarTudo();
    vm.produtos = ProdutoService.buscarTudo();

    if ($stateParams.id) {
        vm.titulo = 'Editando Editando';
        vm.pedido = PedidoService.buscarUm($stateParams.id);
    }

    vm.atualizarTotal = function() {
        vm.pedido.valorTotal = (vm.pedido.valorUnitario * vm.pedido.quantidade) || 0;
    }

    vm.gravar = function() {
        vm.atualizarTotal()
        if (vm.pedido.$id) {
            PedidoService.atualizar(vm.pedido);
        } else {
            PedidoService.inserir(vm.pedido);
        }
        $state.go('pedidosList');
    }
}