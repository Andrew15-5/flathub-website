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
import { ReviewItem } from "./review-item"

/**
 *
 * @export
 * @interface ReviewRequest
 */
export interface ReviewRequest {
  /**
   *
   * @type {number}
   * @memberof ReviewRequest
   */
  build_id: number
  /**
   *
   * @type {number}
   * @memberof ReviewRequest
   */
  job_id: number
  /**
   *
   * @type {{ [key: string]: ReviewItem; }}
   * @memberof ReviewRequest
   */
  app_metadata: { [key: string]: ReviewItem }
}