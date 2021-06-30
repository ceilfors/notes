The file is exported from http://launched.zerowidth.com/

## Updating the file

Copy `com.zerowidth.launched.sync-bear.plist` file to `$HOME/Library/LaunchAgents`
Once it's updated, execute `launchctl unload -w com.zerowidth.launched.sync-bear.plist`,
then `launchctl load -w com.zerowidth.launched.sync-bear.plist`