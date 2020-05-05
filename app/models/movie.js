import Model, { attr, hasMany } from '@ember-data/model';

export default class MovieModel extends Model {
  @attr name;
  @hasMany('actor') actors;
}
