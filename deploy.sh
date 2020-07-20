set -e

cd dist

cp -a . ..

git add .
git commit -m 'deploy'

git push origin master

cd -