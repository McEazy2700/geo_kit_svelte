import { Range } from './classes';

export function prepareRanges(interval: number) {
	let correctInterval: number;
	if (interval < 10) {
		correctInterval = 10;
	} else if (180 % interval !== 0) {
		correctInterval = Math.round(interval / 10) * 10;
	} else {
		correctInterval = interval;
	}
	let startRange = 0;
	const endRange = 180;
	const ranges: Range[] = [];

	while (!(startRange >= endRange)) {
		ranges.push(
			new Range(
				startRange,
				startRange < interval ? startRange + correctInterval : startRange + correctInterval - 1
			)
		);
		startRange = startRange + correctInterval + 1;
	}

	return ranges;
}
