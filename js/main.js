/**
 * Created by mohit on 6/17/2014.
 */

(function(config, app){
    app.setAlListContainerId(config.alListContainerId);
    app.setNewListInputId(config.newListInputId);
    app.setNewListFormId(config.newListFormId);
    app.setSubmitButtontId(config.submitButtonId);
    app.bindForm();

})(window.config, window.app);
