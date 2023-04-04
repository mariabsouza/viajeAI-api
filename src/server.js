const app = require('./app')
const port = process.env.PORT || 3000

//Port

app.listen(process.env.PORT || 5000, () =>{
  console.log(`Server listening on port ${port}`)
})