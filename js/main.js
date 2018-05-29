$("ul").on('click', 'li.menu_item', function() {
    var index = $(this).index();
    index+=2;
    $("li:eq("+ index +")").append("_test_");

});
