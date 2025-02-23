// types.ts
export interface Game {
    id:string,
    name: string;
    description: string;
    image: string;
    comments?: string[],
    average_score?: number
    blobs?: []
    num_comments?: number
    total_score?: number
}

export interface GameComment {
    owner:string
    score: number
    text:string
}

export interface EGameAddEvent {
    id:string,
    name: string;
    b36string: string;
}