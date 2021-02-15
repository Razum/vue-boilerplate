import url from "url";
import axios from "axios";
import { API_URL } from "@/constants/globals";

/**
 * Form an API endpoint URL
 * @param  {String} endpoint The path of the call
 * @return {String} Properly formed URL
 */
export function getEndpoint(endpoint = "") {
    return url.resolve(API_URL, endpoint);
}

export const testApi = () => axios.get(getEndpoint("/test")).then(response => response.data);