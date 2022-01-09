export type Nullable<T> = T | null| any ;
export interface Data {
    photoURL?:string;
    username?:string;
}
export interface PostInterface{
  id: string,
  title: string,
  content: string,
  user_id: number,
  create_at: string,
  photoURL: string,
  user: User
  comments: Comment[],
  likes: Like[]
}
export interface Comment{
    comment: string,
    created_at: string,
    id: number,
    post_id: number,
    updated_at: string,
    user: User,
    user_id: number
}
export interface User {
    id: number,
    photoURL?:string|null;
    username:string;
}
export interface Like{
    created_at: string,
    id: number,
    post_id: number,
    updated_at: string,
    user: User,
    user_id: number,
}
export interface Room{
    created_at: string,
    id: number,
    name:string
    updated_at: string,
    pivot: User[]
    messages:Messages[]
}
export interface Messages{
    created_at: string,
    room_id: number,
    message: string;
    updated_at: string,
    user: User,
    user_id:number,
    id: number,
    room:Room
}