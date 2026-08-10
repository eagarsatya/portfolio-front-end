import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';
import { GITHUB_REPOS_CACHE_TAG } from '../../../lib/github';

export async function POST(request: Request) {
  const secret = process.env.REVALIDATE_SECRET;

  if (!secret) {
    return NextResponse.json(
      { ok: false, error: 'REVALIDATE_SECRET is not configured' },
      { status: 503 }
    );
  }

  const headerSecret = request.headers.get('x-revalidate-secret');

  if (headerSecret !== secret) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  revalidateTag(GITHUB_REPOS_CACHE_TAG, 'max');

  return NextResponse.json({
    ok: true,
    revalidated: true,
    tag: GITHUB_REPOS_CACHE_TAG,
  });
}
