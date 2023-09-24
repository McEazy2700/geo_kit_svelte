/**
 * Refers to the diferent representations of a coordinate
 */
interface Coordinate {
	/// The string representation of the coordinate 9°00'00"
	str: string;

	/// The decimal representation of the coordinate 9.00000000
	dec: number;
}

/*
 * Represents a point on a map of intersecting latitude and longitude
 */
export class Location {
	longitude: Coordinate;
	latitude: Coordinate;

	constructor(lat: string, lon: string) {
		this.latitude = this.parseCorrdinate(lat);
		this.longitude = this.parseCorrdinate(lon);
	}

	private parseCorrdinate(coordinate: string): Coordinate {
		const nums = coordinate
			.trim()
			.split(',')
			.map((num) => {
				if (!isNaN(parseInt(num))) {
					return parseInt(num);
				}
				return 0;
			});
		const deg = nums[0] ?? 0;
		const min = (nums[1] ?? 0) / 60;
		const sec = (nums[2] ?? 0) / 3600;
		console.log({ deg, sec, min });
		const dec = parseFloat((deg + min + sec).toFixed(10));
		const str = `${nums[0] ?? 0}° ${nums[1] ?? 0}' ${nums[2] ?? 0}"`;
		return { dec, str };
	}
}
