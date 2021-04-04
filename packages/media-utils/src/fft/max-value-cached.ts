import {AudioData} from '..';
import {toInt16} from './to-int-16';

const getMax = (array: Float32Array) => {
	let max = 0;
	for (let i = 0; i < array.length; i++) {
		const val = array[i];
		if (val > max) {
			max = val;
		}
	}
	return max;
};

const cache: {
	[key: string]: number;
} = {};

export const getMaxPossibleMagnitude = (metadata: AudioData) => {
	if (cache[metadata.resultId]) {
		return cache[metadata.resultId];
	}
	const result = toInt16(getMax(metadata.channelWaveforms[0]));
	cache[metadata.resultId] = result;
	return result;
};