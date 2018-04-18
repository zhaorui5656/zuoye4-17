require(["jquery", "swiper", "iscroll", "handlebars"], function($, swiper, iscroll, Handlebars) {

    $.ajax({
        url: "/getdata",
        success: function(res) {
            var data = JSON.parse(res);
            var list = data.list;
            var ops = data.ops;
            var oph = data.oph;
            var opx = data.opx;
            var ox = data.ox;
            var oh = data.oh;
            fnmt1(list);
            fnmt2(ops);
            fnmt3(oph);
            fnmt4(opx);
            fnmt5(ox);
            fnmt6(oh);


        }
    })

    function fnmt1(list) {
        var mt = $("#sco").html();
        var mtate = Handlebars.compile(mt);
        var html = mtate(list);
        $(".n1").html(html);
    }

    function fnmt2(ops) {
        var mt2 = $("#sco2").html();
        var mtate2 = Handlebars.compile(mt2);
        var html2 = mtate2(ops);
        $(".n2").html(html2);
    }

    function fnmt3(oph) {
        var mt3 = $("#sco3").html();
        var mtate3 = Handlebars.compile(mt3);
        var html3 = mtate3(oph);
        $(".n3").html(html3);
    }

    function fnmt4(opx) {
        var mt4 = $("#sco4").html();

        var mtate4 = Handlebars.compile(mt4);
        var html4 = mtate4(opx);


        $(".n4").html(html4);
    }

    function fnmt5(ox) {
        var mt5 = $("#sco5").html();
        var mtate5 = Handlebars.compile(mt5);
        var html5 = mtate5(ox);
        $(".henggun>ul").html(html5);
        scro.refresh();
    }


    function fnmt6(oh) {
        var mt6 = $("#sco6").html();
        var mtate6 = Handlebars.compile(mt6);
        var html6 = mtate6(oh);
        $(".m-b>ol").html(html6);

    }
    var mySwiper = new Swiper(".m-t", {
        autoplay: 2000,
        pagination: ".page",
        loop: true
    });


    //  var aliw = $(".henggun>ul li").width();

    // var oulw = $(".henggun>ul").width(aliw * 6 + 60);
    var scro = new iscroll(".henggun", {
        scrollbars: true,
        scrollX: true,
        scrollY: false
    });
});