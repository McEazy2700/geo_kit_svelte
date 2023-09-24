import { Range } from './classes';
import { utils, writeFile } from 'xlsx';

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
		startRange =
			startRange < interval ? startRange + correctInterval + 1 : startRange + correctInterval;
	}

	return ranges;
}

export function downloadSreadsheetFromTable(ref: HTMLTableElement, fileName: string) {
	const wb = utils.table_to_book(ref);
	writeFile(wb, `${fileName}.xlsx`);
}

/**
 * Returns a list of objects representing the range and the frequency
 * @param values {number[]} a list of numbers to get the frequencies form
 * @param interval {number} the gap between each range e.g 0-30 (30 is the interval)
 */
export const getJointFrequencies = (values: number[], interval: number) => {
	if (typeof window !== 'undefined') {
		const ranges = prepareRanges(interval);

		return ranges.map((range) => ({
			name: range.toString(),
			value: range.match_count(values)
		}));
	}
	return [];
};
