$( document ).ready(function(){
    $("#btnAgregar").click(function() {
        AgregarAlCarrito();
    });
    
});

function AgregarAlCarrito(){
    $("#misProductos").append("prueba");
}

var $producto = $("<div class='miOrdenProducto' />")
    .append($("<div class='row' />")
        .append($("<div class=\"miOrdenProductoNombre col-8 col-md-10\" />")
            .append($("<h5 class=\"text-uppercase text-secondary\" />")
                .text("Nombre del producto")
            )
        )
        .append($("<div class=\"miOrdenProductoPrecio text-secondary col-4 col-md-2\" />")
            .append($("<h5 />")
                .text("$45.55")
            )
        )
    )
    .append($("<div class='row' />")
        .append($("<div class=\"miOrdenProductoDescripcion text-secondary col-9 col-md-10\" />")
            .text("Lorem ipsum dolor sit amet,consectetur adipisicing elit. Sint laborum aliquam saepe accusantium. Velit sequi dicta ipsum. Molestiae sint dicta voluptas laudantium quo voluptatem reprehenderit facilis alias, quia aliquid magnam.")
            .append($("<div class=\"col-3 col-md-2 miOrdenProductoImagen\" />")
                .append($("<!--<img src=\"img/portfolio/cake.png\" alt=\"\">-->"))
            )
        )
    )
    .append($("<div class='row' />")
        .append($("<div class=\"col-12\" />")
            .append($("<br/>")
            )
        )
    )
    .append($("<div class=\"row\" />")
        .append($("<div class=\"col-10 col-sm-6 col-md-4 col-lg-4 col-xl-3\" />")
            .append($("<div class=\"row\" />")
                .append($("<div class=\"col-6  miOrdenProductoBoton\">")
                    .append($("<button class=\"btn btn-secondary btn-sm\" />")
                        .text("Modificar")
                    )
                ).append($("<div class=\"col-6  miOrdenProductoBoton\" />")
                    .append($("<button class=\"btn btn-secondary btn-sm\" />")
                        .text("Eliminar")
                    )
                )
            )
        )
    )
    .append("<hr class='miHR' />");