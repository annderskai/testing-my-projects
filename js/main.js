$.noConflict();
jQuery(document).ready(function($){
    $('#withFriend').hide();
    // TODO: delete later that function below
    function getmyfirstname() {
        return "jhfjhavfv";
    }
    $('#name').val(getmyfirstname());
    /* Здесь предполагается, что данная функция - getmyfirstname - уже написана и
    существует в основном документе, поэтому здесь она просто применяется
    там, где необходимо. */

    $('#organization').change(function() {
        if ($(this).val() == "relative") {
            $('#withFriend').show();
            $('#friend').prop('required', true);
            $('#age').prop('required', true);
        } else {
            $('#withFriend').hide();
            $('#friend').prop('required', false);
            $('#age').prop('required', false);
        };
    }); 
});