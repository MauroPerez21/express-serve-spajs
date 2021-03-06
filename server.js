const express = require('express');
const path = require('path');
const app = express();
//MiddleWare
app.use('/static', express.static(path.resolve(__dirname,'frontend','static')))
app.get('/*', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'frontend','index.html'));  
});
//app.set('views',path.join(__dirname,'frontend'));
app.listen(process.env.PORT || 60, ()=>
console.log('Server running...'));