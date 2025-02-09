import multer from 'multer'

const Storage= multer.memoryStorage()
const upload = multer({storage:Storage})

export {upload}
