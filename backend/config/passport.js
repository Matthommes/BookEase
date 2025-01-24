import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import { prisma } from "../config/prisma.js";
import { serverUrl } from "../utils/urls.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${serverUrl}/api/auth/google/callback`,
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0]?.value;
       

        // Find or create user
        let user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              email,
              token: "",
              tokenExp: null,
              isVerified: true,
            },
          });
        }

        return done(null, user);
      } catch (error) {
        console.error("Google OAuth Error:", error);
        return done(error, null);
      }
    }
  )
);
export default passport;
