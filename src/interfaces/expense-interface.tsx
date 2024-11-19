export interface Souvenir {
  Date: Date,
  Location: string,
  JPY: number,
  USD: number,
  Notes: string
}

export interface FunThings {
  Date: Date,
  Activity: string,
  JPY: number,
  USD: number,
  Notes?: string
}

export interface Transportation {
  Date: Date,
  From: string,
  To: string,
  TrainLine: string,
  JPY: number,
  USD: number
}

export interface Food extends Souvenir {
  Category: string;
}