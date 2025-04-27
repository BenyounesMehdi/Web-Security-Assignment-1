// middlewares/originalUrlBypass.js
export function xOriginalUrlBypass(req, res, next) {
    if (req.headers['x-original-url']) {
        req.url = req.headers['x-original-url'];
    }
    next();
}