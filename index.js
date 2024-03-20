$(document).ready(function () {
    var totalInputs = $(".text-input1, .select-box1, .radio-options1").length;
    var totalInputPage2 = $(".text-input2, .select-box2, .radio-options2").length;
    var filledInputs = 0;
    var filledInputs2 = 0;
    var currentScreen = 1;
    $(".text-input1, .select-box1, .radio-input1").on(
      "input change",
      function () {
        filledInputs = 0;
        $(".screen1:visible")
          .find(".text-input1")
          .each(function () {
            if ($(this).val().length >= 3) {
              filledInputs++;
            }
            updateProgressBar();
          });
        $(".screen1:visible")
          .find(".select-box1, .radio-input1:checked")
          .each(function () {
            if ($(this).val()) {
              filledInputs++;
              updateProgressBar();
            }
          });
        if (filledInputs === totalInputs && currentScreen === 1) {
          $("#screen1").hide();
          $("#screen2").show();
          currentScreen = 2;
        }
      }
    );
   
   
    $(".text-input2, .select-box2, .radio-input2").on(
      "input change",
      function () {
        filledInputs = 3;
   
   
        filledInputs2 = 0;
        $(".screen2:visible")
          .find(".text-input2")
          .each(function () {
            if ($(this).val().length >= 3) {
              filledInputs2++;
            }
            updateProgressBar();
          });
        $(".screen2:visible")
          .find(".select-box2, .radio-input2:checked")
          .each(function () {
            if ($(this).val()) {
              filledInputs2++;
              updateProgressBar();
            }
          });
      }
    );
   
   
    $(".backButton").on("click", () => {
      filledInputs2 = 0;
      currentScreen = 1;
      updateProgressBar();
      $(".text-input2").val("");
      $(".select-box2").val("");
      $(".radio-input2").prop("checked", false);
      $("#screen1").show();
      $("#screen2").hide();
    });
   
   
    function updateProgressBar() {
      var percentage =
        ((filledInputs + filledInputs2) / (totalInputs + totalInputPage2)) * 100;
      $(".progress-bar").css("width", percentage + "%");
    }
   });
   
   
   
   