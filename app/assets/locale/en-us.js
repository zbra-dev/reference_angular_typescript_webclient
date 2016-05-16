(function () {
    'use strict';

    angular
        .module('app')
        .config(translate_);

    translate_.$inject = ['$translateProvider'];
    function translate_($translateProvider) {
        $translateProvider.translations('en-us', {

            // General
            GENERAL_COMPANY_NAME: 'Template Company Name',
            GENERAL_APPLICATION_NAME: 'Template Application Name',

            // Actions
            ACTION_OK: 'Ok',
            ACTION_SUBMIT: 'Submit',
            ACTION_CANCEL: 'Cancel',
            ACTION_SAVE: 'Save',
            ACTION_DELETE: 'Delete',
            ACTION_DISMISS: 'Dismiss',
            ACTION_DETAILS: 'Details',
            ACTION_CLOSE: 'Close',
            ACTION_BACK: 'Back',
            ACTION_SETTINGS: 'Settings',

        });
    }
})();