import { getAuthenticatedAppForUser } from '@/firebase/serverApp';
import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/chat'];
export async function middleware(req: NextRequest) {
  const { currentUser } = await getAuthenticatedAppForUser();

  if (!currentUser && protectedRoutes.includes(req?.nextUrl?.pathname)) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}
