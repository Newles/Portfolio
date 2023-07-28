$(document).ready(
    function(){
        $('.button').click(
            function(event){
                event.preventDefault();
                let value = $(this).attr("data-filter");
                // console.log(value);
                if (value == "all") {
                    $(".filter").show("100");
                } else {
                    $(".filter").not("." + value).hide("100");
                    $(".filter." + value).show("100");
                }
                $("ul .button").click(function(){
                    $(this).addClass("active").siblings().removeClass("active");
                });
            }
        );
    }
);