//Age gate to allow users to access page depending on the age that they are.
function ageGate() {
    var day = $("#dob_day").val();
    var month = $("#dob_month").val();
    var year = $("#dob_year").val();
    var age = 14;
    var mydate = new Date();
    mydate.setFullYear(year, month-1, day);

    var currdate = new Date();
    currdate.setFullYear(currdate.getFullYear() - age);
    
    if ((currdate - mydate) < 0){
        alert("Sorry, only persons over the age of " + age + " may enter this site");
        
        // Reset dob_year back to default so it gets required message
        if(currdate > 2002){
            $("#dob_year").val('');    
        }
        
        return false;
    }
    return true;  
}

$(document).ready(function(){
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

    // Constellations initialise
    var canvasDiv = document.getElementById('particle-canvas');
    
    var options = {
      particleColor: '#000',
      interactive: true,
      speed: 'high',
      density: 'high'
    };

    var particleCanvas = new ParticleNetwork(canvasDiv, options);

    // jQuery validate form and submit form    
    $('#contact-form').validate();

    // Submit form but check user is of age
    $('#contact-form').submit( function(){
        ageGate();
    });
});