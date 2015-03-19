# Musfealle

##### A LightDM Webkit Greeter Theme that doesn't force you to use a mouse.

This greeter theme was built based on the Antergos Greeter Theme (https://github.com/Antergos/lightdm-webkit-theme-antergos)

## Installation

1. Download the theme
2. Unzip the contents on the folder /usr/share/lightdm-webkit/themes/musfealle
3. Edit the file /etc/lightdm/lightdm-webkit-greeter.conf and set the
"webkit-theme" property to "musfealle".

Example:

theme-name=Adwaita
#webkit-theme=default
webkit-theme=musfealle

Obs: Make sure the property "greeter-session" in
/etc/lightdm/lightdm.conf is set to "lightdm-webkit-greeter" or
"lightdm-webkit2-greeter".




Now if you restart your computer (or at least if you restart lightdm),
the antergos greeter theme should be activated.



Musfealle means "mouse trap" in old english according to some dictionay sites.

