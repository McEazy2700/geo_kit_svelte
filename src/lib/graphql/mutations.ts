import { gql } from '@urql/svelte';

export const PARSE_COORDINATES = gql`
	mutation ParseCoordinates($coordinates: [RawCoordinate!]!) {
		parseCoordinates(coordinates: $coordinates) {
			latStr
			lonStr
			lat
			lon
			id
		}
	}
`;
