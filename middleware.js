import { NextResponse } from "next/server";
import acceptLanguage from 'accept-language';
import { fallbackLng, languages } from './app/i18n/settings';

acceptLanguage.languages(languages)

const cookieName = 'i18next'

export const config = {
    matcher: '/((?!api|_next/static|_next/image|images|favicon.ico).*)'
}

export function middleware(req) {
    
    let lng
    // reading cookie value if present
    if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value)
    if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
    if (!lng) lng = fallbackLng
    
    const pathname = new URL(req.url).pathname
    
    // language from the new pathname
    const pathLanguage = pathname.substring(1,3).toLowerCase()
    const langDelimeter = pathname.substring(3, 4)

    // checking for language changes and setting cookie if it has
    if(languages.includes(pathLanguage) && (langDelimeter === '/' || !langDelimeter)) {
        const response = NextResponse.next()
        if (pathLanguage !== lng) {
            response.cookies.set(cookieName, pathLanguage)
        }
        return response
    }
    
    // redirect to the page with current language
    if(!req.nextUrl.pathname.startsWith('/_next')) return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))

    return NextResponse.next()
}