import Component from '@glimmer/component';
import OneComponent from './one';
import TwoComponenr from './two';

export default class MyCustomWrapperComponent extends Component {
  get someComponent() {
    return 'one';
  }
}
