# MacOS Custom Setup
### Keychron K2
Remapping right control key to right option
```
<!--
  Put this file in ~/Library/LaunchAgents/com.example.KeyRemapping.plist to
  automatically remap your keys when macOS starts.
  See https://developer.apple.com/library/archive/technotes/tn2450/_index.html for
  the key "usage IDs". Take the usage ID and add 0x700000000 to it before putting it
  into a source or destination (HIDKeyboardModifierMappingSrc and
  HIDKeyboardModifierMappingDst respectively).

  The remapping makes the right control behave as a right option.
-->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.dgrcode.KeyRemapping</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/hidutil</string>
        <string>property</string>
        <string>--set</string>
        <string>{"UserKeyMapping":[
          {
            "HIDKeyboardModifierMappingSrc": 0x7000000E4,
            "HIDKeyboardModifierMappingDst": 0x7000000E6
          }
        ]}</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>

```

**Reference**
https://www.reddit.com/r/Keychron/comments/pbw1pz/remapping_right_control_key_to_right_option_in_mac/

<!-- #evergreen -->

<!-- {BearID:EA3A9EB5-7913-4149-8B0C-B4A2A2D89D1B} -->
