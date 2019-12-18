$(function(){

    $('.simptomy__left-spisok .tab, .reviews__main-tabs .reviews__main-tab').on('click' ,function(event) {
      var id = $(this).attr('data-id');
        $('.tabs-box, .reviews__main').find('.tab-item, .reviews__main-columns').removeClass('active-tab').hide();
        $('.simptomy__left-spisok, .reviews__main-tabs ').find('.reviews__main-tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
      });
  
  });