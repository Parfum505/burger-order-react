import { useState, useEffect } from "react";

export default (httpClien) => {
  const [error, setError] = useState(null);

  const reqInterceptor = httpClien.interceptors.request.use(
    (request) => {
      setError(null);
      return request;
    },
    (err) => {
      setError(err);
    }
  );
  const respInterceptor = httpClien.interceptors.response.use(
    (resp) => {
      setError(null);
      return resp;
    },
    (err) => {
      setError(err);
    }
  );
  useEffect(() => {
    return function cleanup() {
      httpClien.interceptors.request.eject(reqInterceptor);
      httpClien.interceptors.response.eject(respInterceptor);
    };
  }, [reqInterceptor, respInterceptor]);

  const errorCleanHandler = () => {
    setError(null);
  };

  return [error, errorCleanHandler];
};
