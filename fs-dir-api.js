import fs from 'fs'

fs.access('data.txt', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('有操作权限')
  }
})

// rmdir

fs.rmdir('a', { recursive: true }, (err) => {
  console.log(err)
})
