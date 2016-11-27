fast prototyping

    cd webpack && nodejs server.js

build

    cd webpack && ../bin/webpack --config webpack.rails.config.js

investigate https://github.com/janekp/mapstrace

js unit testing

    CHROME_BIN=/usr/bin/chromium-browser bin/karma start spec/javascripts/karma.conf.js

console

    cp tmuxinator.yml ~/.tmuxinator/new_stack.yml
    tmuxinator start new_stack
