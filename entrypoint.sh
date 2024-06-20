#!/usr/bin/env sh
#while true; do echo "Ready" > /dev/null; sleep 1; done

if [ ! -d "node_modules" ]; then \
    echo "Installing npm packages..."
    npm install; \
fi

echo "== Starting server"
npm run dev
