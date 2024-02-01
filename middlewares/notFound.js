const notFound = (req, res, next) => {
    res.status(404).json({ message: 'resource not found' })
}

module.exports = notFound