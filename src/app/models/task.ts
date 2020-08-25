export class Task {

    constructor(){
        this.isDone = false;
        this.priority = 0;
    }
    public name: string;
    public description: string;
    public isDone: boolean;
    public priority: PriorityEnum;
    public createdDate: Date;
    public finishDate: Date;
    public project: string;


}

export enum PriorityEnum {
    easy = 0,
    medium = 1,
    important = 2
}
