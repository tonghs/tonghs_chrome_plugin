var about = '' 
        + "\n"
        + "\n"
        +"***********************************************************************************************************\n"
        + "***********************************************************************************************************\n"
        + "\n"
        + "                                         ***bitbucket-redmine***\n"                                 
        + "\n"
        + "\n"
        + "                                                                           by tonghs\n"
        + "                                                                           http://tonghs.com\n"
        + "\n"
        + "***********************************************************************************************************\n"
        + "***********************************************************************************************************\n";
        + "\n"
        + "\n"
console.log(about);

$(".iterable-item").each(function(){
    var obj = $(this).children('.text').children('div');
    if (obj != null) {
        var text = obj.text();
        var p = /#\d+/gi;
        var results = text.match(p);

        if (results != null){
            var len = results.length;
            if (len > 0){
                results.sort();
                for (var i = len - 1; i >= 0; i--){
                    if (i < len - 1){
                        text = obj.html() 
                    }
                    var code = results[i]
                    var num = code.replace('#', '');
                    var html = text.replace(code, '<a href="http://bug.pe.vc/view.php?id=' + num + '" target="_blank">' + code + '</a>');
                    obj.html(html);
                }
            }
        }
    }

    
});


$('tr').each(function(){
    if ($(this).attr('class') == 'row-1' || $(this).attr('class') == 'row-2'){
        $(this).children('td').children('a').children('img').each(function(){
            var src = $(this).attr('src');
            $(this).parents('a').attr('href', src);
            $(this).parents('a').attr('target', '_blank');
        });
    }
});

