export const timestamp=(str: string)=>{

    const date = new Date(str);
    return date.getTime();
}