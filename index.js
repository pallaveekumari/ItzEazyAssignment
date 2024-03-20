$(document).ready(function() {
    var totalInputs = $('.text-input, .select-box, .radio-input').length;
    var filledInputs = 0;
    var currentScreen = 1;

    $('.text-input, .select-box, .radio-input').on('input change', function() {
        filledInputs = 0;
        $('.screen:visible').find('.text-input').each(function() {
            if ($(this).val().length >= 3) {
                filledInputs++;
            }
        });
        $('.screen:visible').find('.select-box, .radio-input:checked').each(function() {
            filledInputs++;
        });
        updateProgressBar();
        // Check if all questions on the first screen are filled
        if (filledInputs === totalInputs && currentScreen === 1) {
            // Transition to the second screen
            $('#screen1').hide();
            $('#screen2').show();
            currentScreen = 2;
        }
    });

    function updateProgressBar() {
        var percentage = (filledInputs / totalInputs) * 100;
        $('.progress-bar').css('width', percentage + '%');
    }
});
