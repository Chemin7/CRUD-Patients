
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const {  validationResult } = require("express-validator");

const userController = {
    createUser : async (req, res) => {
          
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.render("register", {
              errors: errors.array(),
              email: req.body.email,
              password: req.body.password
            });
          }
      
          const hashedPassword = await bcrypt.hash(req.body.password, 10);
          try{
            await prisma.user.create({
              data: { email: req.body.email, password: hashedPassword },
            });
            return res.redirect("/login");
          }catch(err){
          
            return res.redirect("/register")
          }
        
        }
    
        
      
}

module.exports = userController;
