$( document).ready(function()
{
  $( ".row" ).sortable({
    connectWith: ".row",
    handle: ".portlet-header",
    // cancel: ".portlet-toggle",
    placeholder: "portlet-placeholder ui-corner-all"
  });

$(".list-group-item").sortable({
  connectWith: ".list-group-item",
  handle: ".list-group-item"
});


$( function() {

   $( ".connectedSortable").sortable({
     connectWith: ".connectedSortable"
   }).disableSelection();
 } );

// rename the heading textarea
$(function () {
  $(document).delegate('.inner', 'click', function(e) {
    e.stopPropagation();
    var currentEle = $(this);
    var value = $(this).html();
    updateVal(currentEle, value);
  })
});

function updateVal(currentEle, value) {
  console.log('abc', value.replace(/\s/g, ''))
    $(currentEle).html('<input class="thVal" type="text" />');
    $(".thVal").focus();
    $(".thVal").keyup(function (event) {
        if (event.keyCode == 13) {
          var inputData = $('.thVal').val();
          console.log('inputData',inputData)
          if(inputData !== '') {
            $(currentEle).html($(".thVal").val());
          }else {
            $(currentEle).html(value.replace(/\s/g, ''))
          }
        }
    });

    $(document).click(function () {
      var inputData = $('.thVal').val();
      console.log('inputData',inputData)
      if(inputData !== '') {
        $(currentEle).html($(".thVal").val());
      }else {
        $(currentEle).html(value.replace(/\s/g, ''))
      }
    });
}

// rename ends

// delete the li
$(document).delegate('.close', 'click', function(){
  $('.close').on('click', function(){
      $(this).closest(".list-group-item").remove();
  });
});






// delete li ends



  $('.sortable').sortable();

  $(document).delegate('.addCard', 'click', function() {
    Swal.fire({
      title: 'Enter the title for this card...',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Add',
    }).then((result) => {
      if (result.value) {
        $(this).parent().parent().find('.connectedSortable').append(`<li class="list-group-item">
          <div class="allStyle">
            ${result.value}
            <i class="fas fa-trash close"></i>
          </div>
        </li>`)
      }
    })
  })
// addCard

$(function () {

    $("#addCards").click(function () {
        $(".box").append(`<div class="row no-gutters" id="">
        <div class="card boxCard" style="width: 18rem;">
        <div class="card-header portlet-header inner">
          Card Header
    </div>

    <div class="portlet-content">
      <ul class="list-group list-group-flush sortable connectedSortable" id="sortable3">

      </ul>
  </div>
  <div class="anchor">
    <a class="addCard" href="#">+ Add another card</a>
  </div>
</div>
</div>`)

    });
})


});
