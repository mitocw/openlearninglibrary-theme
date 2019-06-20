window.onload = function () {
    var postRender = function () {

        $("label").addClass("focus-in").removeClass("focus-out");
        var inputs = this.$('.form-field'),
            inputSelectors = 'input, select, textarea',
            inputTipSelectors = ['tip error', 'tip tip-input'],
            inputTipSelectorsHidden = ['tip error hidden', 'tip tip-input hidden'],
            onInputFocus = function () {
                // Apply on focus styles to input
                $(this).find('label').addClass('focus-in')
                    .removeClass('focus-out');

                // Show each input tip
                $(this).children().each(function () {
                    if (inputTipSelectorsHidden.indexOf($(this).attr('class')) >= 0) {
                        $(this).removeClass('hidden');
                    }
                });
            },
            onInputFocusOut = function () {
                // If input has no text apply focus out styles
                if ($(this).find(inputSelectors).val().length === 0) {
                    $(this).find('label').addClass('focus-out')
                        .removeClass('focus-in');
                }

                // Hide each input tip
                $(this).children().each(function () {
                    // This is a 1 instead of 0 so the error message for a field is not
                    // hidden on blur and only the help tip is hidden.
                    if (inputTipSelectors.indexOf($(this).attr('class')) >= 1) {
                        $(this).addClass('hidden');
                    }
                });
            },
            handleInputBehavior = function (input) {
                // Initially put label in input
                if (input.find(inputSelectors).val().length === 0) {
                    input.find('label').addClass('focus-out')
                        .removeClass('focus-in');
                }

                // Initially hide each input tip
                input.children().each(function () {
                    if (inputTipSelectors.indexOf($(this).attr('class')) >= 0) {
                        $(this).addClass('hidden');
                    }
                });

                input.focusin(onInputFocus);
                input.focusout(onInputFocusOut);
            },
            handleAutocomplete = function () {
                $(inputs).each(function () {
                    var $input = $(this),
                        isCheckbox = $input.attr('class').indexOf('checkbox') !== -1;

                    if (!isCheckbox) {
                        if ($input.find(inputSelectors).val().length === 0
                            && !$input.is(':-webkit-autofill')) {
                            $input.find('label').addClass('focus-out')
                                .removeClass('focus-in');
                        } else {
                            $input.find('label').addClass('focus-in')
                                .removeClass('focus-out');
                        }
                    }
                });
            };
        $(inputs).each(function () {
            var $input = $(this),
                isCheckbox = $input.attr('class').indexOf('checkbox') !== -1;
            if ($input.length > 0 && !isCheckbox) {
                handleInputBehavior($input);
            }
        });
        setTimeout(handleAutocomplete, 1000);
    };
    var interval = setInterval(function () {
        if ($("label").length) {
            clearInterval(interval);
            postRender();
        }
    });

    $("button.forgot-password").click(function () {
        var interval = setInterval(function () {
            if ($("label").length) {
                clearInterval(interval);
                postRender();
            }
        });
    });
}
