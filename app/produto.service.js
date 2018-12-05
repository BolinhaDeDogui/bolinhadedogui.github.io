angular.module('pedidexApp')
    .service('ProdutoService', ProdutoService);

function ProdutoService($firebaseArray, $firebaseObject) {
    var service = this;

    service.buscarTudo = function() {
        var ref = firebase.database().ref().child('produtos');
        return $firebaseArray(ref);
    }

    service.buscarUm = function($id) {
        var ref = firebase.database().ref('produtos/' + $id);
        return $firebaseObject(ref);
    }

    service.inserir = function(produto) {
        return firebase.database().ref('produtos').push(produto);
    }

    service.atualizar = function(produto) {
        var ref = firebase.database().ref('produtos/' + produto.$id)
        ref.set({
            codigo: produto.codigo || '',
            descricao: produto.descricao || '',
            preco: produto.preco || 0,
            estoque: produto.estoque || 0
        });
        return $firebaseObject(ref);
    }

    service.excluir = function($id) {
        var ref = firebase.database().ref('produtos/' + $id)
        ref.remove();
    }
}