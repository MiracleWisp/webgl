export class TextureCounter {
    private static counter = 0;

    public static getTextNum(): number {
        return this.counter++;
    }
}
