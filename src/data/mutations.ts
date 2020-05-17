import gql from 'graphql-tag'

export const CONVERT_HTML = gql`
mutation generateComponent(
  $html: String!
  $framework: String!
) {
  convertHtml(convertInput: {
    framework: $framework
    html: $html
  }) {
    id
    component
  }
}
`
