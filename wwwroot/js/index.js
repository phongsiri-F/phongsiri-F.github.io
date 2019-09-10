
$(document).ready(function () {

    $(".icon-like-get").hide();
    $(".icon-like-get2").hide();
    $(".icon-like-get3").hide();
    $(".icon-like-get4").hide();
    $(".icon-like-get5").hide();
    $(".icon-like-get6").hide();
    $(".icon-like-get7").hide();
    $(".icon-like-get8").hide();
    $(".icon-like-get9").hide();
    $(".icon-like-get10").hide();
    $(".icon-like-get11").hide();

    $(".button-like-get").click(function () {
        $(".like").toggleClass("like-get");
        $(".icon-like").toggle();
        $(".icon-like-get").toggle();
    });

    $(".button-like-get2").click(function () {
        $(".like2").toggleClass("like-get");
        $(".icon-like2").toggle();
        $(".icon-like-get2").toggle();
    });
    $(".button-like-get3").click(function () {
        $(".like3").toggleClass("like-get");
        $(".icon-like3").toggle();
        $(".icon-like-get3").toggle();
    });
    $(".button-like-get4").click(function () {
        $(".like4").toggleClass("like-get");
        $(".icon-like4").toggle();
        $(".icon-like-get4").toggle();
    });
    $(".button-like-get5").click(function () {
        $(".like5").toggleClass("like-get");
        $(".icon-like5").toggle();
        $(".icon-like-get5").toggle();
    });
    $(".button-like-get6").click(function () {
        $(".like6").toggleClass("like-get");
        $(".icon-like6").toggle();
        $(".icon-like-get6").toggle();
    });
    $(".button-like-get7").click(function () {
        $(".like7").toggleClass("like-get");
        $(".icon-like7").toggle();
        $(".icon-like-get7").toggle();
    });
    $(".button-like-get8").click(function () {
        $(".like8").toggleClass("like-get");
        $(".icon-like8").toggle();
        $(".icon-like-get8").toggle();
    });
    $(".button-like-get9").click(function () {
        $(".like9").toggleClass("like-get");
        $(".icon-like9").toggle();
        $(".icon-like-get9").toggle();
    });
    $(".button-like-get10").click(function () {
        $(".like10").toggleClass("like-get");
        $(".icon-like10").toggle();
        $(".icon-like-get10").toggle();
    });
    $(".button-like-get11").click(function () {
        $(".like11").toggleClass("like-get");
        $(".icon-like11").toggle();
        $(".icon-like-get11").toggle();
    });
    //--------------------------button-like-----------------------------------
    var header = document.getElementById("myMenu");
    var btns = header.getElementsByClassName("menu-item");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }

    //-----------------------------------PerfectScrollbar------------------------
    var demo1 = document.querySelector(".menu-user");
    var ps = new PerfectScrollbar(demo1);

    var demo2 = document.querySelector('#scrollbar_r');
    var ps2 = new PerfectScrollbar(demo2);


    //-------------------------------------upload-img--------------------------------------------

    if (window.File && window.FileList && window.FileReader) {
        $("#files").on("change", function (e) {
            var files = e.target.files,
                filesLength = files.length;

            for (var i = 0; i < filesLength; i++) {
                var f = files[i]
                var fileReader = new FileReader();
                fileReader.onload = (function (e) {
                    console.log(e);
                    var file = e.target;
                    $("<span class=\"pip\">" +
                        "<img class=\"imageThumb\" src=\"" + e.target.result + "\"/>" +
                        "<br/><span class=\"remove\">X</span>" +
                        "</span>").insertAfter("#files");

                    $(".remove").click(function () {
                        $(this).parent(".pip").remove();
                        //location.reload(".field")
                    });
                });
                fileReader.readAsDataURL(f);
            }
        });
    } else {
        alert("Your browser doesn't support to File API")
    }
    //-----------------------post-----------------------
    $("#btn_post").click(function () {
        var x = document.getElementById("myText").value;
        document.getElementById("new_content").innerHTML = x;
        $(".new-feed").css("display", "block");

    });
    function readURL0(input) {
        if (input.files && input.files[0]) {
            var reader0 = new FileReader();

            reader0.onload = function (e) {
                $('.profile-img-tag-0').attr('src', e.target.result);
            }
            reader0.readAsDataURL(input.files[0]);
        }
    }
    $("#files").change(function () {
        readURL0(this);
    });

    //-----------------------post-img----------------------
    $(".upimg").click(function () {
        $(".postimgtest").toggle();
    });

    $("#btn_post_img").click(function () {
        $(".new-feed-img").css("display", "block");
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-img-tag').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#profile-img").change(function () {
        readURL(this);
    });
    //-----------------------post-img2----------------------

    $(".up-post-img").click(function () {

        $(".comment-img").toggle();
    });
    $("#btn_post_img3").click(function () {
        var x = document.getElementById("myText2").value;
        document.getElementById("new_content2").innerHTML = x;
        $(".new-feed-2").css("display", "block");
    });
    function readURL2(input) {
        if (input.files && input.files[0]) {
            var reader2 = new FileReader();

            reader2.onload = function (e) {
                $('.profile-img-tag2').attr('src', e.target.result);
            }
            reader2.readAsDataURL(input.files[0]);
        }
    }
    $("#profile-img2").change(function () {
        readURL2(this);
    });
    //////////////////////////////////////////////////////////////////////////////////////////////
    $('input[name="files"]').fileuploader({
        // Options will go here

    });

    $(".pip").sortable();
    $(".pip").disableSelection();


});
