// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { getToken } from "next-auth/jwt";

// // Set this in your .env, same secret you use for NextAuth
// // NEXTAUTH_SECRET=your_strong_secret

// export async function middleware(req: NextRequest) {
//   const { pathname, search } = req.nextUrl;

//   // Read token from NextAuth JWT cookie, null if logged out
//   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

//   const isAuthed = Boolean(token);
//   const isAuthPage = pathname.startsWith("/auth/login");
//   const isProtected = pathname.startsWith("/dashboard") || pathname.startsWith("/account");

//   // If authed, do not let them visit the login page again
//   if (isAuthed && isAuthPage) {
//     const url = req.nextUrl.clone();
//     url.pathname = "/";
//     return NextResponse.redirect(url);
//   }

//   // If not authed, block protected routes and send to login with callback
//   if (!isAuthed && isProtected) {
//     const url = req.nextUrl.clone();
//     url.pathname = "/auth/login";
//     // optional, send them back after successful login
//     const callbackUrl = pathname + (search ? `?${search}` : "");
//     url.searchParams.set("callbackUrl", callbackUrl);
//     return NextResponse.redirect(url);
//   }

//   // otherwise, allow
//   return NextResponse.next();
// }

// // Only run middleware on specific routes to keep it fast
// export const config = {
//   matcher: [
//     // "/auth/login",
//     "/dashboard/:path*",
//     "/account/:path*",
//   ],
// };



// middleware.ts (create this in your root directory, same level as app/)
// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   function middleware(req) {
//     const token = req.nextauth.token;
//     const isAuth = !!token;
//     const isAuthPage = req.nextUrl.pathname.startsWith("/auth");
//     const isPublicPage = req.nextUrl.pathname === "/" || isAuthPage;

//     // If user is authenticated and tries to access auth pages (login/register)
//     // redirect them to home
//     if (isPublicPage && isAuthPage && isAuth) {
//       return NextResponse.redirect(new URL("/", req.url));
//     }

//     // If user is not authenticated and tries to access protected routes
//     // redirect them to login
//     if (!isPublicPage && !isAuthPage && !isAuth) {
//       let from = req.nextUrl.pathname;
//       if (req.nextUrl.search) {
//         from += req.nextUrl.search;
//       }

//       return NextResponse.redirect(
//         new URL(`/auth/login?from=${encodeURIComponent(from)}`, req.url)
//       );
//     }

//     return NextResponse.next();
//   },
//   {
//     callbacks: {
//       authorized: () => true, // We handle authorization in the middleware function above
//     },
//   }
// );

// // Configure which routes to protect
// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except:
//      * - / (home page - make this public)
//      * - /api/auth/* (NextAuth routes)
//      * - /_next/* (Next.js internals)
//      * - /fonts/* (font files)
//      * - /images/* (image files)
//      * - /favicon.ico, /sitemap.xml, /robots.txt (static files)
//      */
//     "/((?!api/auth|_next|fonts|images|favicon.ico|sitemap.xml|robots.txt).*)",
//   ],
// };


// ======================== 3RDDDDD
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuth = !!token;

    const pathname = req.nextUrl.pathname;

    // Flags
    const isAuthPage = pathname.startsWith("/auth");
    const isLoginPage = pathname === "/auth/login";

    // Public pages:
    // - Home page "/"
    // - Login page for unauthenticated users
    const isPublicPage = pathname === "/" || isLoginPage || pathname === '/auth/register' || pathname.startsWith('/demo');

    // If user is authenticated and tries to access ANY auth page (including /auth/login),
    // redirect them to home
    if (isAuth && isAuthPage) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // If user is NOT authenticated and tries to access protected routes,
    // redirect them to login with ?from=
    if (!isAuth && !isPublicPage) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) {
        from += req.nextUrl.search;
      }

      return NextResponse.redirect(
        new URL(`/auth/login?from=${encodeURIComponent(from)}`, req.url)
      );
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true, // We handle authorization in the middleware function above
    },
  }
);

// Configure which routes to protect
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - / (home page - make this public)
     * - /api/auth/* (NextAuth routes)
     * - /_next/* (Next.js internals)
     * - /fonts/* (font files)
     * - /images/* (image files)
     * - /favicon.ico, /sitemap.xml, /robots.txt (static files)
     */
    "/((?!api/auth|_next|fonts|images|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
