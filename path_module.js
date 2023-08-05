const path = require('path');
console.log(path.sep);//path separator '\' as output

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath);//  \content\subfolder\test.txt(content is folder and subfolder and txt is a file in subfolder)

const base = path.basename(filePath)
console.log(base);//test.txt

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);//  C:\Users\sreelma\OneDrive - Tecnotree\Desktop\NODE JS FOLDER\NODE 1\content\subfolder\test.txt( getting the entire path)