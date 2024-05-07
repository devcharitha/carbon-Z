import { module, test } from 'qunit';
import { setupTest } from 'carbon-null/tests/helpers';

module('Unit | Controller | welcome-pg', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:welcome-pg');
    assert.ok(controller);
  });
});
