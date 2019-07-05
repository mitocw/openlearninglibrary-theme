/**
 * Different common utility scripts for the site.
*/

$( window ).load(function() {
  periodicPageCaller();
});

let edxTextPattern = new RegExp('edx', 'gi');

let periodicPageCaller = function () {
    let interval = setInterval(function () {
        clearInterval(interval);

        accountSettingsReplaceEdxWithMitxContent();
    });
};

let accountSettingsReplaceEdxWithMitxContent = function () {
    if (window.location.pathname === '/account/settings') {
            let deleteMyAccountButton = $('body #delete-account-btn'),
            alertContentElement = $('.modal-alert .alert-content');
        $.each($('body .section .account-settings-header-subtitle'), function() {
            if($(this).text().toLocaleLowerCase().includes('edx')) {
                $(this).text(
                    function () {
                        return $(this).text().replace(edxTextPattern, 'MIT Open Learning Library');
                    }
                );
            }
        });

        $('#account-deletion-container p').remove();
        $('#account-deletion-container').prepend(
            '<p class="account-settings-header-subtitle">We’re sorry to see you go!</p><p class="account-settings-header-subtitle">Please note: Deletion of your account and personal data is permanent and cannot be undone. MIT Open Learning Library will not be able to recover your account or the data that is deleted.</p><p class="account-settings-header-subtitle">Once your account is deleted, you cannot use it to take courses on the MIT Open Learning Library app or any other site hosted by MIT Open Learning Library.</p><p class="account-settings-header-subtitle">You may also lose access to verified certificates and other program credentials like MicroMasters certificates. If you want to make a copy of these for your records before proceeding with deletion, follow the instructions for <a href="https://edx.readthedocs.io/projects/edx-guide-for-students/en/latest/SFD_certificates.html#printing-a-certificate" target="_blank">printing or downloading a certificate</a>.</p><p class="account-settings-header-subtitle-warning"><strong>Warning: Account deletion is permanent.</strong> Please read the above carefully before proceeding. This is an irreversible action, and <strong>you will no longer be able to use the same email on MIT Open Learning Library.</strong></p>'
        );
        if (alertContentElement[0]){
            alertContentElement.html('<p>Before proceeding, please activate your account and unlink all social media accounts.</p>')
        }

        deleteMyAccountButton.click(function() {
            let interval = setInterval(function () {
                clearInterval(interval);

                accountDeleteModalMitxContent();
            });
        });
    }
};

let accountDeleteModalMitxContent = function () {
    let modalAlertTitleElement = $('body .modal-alert .alert-title');

    modalAlertTitleElement.text(
        modalAlertTitleElement.text().replace(edxTextPattern, 'MIT Open Learning Library')
    );

    $('body .modal-alert p').first().text(
        'If you proceed, you cannot use it to take courses on the MIT Open Learning Library app or any other site hosted by MIT Open Learning Library.'
    )
};
