export interface Transportation {
  date: Date;
  originStation: string;
  destinationStation: string;
  trainLine: string;
  JPY: number;
  USD: number;
}

export interface TransportationStation {
  date: Date;
  originStation: string;
  destinationTransferStation: string;
  lineTaken: string;
  isFinalDestination: boolean;
  
}