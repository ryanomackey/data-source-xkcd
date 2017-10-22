import { GraphQLConnector } from '@gramps/gramps-express';

export default class XKCDConnector extends GraphQLConnector {
  /**
   * xkcd exposes their API through the root URI.
   * @member {string}
   */
  apiBaseUri = `https://xkcd.com`;
}
