/**
 * Represents a section in a rosette diagram
 * */
export class RosePole {
	value: number;
	color: string;
	name: string;
	constructor(value: number, name: string) {
		this.value = value;
		this.name = name;
		this.color = this.getRandomColor();
	}

	private getRandomColor(): string {
		const red = Math.floor(Math.random() * 255);
		const green = Math.floor(Math.random() * 255);
		const blue = Math.floor(Math.random() * 255);

		return `rgba(${red}, ${green}, ${blue}, 1)`;
	}
}

export class Range {
	start: number;
	end: number;
	constructor(start: number, end: number) {
		if (end > start) {
			this.start = start;
			this.end = end;
		} else {
			this.start = end;
			this.end = start;
		}
	}

	/**
	 * Returns a string representation of this range
	 * */
	toString(): string {
		return `${this.start}-${this.end}`;
	}

	/**
	 * Matches all the values that fall within this range and returns
	 * a copy of the list that contains those matched values
	 * @param list {number[]} a list of number from which the ranged values are matched
	 * */
	match_count(list: number[]): number {
		const sorted = list.toSorted((a, b) => a - b);
		let count: number = 0;
		for (let i = 0; i < sorted.length; i++) {
			if (sorted[i] >= this.start && sorted[i] <= this.end) {
				count += 1;
			}
		}
		return count;
	}
}
