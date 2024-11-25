export const calculateTotal = (data:any, key:string) => {
  return data.reduce((sum:number, item:any) => sum + item[key], 0);
}