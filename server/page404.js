const page404 = (req, res) => {
    res.status(404).send('Route not Found');
}

module.exports = page404;