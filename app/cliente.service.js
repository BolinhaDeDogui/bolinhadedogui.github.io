angular.module('pedidexApp')
    .service('ClienteService', ClienteService);

function ClienteService($firebaseArray, $firebaseObject) {
    var service = this;

    service.buscarTudo = function() {
        var ref = firebase.database().ref().child('clientes');
        return $firebaseArray(ref);
    }

    service.buscarUm = function($id) {
        var ref = firebase.database().ref('clientes/' + $id);
        return $firebaseObject(ref);
    }

    service.inserir = function(cliente) {
        return firebase.database().ref('clientes').push(cliente);
    }

    service.atualizar = function(cliente) {
        var ref = firebase.database().ref('clientes/' + cliente.$id)
        ref.set({
            nome: cliente.nome || '',
            email: cliente.email || '',
            telefone: cliente.telefone || '',
            endereco: cliente.endereco || '',
            complemento: cliente.complemento || '',
            cidade: cliente.cidade || '',
            estado: cliente.estado || '',
            cep: cliente.cep || ''
        });
        return $firebaseObject(ref);
    }

    service.excluir = function($id) {
        var ref = firebase.database().ref('clientes/' + $id)
        ref.remove();
    }
}