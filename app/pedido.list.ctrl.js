angular.module('pedidexApp')
    .controller('PedidoListCtrl', PedidoListCtrl);

function PedidoListCtrl(PedidoService) {
    var vm = this;

    vm.pedidos = PedidoService.buscarTudo();

    vm.excluir = function(item) {
        if (confirm('Tem certeza que deseja excluir o pedido?')) {
            PedidoService.excluir(item.$id);
        }
    }
}