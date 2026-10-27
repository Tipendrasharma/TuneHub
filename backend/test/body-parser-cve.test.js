'use strict';

// Reproduction test for GHSA-27r3-jxmh-p828: body-parser must be at the
// fixed version 2.4.0 (or newer). The package is pulled in transitively by
// Express 5, so we assert on the version that is resolved for installation.

const test = require('node:test');
const assert = require('node:assert');

function resolvedBodyParserVersion() {
  // Prefer the version actually installed in node_modules when present.
  try {
    return require('body-parser/package.json').version;
  } catch {
    // Dependency tree not installed yet; use the lockfile resolution instead.
    const lock = require('../package-lock.json');
    return lock.packages['node_modules/body-parser'].version;
  }
}

test('body-parser is at the GHSA-27r3-jxmh-p828 fixed version (>= 2.4.0)', () => {
  const version = resolvedBodyParserVersion();
  const [major, minor] = version.split('.').map(Number);
  assert.ok(
    major > 2 || (major === 2 && minor >= 4),
    `expected body-parser >= 2.4.0, got ${version}`,
  );
});
