function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    
    res.status(401).json({ message: 'You are not logged in.' });
  }
  
  module.exports = {
    isAuthenticated,
  };