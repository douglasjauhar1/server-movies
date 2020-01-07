module.exports = {
    response: (res, status, data) => {
      const result = {}
  
      result.status = status
      result.result = data
  
      return res.status(result.status).json(result)
    }
  }