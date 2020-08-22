$(function(){
    var v1,v2,op,len,valor;

    $("input[name=btn]").click(function(){
        $("#result").val($("#result").val() + $(this).val());

    });

    $("input[name=ce]").click(function(){
        $("#result").val('');
        $("#op").text($("#op").val())
    });

    $("input[name=soma]").click(function(){

        if($("#result").val() != ''){
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "soma";
            $("#op").text($(this).val());
        }
        else{
            alert('Insira um valor para realizar a operação!');
        }
    });

    $("input[name=subtracao]").click(function(){
       
        if($("#result").val() != ''){
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "sub";
            $("#op").text($(this).val());
        }
        else{
            alert('Insira um valor para realizar a operação!');
        }
    });

    $("input[name=vezes]").click(function(){
        
        if($("#result").val() != ''){
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "vezes";
            $("#op").text($(this).val());
        }
        else{
            alert('Insira um valor para realizar a operação!');
        }
    });

    $("input[name=divisao]").click(function(){
        
        if($("#result").val() != ''){
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "divi";
            $("#op").text($(this).val());
        }
        else{
            alert('Insira um valor para realizar a operação!');
        }
    });

    $("input[name=c]").click(function(){
        len = $("#result").val().length;

        valor = $("#result").val();

        valor = valor.replace(valor.charAt(len - 1), "");

        $("#result").val(valor);
    });

    $("input[name=igual]").click(function(){
       
        if($("#result").val() != ''){
            v2 = parseFloat($("#result").val());
            
            if(op == "soma"){
                $("#result").val(v1 + v2);
            }

            else if(op == "sub"){
                $("#result").val(v1 - v2);
            }

            else if(op == "vezes"){
                $("#result").val(v1 * v2);
            }

            else if(op =="divi"){
                $("#result").val(v1 / v2);
            }
        }
        else{
            alert('Insira um valor para realizar a calculo!');
        }
    });
});

