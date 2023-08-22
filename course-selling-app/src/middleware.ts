import { NextResponse,NextRequest  } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log("middleware executed");
    const authToken=request.cookies.get("authToken")?.value;
    console.log("Auth token:", authToken);

    if(request.nextUrl.pathname==="/api/login" || 
       request.nextUrl.pathname==="/api/users" ||
       request.nextUrl.pathname==="/api/admin:path*" 
      
    ){
        return;
    }
    
    const loggedinUserUnaccesspath=request.nextUrl.pathname==="/login" ||
    request.nextUrl.pathname=== "/signupAdmin" ||
    request.nextUrl.pathname=== "/signupUser"; 
    if(loggedinUserUnaccesspath){
        //accessing not secured routes
        if(authToken){
            return NextResponse.redirect(new URL('/profile/user', request.url))
        }
    }else{
        //accessing secured route
        if(!authToken){

            if(request.nextUrl.pathname.startsWith("/api")){
                return NextResponse.json({
                    message:"Access Denied!",
                    success:false
                },{
                    status:40
                })
            }    

            return NextResponse.redirect(new URL('/login', request.url))
        }else{
            
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