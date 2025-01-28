/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
/* deno-fmt-ignore-file */

declare module "sst" {
  export interface Resource {
    "core": {
      "configSet": string
      "sender": string
      "type": "sst.aws.Email"
    }
    "invoicen-auth": {
      "type": "sst.aws.Auth"
      "url": string
    }
    "invoicen-pg": {
      "database": string
      "host": string
      "password": string
      "port": number
      "type": "sst.aws.Postgres"
      "username": string
    }
    "invoicen-s3": {
      "name": string
      "type": "sst.aws.Bucket"
    }
    "invoicen-vpc": {
      "type": "sst.aws.Vpc"
    }
    "invoicen-web": {
      "type": "sst.aws.Nextjs"
      "url": string
    }
  }
}
/// <reference path="sst-env.d.ts" />

import "sst"
export {}