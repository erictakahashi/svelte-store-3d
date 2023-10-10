export {};

declare global {
	interface Document {
		startViewTransition: (cb: () => Promise<unknown>) => Promise<unknown>;
	}
}
