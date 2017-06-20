angular.module('common.contact', []).service('ContactService', [() => {

    return {
        isShowing: false,
        toggleContact() {
            this.isShowing = !this.isShowing;
        }
    }

}]);
