set -e

cd dist

cp -a . ..

cd ..

git add .
git commit -m 'deploy' && git push origin master