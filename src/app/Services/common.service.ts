import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private counter = 0;

  public binhPhuong(n: number) {
    return n * n;
  }

  public getCounter(): number {
    return this.counter;
  }

  public setCounter(n: number): void {
    this.counter = n;
  }

  public submitData(data: any): void {
    alert('Data is sent to server: ' + data);
  }

  constructor() {}
}
