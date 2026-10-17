export const apiKey = (req,res,next) => {
    const apiKey = req.headers['x-api-key'];
    if(apiKey != "777"){
         return res.status(400).json({
            message: 'Wrong apiKey'
        })
    }
    next()
    
}
