angular.module('pedidexApp')
    .controller('ClienteFormCtrl', ClienteFormCtrl);

function ClienteFormCtrl(ClienteService, $state, $stateParams) {
    var vm = this;

    vm.titulo = 'Novo cliente';
    vm.cliente = {};

    if ($stateParams.id) {
        vm.titulo = 'Editando cliente';
        vm.cliente = ClienteService.buscarUm($stateParams.id);
    }

    vm.gravar = function() {
        if (vm.cliente.$id) {
            ClienteService.atualizar(vm.cliente);
        } else {
            ClienteService.inserir(vm.cliente);
        }
        $state.go('clientesList');
    }
}