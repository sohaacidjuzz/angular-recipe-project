import { Ingredient } from "../shared/ingredient";

export class Recipe {
    public name: string;
    public description: string;
    public imagepath: string;
    public id: number;
    public ingredients:Ingredient[];

    constructor(name:string, desc: string, imgpath: string, num: number, ingredients:Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagepath = imgpath;
        this.id = num;
        this.ingredients = ingredients;
    }
}
