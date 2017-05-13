function openModal(){

        ajaxData = {                    
            "login": $.trim($('#login').val()), 
            "senha": $.trim($('#senha').val())
        };

        submitForm();
}

function submitForm() {
            $.ajax( {
                type: "GET",
                url: "http://www.google.com.br/",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                beforeSend: function() {
                    $('#waintingModal').modal('show');
                },
                success: function (response) {
                    $('#searchModal').modal('hide');
                    $('div').removeClass('modal-backdrop');                  
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    $('#waintingModal').modal('hide');
                    var msg = 'textStatus: '+textStatus+'\nPesquisa'+'\nerror message: '+errorThrown;
                    console.log(msg);                       
                },
                complete: function(){
                    $('#waintingModal').modal('hide');
                }
            });
        }