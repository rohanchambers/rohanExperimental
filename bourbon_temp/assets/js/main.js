// Age gate to allow users to access page depending on the age that they are.
function ageGate() {
    $('#dobYear').change(function(){
        var minYear = 2002;
        var selectedYear = $(this).find('option:selected').html();
        console.log(selectedYear)
        if(selectedYear > minYear) {
            alert('I am sorry but you are not over the age of 14!');
        }        
    });
}

$.validator.addMethod("check_date_of_birth", function(value, element) {

    var day = $("#dob_day").val();
    var month = $("#dob_month").val();
    var year = $("#dob_year").val();
    var age =  14;

    var mydate = new Date();
    mydate.setFullYear(year, month-1, day-1);

    var currdate = new Date();
    currdate.setFullYear(currdate.getFullYear() - age);

    return currdate > mydate;

}, "You must be at least 14 years of age.");

$(document).ready(function(){
    // Constellations init
    var canvasDiv = document.getElementById('particle-canvas');
    
    var options = {
      particleColor: '#000',
      interactive: true,
      speed: 'high',
      density: 'high'
    };

    var particleCanvas = new ParticleNetwork(canvasDiv, options);

    // Show hide value of form inputs
    $('#contact-form input').each(function(){
        var txtval = $(this).val();
        $(this).focus(function(){
            if($(this).val() === txtval){
                $(this).val('');
                $(this).siblings('span').css({width: '100%'});
            }
        });
        $(this).blur(function(){
            if($(this).val() === ''){
                $(this).val(txtval);
                $(this).siblings('span').css({width: '0%'});
            }
        });
    });

    // jQuery validate form and submit form    
    $('#contact-form').validate({
        rules: {
            dob_year: { check_date_of_birth: true }
        },
        submitHandler: function(form) {
            form.submit(); //submit it the form
        }
    });
});