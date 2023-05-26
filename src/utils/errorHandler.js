export function globalErrorHandler(err, req, res, next){

<<<<<<< HEAD

  console.log(err.name)
||||||| 81d3090
// Instance of errors 

  console.log(err.name)
=======
// Instance of errors 
  //console.log(err)
>>>>>>> 6e1c70ebde6ad91cadf859b0a4af9148c0af53fd
  if(err.name === "ValidationError") {
      return res.status(400).json({
      message: err.details[0].message,
      status: "Failed",
      errorType: "ValidationError"
    })
  }

  return res.status(err.status || 404).json({
    message: err.message,
    status: "Failed",
  })
}