/**
 * Created by mohit on 6/17/2014.
 */
(function(window){
    var app = (function(document){
        var alListContainerId;
        var newListFormId;
        var newListInputId;
        var submitButtontId;

        var setAlListContainerId    =   function(alListContainerIdPar){
            alListContainerId  =   alListContainerIdPar;
        };

        var setNewListFormId    =   function(newListFormIdPar){
            newListFormId  =   newListFormIdPar;
        };

        var setNewListInputId   =   function(newListInputIdPar){
            newListInputId  =   newListInputIdPar;
        };

        var setSubmitButtontId   =   function(submitButtontIdPar){
            submitButtontId  =   submitButtontIdPar;
        };

        var addEvent    =   function(evnt, elem, func) {
            if (elem.addEventListener)  // W3C DOM
                elem.addEventListener(evnt,func,false);
            else if (elem.attachEvent) { // IE DOM
                elem.attachEvent("on"+evnt, func);
            }
            else { // No much to do
                elem[evnt] = func;
            }
        };

        var createListElement =   function(listTitle){

            var listContainer   =   document.createElement('div');
            listContainer.className =   'col-sm-3 col-sm-offset-1 listContainer';

            var listTitleEle   =  document.createElement('strong');
            listTitleEle.innerHTML =   listTitle;

            var close   =   document.createElement('span');
            close.className =   'close';
            close.innerHTML =   'X';

            addEvent('click',close,function(e){
                this.parentNode.parentNode.removeChild(listContainer);
            } );

            /*close.addEventListener('click',function(e){
                this.parentNode.parentNode.removeChild(listContainer);
            });*/

            var list    =   document.createElement('ul');
            list.setAttribute('contenteditable','true');

            var listElement =   document.createElement('li');
            listElement.innerHTML   =   'Click here to add item';

            list.appendChild(listElement);

            listContainer.appendChild(listTitleEle);
            listContainer.appendChild(close);
            listContainer.appendChild(list);

            return listContainer;
        };

        var bindForm    =   function(){
            var formInstance    =   document.getElementById(newListFormId);
            var listsContainerInstance  =   document.getElementById(alListContainerId);
            var inputField  =   document.getElementById(newListInputId);
            var submitButtonInstance    =   document.getElementById(submitButtontId);

            addEvent('click', submitButtonInstance,function(e){
                listsContainerInstance.appendChild(createListElement(inputField.value));
            } );
            /*submitButtonInstance.addEventListener('click',function(e){
                listsContainerInstance.appendChild(createListElement(inputField.value));
            });*/


        };

        return {
            setAlListContainerId : setAlListContainerId,
            setNewListFormId : setNewListFormId,
            setNewListInputId : setNewListInputId,
            setSubmitButtontId : setSubmitButtontId,
            bindForm : bindForm
        };

    })(window.document);

    window.app =   app;
})(window);

