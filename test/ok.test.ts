import test from 'ava';

import { ok, waitFor } from '../src';

async function p(val: string, delay: number = 0): Promise<string> {
	await waitFor(delay);
	return val;
}

async function fail(delay: number = 0): Promise<number> {
	await waitFor(delay);
	throw new Error('fail');
}

test('Returns a value on success', async (t) => {
	const foo = await ok(p('foo'));
	t.is(foo, 'foo');
});

test('Returns undefined on error', async (t) => {
	const res = await ok(fail());
	t.is(res, undefined);
});
