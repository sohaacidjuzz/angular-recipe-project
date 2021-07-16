export class Recipe {
    public name: string;
    public description: string;
    public imagepath: string;
    public id: number;
    constructor(name:string, desc: string, imgpath: string, num: number) {
        this.name = name;
        this.description = desc;
        this.imagepath = imgpath;
        this.id = num;
    }
}
