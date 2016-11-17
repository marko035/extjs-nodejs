/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    selectRecord: function (sender, record) {
        Ext.Ajax.request({
             url: 'users',
             method: 'GET',
             params: {
                name: 'Boba',
                email: 'marko@gmail.com',
                phone: '123456'
             },

             success: function(response, opts) {
                 console.log(response.responseText);
             },

             failure: function(response, opts) {
                 console.log('server-side failure with status code ' + response.status);
             }
         });
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
