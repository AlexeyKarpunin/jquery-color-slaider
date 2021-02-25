$( function() {

  function hexFromRGB(r, g, b) {
    const hex = [
      r.toString( 16 ),
      g.toString( 16 ),
      b.toString( 16 )
    ];

    $.each( hex, function( nr, val ) {
      if ( val.length === 1 ) {
        hex[ nr ] = "0" + val;
      }
    });

    return hex.join( "" ).toUpperCase();
  }
// меняем цвет // 
  function refreshSwatch() {
    
    const red = $( "#red" ).slider( "value" ),
      green = $( "#green" ).slider( "value" ),
      blue = $( "#blue" ).slider( "value" ),
      hex = hexFromRGB( red, green, blue );
    $( "#print_color_area" ).css( "background-color", "#" + hex );

    $("#myColor-bg").text(`background-color: rgb(${red}, ${green}, ${blue}); `)
  }

  function refreshColorSwatch() {
    
    const red = $( "#red-color" ).slider( "value" ),
      green = $( "#green-color" ).slider( "value" ),
      blue = $( "#blue-color" ).slider( "value" ),
      hex = hexFromRGB( red, green, blue );

    $( "#print_color_area" ).css( "color", "#" + hex );


    $("#myColor").text(`color: rgb(${red}, ${green}, ${blue}); `)
  }

  // Иницилизируем слайдеры; //

  $( "#red, #green, #blue" ).slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch
  });
  $( "#red" ).slider( "value", 255 );
  $( "#green" ).slider( "value", 255 );
  $( "#blue" ).slider( "value", 255 );

  $( "#red-color, #green-color, #blue-color" ).slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshColorSwatch,
    change: refreshColorSwatch
  });
  $( "#red-color" ).slider( "value", 0 );
  $( "#green-color" ).slider( "value", 0 );
  $( "#blue-color" ).slider( "value", 0 );

  // Перключение слайдеров //

  $('#color--btn').click( function () {
    console.log('22')
    $('.bg-action').addClass('hide')
    $('.color-action').removeClass('hide')
    $('#color--btn').addClass('active-btn')
    $('#bg-color--btn').removeClass('active-btn')
  });

  $("#bg-color--btn").click( () => {
    $('.color-action').addClass('hide')
    $('.bg-action').removeClass('hide')
    $('#bg-color--btn').addClass('active-btn')
    $('#color--btn').removeClass('active-btn')
  })

  
} );







