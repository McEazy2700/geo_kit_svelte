import { writable } from "svelte/store";

const { subscribe, set, update } = writable<number[]>([]);

function push(value: number) {
  update((curr) => {
    return [...curr, value]
  })
}

export default { subscribe, set, update, push }
