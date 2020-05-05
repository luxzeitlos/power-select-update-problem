import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MovieComponent extends Component {
  @tracked flipped = false;

  @action flip() {
    this.flipped = !this.flipped;
  }
  @action selectActor() {}

  get actors() {
    if(!this.flipped) {
      return this.args.movie.actors;
    }
    return [{ id: 'X', name: 'I WANT TO SEE THIS' }];
  }

  get actorsWithWorkaround() {
    if(!this.flipped) {
      return this.args.movie.actors.toArray();
    }
    return [{ id: 'X', name: 'I WANT TO SEE THIS' }];
  }
}
