#!/usr/bin/env sh

set -e

yarn build:js

cd dist

git init 
git add -A
git commit -m "Update Vite2.x + Vue3.x + TypeScript Starter"

git push -f git@github.com:WalkAlone0325/ele-admin-template-ts.git master:gh-pages

cd -