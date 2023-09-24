import type { Location } from '$lib/utils/classes/mapClasses';
import { writable } from 'svelte/store';

const { subscribe, set, update } = writable<Location[]>([]);

function push(location: Location) {
	update((curr) => {
		return [...curr, location];
	});
}

export default { subscribe, set, update, push };
