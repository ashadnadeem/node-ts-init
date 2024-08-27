export interface HeaderType {
  error: boolean;
  errorCode: string | null;
  errorMessage: string | null;
  errorStack: string[] | null;
}

export interface ResponseType {
  header: HeaderType;
  body: object;
}

export const ResponseJson = (header: HeaderType, body: object = {}): ResponseType => {
  return {
    header: header,
    body: body,
  };
};

export const Header = (
  error: boolean = false,
  errorCode: string | null = null,
  errorMessage: string | null = null,
  errorStack: string | null = null
): HeaderType => {
  // Only stack trace last 4 lines
  let parsedErrorStack: string[] | null = null;

  if (errorStack) {
    parsedErrorStack = errorStack
      .split("\n")
      .slice(0, 4)
      .map((line) => line.trim());
  }

  return {
    error: error,
    errorCode: errorCode,
    errorMessage: errorMessage,
    errorStack: parsedErrorStack,
  };
};
