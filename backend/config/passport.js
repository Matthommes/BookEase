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
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Find or create a new user in the database
        const email = profile.emails[0]?.value;
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
          const newUser = await prisma.user.create({
            data: {
              email,
              isVerified: true,
              token: "",
              tokenExp: null,
            },
          });
          return done(null, newUser);
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

export default passport;
