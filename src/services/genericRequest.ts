import { AxiosResponse } from 'axios';
// eslint-disable-next-line import/extensions
import locale from '~/modules/i18n';
import AxiosInstance from './axiosService';

const sessionId = ''

/**
 * Makes a GET request using the configured axios instance
 *
 * @param {String} path url of the request
 * @param {Object} query an object containing the params for the request
 * @param {Boolean} withAuth a condition used to dynamically apply a session id to the request
 * @returns {Promise} response from the server as a promise
 */
export async function genericGetRequest<T>(
  path: string,
  query: Record<string, any> = {},
  withAuth?: boolean
): Promise<AxiosResponse<T>> {
  const params: any = { ...query, language: locale.language };
  if (withAuth) params.session_id = sessionId;
  return AxiosInstance.get(path, { params })
}

/**
 * Makes a POST request using the configured axios instance
 *
 * @param {String} path url of the request
 * @param {Object} query an object containing the params for the request
 * @param {Object} body payload to send with the request
 * @param {Boolean} withAuth a condition used to dynamically apply a session id to the request
 * @returns Promise
 */
export async function genericPostRequest<T>(
  path: string,
  query: Record<string, any> = {},
  body: Record<string, any> = {},
  withAuth?: boolean
): Promise<AxiosResponse<T>> {
  const params: Record<string, any> = { ...query, language: locale.language };
  if (withAuth) params.session_id = sessionId;

  return AxiosInstance.post(path, body, { params })
}

/**
 * Makes a DELETE request using the configured axios instance
 *
 * @param {String} path url of the request
 * @param {Object} query an object containing the params for the request
 * @param {Boolean} withAuth a condition used to dynamically apply a session id to the request
 * @returns Promise
 */
export async function genericDeleteRequest(
  path: string,
  query: Record<string, any> = {},
  withAuth?: boolean
) {
  const params: Record<string, any> = { ...query, language: locale.language };
  if (withAuth) params.session_id = sessionId;
  return AxiosInstance.delete(path, { params })
}

/**
 * Makes a PUT request using the configured axios instance
 *
 * @param {String} path url of the request
 * @param {Object} query an object containing the params for the request
 * @param {Object} body payload to send with the request
 * @param {Boolean} withAuth a condition used to dynamically apply a session id to the request
 * @returns Promise
 */
export async function genericPutRequest<T>(
  path: string,
  query: Record<string, any> = {},
  body: Record<string, any> = {},
  withAuth?: boolean
): Promise<AxiosResponse<T>> {
  const params: Record<string, any> = { ...query, language: locale.language };
  if (withAuth) params.session_id = sessionId;

  return AxiosInstance.put(path, body, { params })
}

/**
 * Makes a PATCH request using the configured axios instance
 *
 * @param {String} path url of the request
 * @param {Object} query an object containing the params for the request
 * @param {Object} body payload to send with the request
 * @param {Boolean} withAuth a condition used to dynamically apply a session id to the request
 * @returns Promise
 */
export async function genericPatchRequest<T>(
  path: string,
  query: Record<string, any> = {},
  body: Record<string, any> = {},
  withAuth?: boolean
): Promise<AxiosResponse<T>> {
  const params: Record<string, any> = { ...query, language: locale.language };
  if (withAuth) params.session_id = sessionId;

  return AxiosInstance.patch(path, body, { params })
}
