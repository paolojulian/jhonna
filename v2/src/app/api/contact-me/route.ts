import { sendEmail } from '@/app/api/_services/sendEmail.service';

type PostRequestBody = {
  name: string; // Name of the client
  email: string; // Email of the client
  message: string; // Message of the client
};

// Validate Environments during build
const TO_EMAIL = process.env.TO_EMAIL;
if (!isValidEnv(TO_EMAIL)) {
  throw new Error('TO_EMAIL should be defined on the env.');
}

export async function POST(request: Request) {
  const requestJson = (await request.json()) as unknown;

  const isRequestValid = parseRequest(requestJson);
  if (!isRequestValid) {
    return new Response('Invalid request.', { status: 400 });
  }

  const emailBodyText: string = `
User's information:
Name: ${requestJson.name}
Email: ${requestJson.email}
Message:
${requestJson.message}
`;

  try {
    const response = await sendEmail({
      subject: 'Someone has emailed you from your portfolio',
      text: emailBodyText,
      to: TO_EMAIL as string,
    });

    return Response.json({
      message: response,
    });
  } catch (e) {
    if (e instanceof Error) {
      console.error(e);
      return new Response('Something went wrong!', { status: 500 });
    }

    return new Response('Something went wrong!', { status: 500 });
  }
}

function parseRequest(request: unknown): request is PostRequestBody {
  return (
    typeof request === 'object' &&
    !!request &&
    'name' in request &&
    'email' in request &&
    'message' in request &&
    typeof request.name === 'string' &&
    typeof request.email === 'string' &&
    typeof request.message === 'string'
  );
}

function isValidEnv(env: string | undefined): env is string {
  return typeof env === 'string' && !!env;
}
