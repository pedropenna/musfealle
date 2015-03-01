function authentication_complete() {
    writeDebugMessage("authentication_complete");
    if (lightdm.is_authenticated) {
        writeDebugMessage("is authenticated.");
        lightdm.login(lightdm.authentication_user, lightdm.default_session);
    }
}

function submitPassword() {
    writeDebugMessage("submitPassword");
    lightdm.cancel_timed_login();
    lightdm.start_authentication(jQuery("#username").val());
}

function show_error(message) {
    writeDebugMessage("error: " + message);
}

function show_prompt(message) {
    writeDebugMessage("prompt: " + message);
    lightdm.provide_secret(jQuery("#password").val());
}

function writeDebugMessage(message) {
    console.log(message);
    jQuery("#debugBucket").val(jQuery("#debugBucket").val() + "\n" + message);
}

jQuery(document).ready(function() {
    jQuery("#password").focus();

    jQuery("input").keypress(function() {
        if (event.which == 13 || event.which == 10) {
            event.preventDefault();
            submitPassword();
        }       
    });

    jQuery("#username").val(lightdm.users[0].name);
});
