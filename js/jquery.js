    $(function(){
        $("#btnBuscar").on("click",function(){
            //.log("keyup");
            let valor = $("#txtBuscar").val().toLowerCase();
            $("table tbody tr").filter(function(){
                $(this).toggle($(this).text().toLowerCase().indexOf(valor) >-1 );
            })
        })
    })