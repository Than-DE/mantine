import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'HoverCard' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoProfile = {
  name: '⭐ Demo: profile',
  render: renderDemo(demos.profile),
};

export const DemoDelay = {
  name: '⭐ Demo: delay',
  render: renderDemo(demos.delay),
};
