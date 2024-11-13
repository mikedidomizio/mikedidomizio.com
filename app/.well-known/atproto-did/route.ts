import { NextResponse } from 'next/server';

export async function GET() {
  const textFileContents = 'did:plc:clt4j4uhlrdlm5j6piuxxddw';

  return new NextResponse(textFileContents, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
