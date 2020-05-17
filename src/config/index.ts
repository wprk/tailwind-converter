export const API_PATH: string = process.env.REACT_APP_API_PATH || ''
export const APP_PATH: string = process.env.REACT_APP_APP_PATH || ''
export const GRAPHQL_ENDPOINT: string = `${process.env.REACT_APP_API_PATH}/graphql` || ''

export default {
  API_PATH,
  APP_PATH,
  GRAPHQL_ENDPOINT,
}