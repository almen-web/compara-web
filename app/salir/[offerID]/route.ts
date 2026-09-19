import { NextRequest, NextResponse } from 'next/server';
import { getOfferById } from '@/lib/offers';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ offerID: string }> }
) {
  const { offerID } = await params;
  const offer = getOfferById(offerID);

  if (!offer || !offer.url) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.redirect(offer.url);
}