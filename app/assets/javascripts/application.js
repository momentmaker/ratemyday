// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require bootstrap-rating.min
//= require highcharts
//= require charts

$(function(){ $(document).foundation(); });

$('input').on('change', function () {
  $.ajax({
    url : "/days",
    type: "POST",
    data : {"day": {"rating": $(this).val()}},
    success: function(data, textStatus, jqXHR) {
      location.reload();
    },
    error: function (jqXHR, textStatus, errorThrown) {
      alert("Oops. Something went wrong...")
    }
  });
});
