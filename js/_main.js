$(function() {    
    $('[data-toggle="tooltip"],.ttip').tooltip();

    $('.dropdown-menu').on('click', function(e) {
        if ($(this).hasClass('dropdown-menu-form')) {
            e.stopPropagation();
        }
    });

    if($('.select7').length){
        $('.select7').select7();
    }

  $("[data-toggle=popover]").each(function(i, obj) {

        $(this).popover({
            html: true,
            content: function() {
                var id = $(this).attr('id')
                return $('#popover-content-' + id).html();
            }
        });

    });

    // sideNav-list - Multi menu
    $('.sideNav-list').on('show.bs.collapse', function () {
      $('.sideNav-list').find('.collapse.show').collapse('hide');
  //  console.log("HI");
  })

  if ($(window).width() >= 1380) {
      //console.log($(window).width());
      $("._slideAction a.slide-btn").trigger('click');
  }

})

feather.replace()

$('body').on('click', function (e) {
    $('[data-toggle="popover"]').each(function () {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons within a button that triggers a popup
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});

$("._xs-collapsible").click(function() {
    if ($("._xs-collapsible").hasClass("active")) {
        $("._xs-collapsible").removeClass('active');
        $("._xs-collapsible").next('._xs-collapsible-content').slideUp();
    } else {
        $("._xs-collapsible").addClass('active');
        $("._xs-collapsible").next('._xs-collapsible-content').slideDown();
    }
    return false;
});

$(".div-collapsible").click(function() {
    if ($(".div-collapsible").hasClass("active")) {
        $(".div-collapsible").removeClass('active');
        $(".div-collapsible").next('#overview-card-body').slideUp();
    } else {
        $(".div-collapsible").addClass('active');
        $(".div-collapsible").next('#overview-card-body').slideDown();
    }
    return false;
});


function body_resize_class() {
    if ($(window).width() <= 991) {
        $("body").removeClass('show-desktop');
        $("body").addClass('show-mobile');
    } else {
        $("body").removeClass('show-mobile');
        $("body").addClass('show-desktop');
    }
}
body_resize_class();

$("body.show-desktop .slide-btn").click(function() {
    if ($("body").hasClass("fixed-sn")) {
        $("body").removeClass('fixed-sn');
        if ($('.sidenav-overlay')) {
            $('.sidenav-overlay').remove();
        }
    } else {
        $("body").addClass('fixed-sn');
    }
    return false;
    //$('#exampleModal .modal-dialog').css('opacity', 0);
    //modalStyling(2500);
});

$("body.show-mobile .slide-btn").click(function() {
    $('body').append('<div class="sidenav-overlay"></div>')
    if ($("body").hasClass("fixed-sn")) {
        $("body").removeClass('fixed-sn');
        $(".sideNav").addClass('fixed');
        if ($('.sidenav-overlay')) {
            $('.sidenav-overlay').remove();
        }
    } else {
        $("body").addClass('fixed-sn');
        $('.sidenav-overlay').click(function() {
            console.log('mobile', $(".slide-btn"));
            $(".slide-btn").trigger("click");
        })
    }
    return false;
    //$('#exampleModal .modal-dialog').css('opacity', 0);
    //modalStyling(2500);
});

function check_if_in_view() {
    if ($(window).width() > 990) {
        $(".sideNav").removeClass('fixed');
        $(".sideNav").hover(function() {
            $(".sideNav").addClass('fixed');

        }, function() {
            $(".sideNav").removeClass('fixed');
        })
    } else {
        $(".sideNav").addClass('fixed');
    }
}

check_if_in_view();
$(window).resize(function() {
    body_resize_class();
    check_if_in_view();
});
