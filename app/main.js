angular.module('pedidexApp', [
    'ui.router',
    'firebase'
]);

firebase.initializeApp({
    apiKey: "AIzaSyAXPpm3XImNwVaVgPT0A8Thh3zS6KV3tII",
    databaseURL: "https://projdiana.firebaseio.com/",
    projectId: "projdiana"
});

angular.module('pedidexApp').config(ConfigApp);

function ConfigApp($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state({
        name: 'main',
        url: '/',
        templateUrl: 'view/main.html'
    });
    $stateProvider.state({
        name: 'clientesList',
        url: '/usuarios',
        templateUrl: 'view/cliente.list.html',
        controller: 'ClienteListCtrl',
        controllerAs: 'vm'
    });
    $stateProvider.state({
        name: 'clientesNovo',
        url: '/usuarios/novo',
        templateUrl: 'view/cliente.form.html',
        controller: 'ClienteFormCtrl',
        controllerAs: 'vm'
    });
    $stateProvider.state({
        name: 'clientesEditar',
        url: '/usuarios/{{id}}',
        templateUrl: 'view/cliente.form.html',
        controller: 'ClienteFormCtrl',
        controllerAs: 'vm'
    });

    $stateProvider.state({
        name: 'produtosList',
        url: '/livros',
        templateUrl: 'view/produto.list.html',
        controller: 'ProdutoListCtrl',
        controllerAs: 'vm'
    });
    $stateProvider.state({
        name: 'produtosNovo',
        url: '/livros/novo',
        templateUrl: 'view/produto.form.html',
        controller: 'ProdutoFormCtrl',
        controllerAs: 'vm'
    });
    $stateProvider.state({
        name: 'produtosEditar',
        url: '/livros/{{id}}',
        templateUrl: 'view/produto.form.html',
        controller: 'ProdutoFormCtrl',
        controllerAs: 'vm'
    });

    $stateProvider.state({
        name: 'pedidosList',
        url: '/emprestimo',
        templateUrl: 'view/pedido.list.html',
        controller: 'PedidoListCtrl',
        controllerAs: 'vm'
    });
    $stateProvider.state({
        name: 'pedidosNovo',
        url: '/emprestimo/novo',
        templateUrl: 'view/pedido.form.html',
        controller: 'PedidoFormCtrl',
        controllerAs: 'vm'
    });
    $stateProvider.state({
        name: 'pedidosEditar',
        url: '/emprestimo/{id}',
        templateUrl: 'view/pedido.form.html',
        controller: 'PedidoFormCtrl',
        controllerAs: 'vm'
    });
}