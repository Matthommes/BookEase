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
      scope: ["profile", "email"],
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0]?.value;
        let user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
          user = await prisma.user.create({
            data: { email, isVerified: true, verificationToken: null },
          });
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

export default passport;
