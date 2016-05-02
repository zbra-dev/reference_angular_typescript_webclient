namespace UI.Pages.Feature1 {
    import IScope = angular.IScope;

    export  class Feature1Controller { 
        static $inject = ['$scope'];
        
        constructor(private $scope: IScope) {
        }
    }
}