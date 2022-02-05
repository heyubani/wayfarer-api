export const Success = (code, message, data = []) => ({
  status: 'success',
  code,
  message,
  data,
});

export const Error = (code, message) => ({
  status: 'error',
  message,
  code,
  data: null,
});

export const response = (res, resBody) => {
  res.status(resBody.code).json(resBody);
};
