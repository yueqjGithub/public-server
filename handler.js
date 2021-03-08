const { exec } = require('child_process');
const path = require('path');

const targetPath = 'D:/work/next-pc/home-page-pc/'
const pagePorts = {
  webPort: 3000,
  mobilePort: 3002
}

exports.webStart = function (req, res) {
  exec(`cd ${targetPath} && npm run build`, function (error, stdout, stderr) {
    if (error) {
      fs.writeFile(path.join(__dirname+'/logs/', 'error.log'), error, { 'flag': 'a' }, function () {
        console.log('error==>', error)
        const result = {
          code: 400,
          message: '打包失败'
        }
        res.send(JSON.stringify(result))
      })
    } else {
      const result = {
        code: 200,
        message: '执行完成'
      }
      res.send(JSON.stringify(result))
    }
  })
}

