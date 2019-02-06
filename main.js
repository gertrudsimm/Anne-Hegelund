

var econFix = $('#econ-cont').offset().left;
$(window).scroll(function() {
    var currentScroll = $(window).scrollLeft();
    if (currentScroll >= econFix) {
        $('#econ-cont').css({
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            padding: '0',
            margin: '0',

        });
    } else {
        $('#econ-cont').css({
            position: 'static'
        });
    }
});

var unemFix = $('#unem-cont').offset().left;
$(window).scroll(function() {
    var currentScroll = $(window).scrollLeft();
    if (currentScroll >= econFix) {
        $('#menu-cont').css({

            bottom: '0%',

        });
    } else {
        $('#menu-cont').css({
            bottom: '-10%'
        });
    }
});


var unemFix = $('#unem-cont').offset().left;
$(window).scroll(function() {
    var currentScroll = $(window).scrollLeft();
    if (currentScroll >= unemFix) {
        $('#unem-cont').css({
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            padding: '0',
            margin: '0'

        });
    } else {
        $('#unem-cont').css({
            position: 'static'
        });
    }
});

var educFix = $('#educ-cont').offset().left;
$(window).scroll(function() {
    var currentScroll = $(window).scrollLeft();
    if (currentScroll >= educFix) {
        $('#educ-cont').css({
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            padding: '0',
            margin: '0'

        });
    } else {
        $('#educ-cont').css({
            position: 'static'
        });
    }
});

var raciFix = $('#raci-cont').offset().left;
$(window).scroll(function() {
    var currentScroll = $(window).scrollLeft();
    if (currentScroll >= raciFix) {
        $('#raci-cont').css({
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            padding: '0',
            margin: '0'

        });
    } else {
        $('#raci-cont').css({
            position: 'static'
        });
    }
});

var soliFix = $('#soli-cont').offset().left;
$(window).scroll(function() {
    var currentScroll = $(window).scrollLeft();
    if (currentScroll >= soliFix) {
        $('#soli-cont').css({
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            padding: '0',
            margin: '0'

        });
    } else {
        $('#soli-cont').css({
            position: 'static'
        });
    }
});

var climFix = $('#clim-cont').offset().left;
$(window).scroll(function() {
    var currentScroll = $(window).scrollLeft();
    if (currentScroll >= climFix) {
        $('#clim-cont').css({
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            padding: '0',
            margin: '0',


        });
    } else {
        $('#clim-cont').css({
            position: 'static'
        });
    }



//ANIMATION



var manElement = $('#man')[0];
var manPosition = manElement.getBoundingClientRect().x;
// console.log(manElement.getBoundingClientRect().x);
if (manPosition < 420) {
  if (!$('#man').hasClass('man')) {
    $('#man').addClass('man');
  }
}



var carryElement = $('#carry')[0];
var carryPosition = carryElement.getBoundingClientRect().x;
// console.log(manElement.getBoundingClientRect().x);
if (carryPosition < 680) {
if (!$('#carry').hasClass('carry')) {
$('#carry').addClass('carry');
}
}


var greyingElement = $('#greying')[0];
var greyingPosition = greyingElement.getBoundingClientRect().x;
// console.log(manElement.getBoundingClientRect().x);
if (greyingPosition < 615) {
if (!$('#greying').hasClass('greying')) {
$('#greying').addClass('greying');
}
}


var booksElement = $('#books')[0];
var booksPosition = booksElement.getBoundingClientRect().x;
// console.log(manElement.getBoundingClientRect().x);
if (booksPosition < 650) {
if (!$('#books').hasClass('books')) {
$('#books').addClass('books');
}
}

var baldElement = $('#bald')[0];
var baldPosition = baldElement.getBoundingClientRect().x;
// console.log(manElement.getBoundingClientRect().x);
if (baldPosition < 480) {
if (!$('#bald').hasClass('bald')) {
$('#bald').addClass('bald');
}
}

var familyElement = $('#family')[0];
var familyPosition = familyElement.getBoundingClientRect().x;
// console.log(manElement.getBoundingClientRect().x);
if (familyPosition < 565) {
if (!$('#family').hasClass('family')) {
$('#family').addClass('family');
}
}

var glassesElement = $('#glasses')[0];
var glassesPosition = glassesElement.getBoundingClientRect().x;
// console.log(manElement.getBoundingClientRect().x);
if (glassesPosition < 727) {
if (!$('#glasses').hasClass('glasses')) {
$('#glasses').addClass('glasses');
}
}

var beardyElement = $('#beardy')[0];
var beardyPosition = beardyElement.getBoundingClientRect().x;
// console.log(manElement.getBoundingClientRect().x);
if (beardyPosition < 360) {
if (!$('#beardy').hasClass('beardy')) {
$('#beardy').addClass('beardy');
}
}
});


//WALKING CYCLE

$(function() {

    var timer, el = $('#mainp'),
        flag = false;
    $(window).scroll(function() {
        if (!flag) {
            flag = true;
            el.addClass('start');
        }
        clearTimeout(timer);
        timer = setTimeout(function() {
            el.removeClass('start');
            flag = false;
        }, 200);
    });

});


$(window).scroll(function() {

    var timer, ela = $('#man'),
        flag = false;
        var manEl = $('#man')[0];
        var manPo = manEl.getBoundingClientRect().x;

    $(window).scroll(function() {
        if ((!flag) && (manPo < 420)) {
            flag = true;
            ela.addClass('man-start');
        }
        clearTimeout(timer);
        timer = setTimeout(function() {
            ela.removeClass('man-start');
            flag = false;
        }, 200);
    });

});

$(window).scroll(function() {

    var timer, elb = $('#carry'),
        flag = false;
        var carryEl = $('#carry')[0];
        var carryPo = carryEl.getBoundingClientRect().x;

    $(window).scroll(function() {
        if ((!flag) && (carryPo < 680)) {
            flag = true;
            elb.addClass('carry-start');
        }
        clearTimeout(timer);
        timer = setTimeout(function() {
            elb.removeClass('carry-start');
            flag = false;
        }, 200);
    });

});

$(window).scroll(function() {

    var timer, elc = $('#greying'),
        flag = false;
        var greyingEl = $('#greying')[0];
        var greyingPo = greyingEl.getBoundingClientRect().x;

    $(window).scroll(function() {
        if ((!flag) && (greyingPo < 615)) {
            flag = true;
            elc.addClass('greying-start');
        }
        clearTimeout(timer);
        timer = setTimeout(function() {
            elc.removeClass('greying-start');
            flag = false;
        }, 200);
    });

});

$(window).scroll(function() {

    var timer, eld = $('#books'),
        flag = false;
        var booksEl = $('#books')[0];
        var booksPo = booksEl.getBoundingClientRect().x;

    $(window).scroll(function() {
        if ((!flag) && (booksPo < 670)) {
            flag = true;
            eld.addClass('books-start');
        }
        clearTimeout(timer);
        timer = setTimeout(function() {
            eld.removeClass('books-start');
            flag = false;
        }, 200);
    });

});

$(window).scroll(function() {

    var timer, elf = $('#bald'),
        flag = false;
        var baldEl = $('#bald')[0];
        var baldPo = baldEl.getBoundingClientRect().x;

    $(window).scroll(function() {
        if ((!flag) && (baldPo < 600)) {
            flag = true;
            elf.addClass('bald-start');
        }
        clearTimeout(timer);
        timer = setTimeout(function() {
            elf.removeClass('bald-start');
            flag = false;
        }, 200);
    });

});

$(window).scroll(function() {

    var timer, elg = $('#family'),
        flag = false;
        var familyEl = $('#family')[0];
        var familyPo = familyEl.getBoundingClientRect().x;

    $(window).scroll(function() {
        if ((!flag) && (familyPo < 600)) {
            flag = true;
            elg.addClass('family-start');
        }
        clearTimeout(timer);
        timer = setTimeout(function() {
            elg.removeClass('family-start');
            flag = false;
        }, 200);
    });

});

$(window).scroll(function() {

    var timer, elh = $('#glasses'),
        flag = false;
        var glassesEl = $('#glasses')[0];
        var glassesPo = glassesEl.getBoundingClientRect().x;

    $(window).scroll(function() {
        if ((!flag) && (glassesPo < 780)) {
            flag = true;
            elh.addClass('glasses-start');
        }
        clearTimeout(timer);
        timer = setTimeout(function() {
            elh.removeClass('glasses-start');
            flag = false;
        }, 200);
    });

});

$(window).scroll(function() {

    var timer, eli = $('#beardy'),
        flag = false;
        var beardyEl = $('#beardy')[0];
        var beardyPo = beardyEl.getBoundingClientRect().x;

    $(window).scroll(function() {
        if ((!flag) && (beardyPo < 360)) {
            flag = true;
            eli.addClass('beardy-start');
        }
        clearTimeout(timer);
        timer = setTimeout(function() {
            eli.removeClass('beardy-start');
            flag = false;
        }, 200);
    });

});
