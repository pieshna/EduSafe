import multer from 'multer'
import fs from'fs'
import path from 'path'

const dirPath=path.join(__dirname, '..','/upload')

const storage=multer.diskStorage({
  destination: function(req,file,cb) {
    if (!fs.existsSync(dirPath)) {
      fs.mkdir(dirPath, function (err) {
        if (err) {
          console.log(err)
        }
      })}
      cb(null,dirPath)
  },
  filename: function(req,file, cb){
      cb(null, file.fieldname+'-'+Date.now()+'-'+file.originalname)
  }
})

const upload=multer({storage: storage})

export default upload