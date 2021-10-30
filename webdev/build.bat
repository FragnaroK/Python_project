COPY src\index.html \dist
COPY src\index.js \dist
npx postcss ./src/css/style.css --output ./dist/css/style.css

