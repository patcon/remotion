import {Browser} from './browser';
import {BrowserExecutable, setBrowserExecutable} from './browser-executable';
import {Codec, setCodec, setOutputFormat} from './codec';
import {Concurrency, setConcurrency} from './concurrency';
import {setCrf} from './crf';
import {ImageFormat, setImageFormat} from './image-format';
import {setImageSequence} from './image-sequence';
import {
	overrideWebpackConfig,
	WebpackConfiguration,
	WebpackOverrideFn,
} from './override-webpack';
import {setOverwriteOutput} from './overwrite';
import {PixelFormat, setPixelFormat} from './pixel-format';
import {setQuality} from './quality';

export const Config = {
	Bundling: {
		/**
		 * Pass in a function which takes the current Webpack config
		 * and return a modified Webpack configuration.
		 * Docs: http://remotion.dev/docs/webpack
		 */
		overrideWebpackConfig,
	},
	Puppeteer: {
		/**
		 * Specify executable path for the browser to use.
		 * Default: null, which will make Remotion find or download a version of said browser.
		 */
		setBrowserExecutable,
	},
	Rendering: {
		/**
		 * Sets how many Puppeteer instances will work on rendering your video in parallel.
		 * Default: `null`, meaning half of the threads available on your CPU.
		 */
		setConcurrency,
		/**
		 * Set the JPEG quality for the frames.
		 * Must be between 0 and 100.
		 * Must be between 0 and 100.
		 * Default: 80
		 */
		setQuality,
		/** Decide in which image format to render. Can be either 'jpeg' or 'png'.
		 * PNG is slower, but supports transparency.
		 */
		setImageFormat,
	},
	Output: {
		/**
		 * If the video file already exists, should Remotion overwrite
		 * the output? Default: false
		 */
		setOverwriteOutput,
		/**
		 * Sets the pixel format in FFMPEG.
		 * See https://trac.ffmpeg.org/wiki/Chroma%20Subsampling for an explanation.
		 * You can override this using the `--pixel-format` Cli flag.
		 */
		setPixelFormat,
		/**
		 * @deprecated Use setCodec() and setImageSequence() instead.
		 * Specify what kind of output you, either `mp4` or `png-sequence`.
		 */
		setOutputFormat,
		/**
		 * Specify the codec for stitching the frames into a video.
		 * Can be `h264` (default), `h265`, `vp8` or `vp9`
		 */
		setCodec,
		/**
		 * Set the Constant Rate Factor to pass to FFMPEG.
		 * Lower values mean better quality, but be aware that the ranges of
		 * possible values greatly differs between codecs.
		 */
		setCrf,
		/**
		 * Set to true if don't want a video but an image sequence as the output.
		 */
		setImageSequence,
	},
} as const;

export type {
	PixelFormat,
	Concurrency,
	WebpackConfiguration,
	WebpackOverrideFn,
	BrowserExecutable,
	ImageFormat,
	Codec,
	Browser,
};