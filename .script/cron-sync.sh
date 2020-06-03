#!/bin/zsh
export PATH=/Users/wisentanasa/.asdf/shims/:$PATH
(cd .script; ./sync.sh) # pull things out from Bear
./node_modules/.bin/note-link-janitor notes
(cd .script; ./sync.sh) # sync backlinks back to Bear
