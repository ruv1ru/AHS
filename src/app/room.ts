export class Room {
    constructor(
        public title: string,
        public sleeps: number,
        public description: string,
        public longDescription: string,
        public seoName: string,
        public facilities: string[]
    ) {}
}
