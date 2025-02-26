declare global {
  interface Array<T> {
    forEachAsync(
      callback: (item: T, index: number, array: T[]) => Promise<void>
    ): Promise<void>;
  }
}

Array.prototype.forEachAsync = async function <T>(
  callback: (item: T, i: number, array: T[]) => Promise<void>
): Promise<void> {
  for (let i = 0; i < this.length; i++) {
    await callback(this[i], i, this);
  }
};

export {};
