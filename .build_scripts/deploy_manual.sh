#!/usr/bin/env bash
set -e # halt script on error

# If this is the deploy branch, push it up to gh-pages
echo "Get ready, we're pushing to gh-pages!"
rm -rf site
mkdir site
cp -a dist site
cp -a img fonts index.html style-rtl.css locale.js oauth.json CNAME site
cd site
git init
git config user.name "Eugene Dementjev"
git config user.email "drdaemos@gmail.com"
git add .
git commit -m "Manual deploy to gh-pages"
git push --force 'https://drdaemos@github.com/xcart/prose.git' master:gh-pages
