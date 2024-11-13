import { NextResponse } from 'next/server';

// The purpose of this is identity verification across AT Protocol platforms like BlueSky
// https://docs.bsky.app/docs/advanced-guides/atproto
export async function GET() {
  const textFileContents = 'did:plc:clt4j4uhlrdlm5j6piuxxddw';

  return new NextResponse(textFileContents, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
