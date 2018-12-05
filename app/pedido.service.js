angular.module('pedidexApp')
    .service('PedidoService', PedidoService);

function PedidoService($firebaseArray, $firebaseObject) {
    var service = this;

    service.buscarTudo = function() {
        var ref = firebase.database().ref().child('pedidos');
        return $firebaseArray(ref);
    }

    service.buscarUm = function($id) {
        var ref = firebase.database().ref('pedidos/' + $id);
        var pedido = $firebaseObject(ref);
        pedido.$loaded().then(function(data) {
            data.cliente.$id = data.cliente.id;
            data.produto.$id = data.produto.id;
        });
        return pedido;
    }

    service.inserir = function(pedido) {
        pedido.emissao = firebase.database.ServerValue.TIMESTAMP;
        pedido.cliente = {
            id: pedido.cliente.$id || pedido.cliente.id,
            nome: pedido.cliente.nome || '',
            telefone: pedido.cliente.telefone || ''
        };
        pedido.produto = {
            id: pedido.produto.$id || pedido.produto.id,
            codigo: pedido.produto.codigo || '',
            descricao: pedido.produto.descricao || ''
        }
        return firebase.database().ref('pedidos').push(pedido);
    }

    service.atualizar = function(pedido) {
        var novoPedido = {
            numero: pedido.numero || '',
            valorTotal: pedido.valorTotal || 0,
            cliente: {
                id: pedido.cliente.$id || pedido.cliente.id,
                nome: pedido.cliente.nome || '',
                telefone: pedido.cliente.telefone || ''
            },
            produto: {
                id: pedido.produto.$id || pedido.produto.id,
                codigo: pedido.produto.codigo || '',
                descricao: pedido.produto.descricao || ''
            }
        };
        
        var ref = firebase.database().ref('pedidos/' + pedido.$id)
        ref.set(novoPedido);
        return $firebaseObject(ref);
    }

    service.excluir = function($id) {
        var ref = firebase.database().ref('pedidos/' + $id)
        ref.remove();
    }
}