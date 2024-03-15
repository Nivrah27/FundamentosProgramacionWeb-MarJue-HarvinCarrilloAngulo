$(document).ready(function() {
    $('#facturaForm').submit(function(event) {
      event.preventDefault();
  
      var nombreCliente = $('#nombreCliente').val();
      var articuloComprado = $('#articuloComprado option:selected').text();
      var cantidad = parseInt($('#cantidad').val());
      var precioUnitario;
  
      switch(articuloComprado) {
        case 'Funko Rengoku':
          precioUnitario = 10000;
          break;
        case 'Funko Harry Potter':
          precioUnitario = 11000;
          break;
        case 'Funko Naruto':
          precioUnitario = 12000;
          break;
      }
  
      var subtotal = precioUnitario * cantidad;
      var iva = subtotal * 0.13;
      var servicio = subtotal * 0.05;
      var total = subtotal + iva + servicio;
  
      $('#clienteFactura').text(nombreCliente);
      $('#articuloFactura').text(articuloComprado);
      $('#cantidadFactura').text(cantidad);
      $('#precioUnitario').text('₡' + precioUnitario);
      $('#subtotal').text('₡' + subtotal);
      $('#iva').text('₡' + iva.toFixed(2));
      $('#servicio').text('₡' + servicio.toFixed(2));
      $('#total').text('₡' + total.toFixed(2));
  
      $('#facturaResultado').show();
    });
  
    $('#borrarDatos').click(function() {
      $('#facturaForm')[0].reset();
      $('#facturaResultado').hide();
    });
  });