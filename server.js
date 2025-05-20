const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 设置静态文件目录为当前目录
app.use(express.static(__dirname));

// 访问根路径时返回 index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`服务器已启动：http://localhost:${PORT}`);
}); 