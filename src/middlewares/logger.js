export const logger = (req,res,next) => {
    console.log('Первый запрос успешно отправлен')
    next()
}

