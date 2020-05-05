import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    const actors = [
      this.store.createRecord('actor', { name: 'Keanu Reeves' }),
      this.store.createRecord('actor', { name: 'Carrie-Anne Moss' }),
    ];
    return this.store.createRecord('movie', { name: 'matrix', actors });
  }
}
