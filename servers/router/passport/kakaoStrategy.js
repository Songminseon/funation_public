const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;
const User = require('../../models/user');


module.exports = () =>{
  passport.use(new KakaoStrategy({
    clientID:process.env.KAKAO_ID,
    callbackURL:'http://localhost:3000/auth/kakao/callback' //add ip address 
  }, async(Token, refreshToken, profile, done)=>{
    try{ 
      const exUser = await User.findOne({
        where:{snsId:profile.id, provider:'kakao'},
      });
      if(exUser){
        done(null, exUser);
      } else{
        const newUser = await User.create({
          email:profile._json.kakao_account.email,  
          nick:profile.displayName,
          snsId:profile.id,
          provider:'kakao',
          age_range:profile._json.kakao_account.age_range,
          gender:profile._json.kakao_account.gender,
          phone_number:profile._json.kakao_account.phone_number,
          profile_img:profile._json.kakao_account.profile.thumbnail_image_url,
          created_at : profile._json.connected_at,
          wallet:0,
          level:"기부니",
        });
        done(null, newUser);
      }
    } catch(error){
      console.error(error);
      done(error)
    }
  }));
};
