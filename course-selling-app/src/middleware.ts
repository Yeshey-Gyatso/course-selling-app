import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log("middleware executed");
    const authToken=request.cookies.get("authToken")?.value;
    
    const loggedinUserUnaccesspath=
    request.nextUrl.pathname===
    "/login" ||
    request.nextUrl.pathname=== "/signupAdmin" ||
    request.nextUrl.pathname=== "/signupUser";
    if(loggedinUserUnaccesspath){
        if(authToken){
            return NextResponse.redirect(new URL('/profile/user', request.url))
        }
    }else{
        //accessing secured route
        if(!authToken){
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }
//   return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/login",
    "/signupAdmin",
    "/signupUser",
    "/api/:path*",
    "/add-course",
    "/profile/:path*"
    ],
}