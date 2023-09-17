import { derived } from 'svelte/store';
import jointValues from './jontValues';
import jointInterval from './jointInterval';
import { prepareRanges } from '$lib/utils/functions';

export default derived([jointValues, jointInterval], ([$jointValues, $jointInterval]) => {
	const ranges = prepareRanges($jointInterval);

	return ranges.map((range) => ({
		name: range.toString(),
		value: range.match($jointValues).length
	}));
});
