$(document).ready(function(){
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();

        if (windowsize < 420) {
            $(".navbar-toggle").addClass('hidden-xs');
            $("#menu-toggle").removeClass('hidden-xs');
            $("#sidebar-wrapper").removeClass('hidden-xs');
            if($("#wrapper").hasClass('active')){
                $("#websiteName").removeClass('hidden-xs');
            }
            else{
                $("#websiteName").addClass('hidden-xs');
            }
            $("#subMenu").addClass('hidden-xs');
            $("#menubar").css('width', '50px');
        }
        else{
            $(".navbar-toggle").removeClass('hidden-xs');
            $("#menu-toggle").addClass('hidden-xs');
            $("#sidebar-wrapper").addClass('hidden-xs');
            $("#websiteName").removeClass('hidden-xs');
            $("#subMenu").removeClass('hidden-xs');
            $("#menubar").css('width', '');
        }
    }
        
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
        $("#websiteName").toggleClass('hidden-xs');
    });
    
    checkWidth();
    $(window).resize(checkWidth);
});