angular.module('pedidexApp')
    .controller('ClienteListCtrl', ClienteListCtrl);

function ClienteListCtrl(ClienteService) {
    var vm = this;

    vm.clientes = ClienteService.buscarTudo();

    vm.excluir = function(item) {
        if (confirm('Tem certeza que deseja excluir o cliente?')) {
            ClienteService.excluir(item.$id);
        }
    }
}