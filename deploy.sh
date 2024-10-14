#! /bin/sh
# 构建代码,提交代码，发布代码
# 先构建
npm run build
cd ./deploy
rm -rf docs-dist
cd ..
mv docs-dist ./deploy/
git add -A
if [ $2 = "N" ]; then
git commit -m "$1" --no-verify
else
git commit -m "$1"
fi
git push
