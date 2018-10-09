# Musfealle

##### A LightDM Webkit Greeter Theme that doesn't force you to use a mouse.

![Screenshot](https://raw.githubusercontent.com/pedropenna/musfealle/master/img/screenshot_musfealle.png)

This greeter theme was built based on the [Antergos Greeter Theme](https://github.com/Antergos/lightdm-webkit-theme-antergos)


## Installation

1. Download the theme
2. Unzip the contents on the folder /usr/share/lightdm-webkit/themes/musfealle
3. Edit the file /etc/lightdm/lightdm-webkit-greeter.conf and set the
"webkit-theme" property to "musfealle".
4. Make sure the property "greeter-session" in
/etc/lightdm/lightdm.conf is set to "lightdm-webkit-greeter" (or
"lightdm-webkit2-greeter").

And that should be it!

## Keyboard Shortcuts

- Alt + R: Restart
- Alt + D: Shutdown
- Alt + H: Hibernate
- Alt + P: Suspend
- Alt + S or Alt + C: Cycle through the session options
- Tab: Move focus between username and password fields
- Enter: Log In

*Obs: Musfealle means "mouse trap" in old english according to some dictionary sites.*

