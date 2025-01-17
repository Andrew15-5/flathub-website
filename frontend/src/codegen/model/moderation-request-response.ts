/* tslint:disable */
/* eslint-disable */
/**
 * Flathub API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { RequestData } from "./request-data"

/**
 *
 * @export
 * @interface ModerationRequestResponse
 */
export interface ModerationRequestResponse {
  /**
   *
   * @type {number}
   * @memberof ModerationRequestResponse
   */
  id: number
  /**
   *
   * @type {string}
   * @memberof ModerationRequestResponse
   */
  app_id: string
  /**
   *
   * @type {string}
   * @memberof ModerationRequestResponse
   */
  created_at: string
  /**
   *
   * @type {number}
   * @memberof ModerationRequestResponse
   */
  build_id: number
  /**
   *
   * @type {number}
   * @memberof ModerationRequestResponse
   */
  job_id: number
  /**
   *
   * @type {boolean}
   * @memberof ModerationRequestResponse
   */
  is_outdated: boolean
  /**
   *
   * @type {string}
   * @memberof ModerationRequestResponse
   */
  request_type: string
  /**
   *
   * @type {RequestData}
   * @memberof ModerationRequestResponse
   */
  request_data: RequestData | null
  /**
   *
   * @type {boolean}
   * @memberof ModerationRequestResponse
   */
  is_new_submission: boolean
  /**
   *
   * @type {string}
   * @memberof ModerationRequestResponse
   */
  handled_by: string | null
  /**
   *
   * @type {string}
   * @memberof ModerationRequestResponse
   */
  handled_at: string | null
  /**
   *
   * @type {boolean}
   * @memberof ModerationRequestResponse
   */
  is_approved: boolean | null
  /**
   *
   * @type {string}
   * @memberof ModerationRequestResponse
   */
  comment: string | null
}
