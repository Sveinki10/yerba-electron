interface Window {
    readonly yerba: { version: number; };
    readonly fs: typeof import("fs");
    /**
     * Safe expose node.js API
     * @example
     * window.nodeCrypto('data')
     */
    readonly nodeCrypto: { sha256sum: any; };
}
