export class Task {

    public name: string;
    public description: string;
    public isDone: boolean;
    public priority: PriorityEnum;
    public createdDate: Date;
    public finishDate: Date;


}

export enum PriorityEnum {
    easy = 0,
    medium = 1,
    important = 2
}
