app.controller('labController', [
    '$scope', 'registrationService',
    function($scope, registrationService) {
        $scope.reset = reset;
        $scope.submit = submit;
        reset();

        function reset() {
            $scope.model = {};
        }

        function submit(model) {
            registration.submit(model).$promise
                .then(function(response) {
                    alert('success');
                }).catch(
                    function(response) {
                        alert('error');
                    });
        }
    }
]);