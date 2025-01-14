import { Candle } from '../interfaces/candle.interfaces';

export const localExchangeCandlesMock: Candle[] = [
  {
    open: 9594.33,
    high: 9640,
    low: 9561,
    close: 9592.42,
    volume: 367.99,
    start: new Date('2020-02-24T20:00:00'),
  },
  {
    open: 9580.45,
    high: 9649.53,
    low: 9561.13,
    close: 9594.33,
    volume: 430.56,
    start: new Date('2020-02-24T19:00:00'),
  },
  {
    open: 9600.17,
    high: 9601.95,
    low: 9474.74,
    close: 9580.45,
    volume: 1260.56,
    start: new Date('2020-02-24T18:00:00'),
  },
  {
    open: 9653.19,
    high: 9663.29,
    low: 9577,
    close: 9600.17,
    volume: 873.63,
    start: new Date('2020-02-24T17:00:00'),
  },
  {
    open: 9710.19,
    high: 9829.13,
    low: 9637.49,
    close: 9653.19,
    volume: 727.82,
    start: new Date('2020-02-24T16:00:00'),
  },
  {
    open: 9738.02,
    high: 9779.98,
    low: 9669.69,
    close: 9710.19,
    volume: 515.51,
    start: new Date('2020-02-24T15:00:00'),
  },
  {
    open: 9750.42,
    high: 9830.77,
    low: 9728.28,
    close: 9738.02,
    volume: 626.42,
    start: new Date('2020-02-24T14:00:00'),
  },
  {
    open: 9800,
    high: 9815.86,
    low: 9745,
    close: 9750.42,
    volume: 285.34,
    start: new Date('2020-02-24T13:00:00'),
  },
  {
    open: 9820.01,
    high: 9847.63,
    low: 9787.32,
    close: 9800,
    volume: 159,
    start: new Date('2020-02-24T12:00:00'),
  },
  {
    open: 9755.86,
    high: 9850.26,
    low: 9676.22,
    close: 9820.01,
    volume: 528.06,
    start: new Date('2020-02-24T11:00:00'),
  },
].reverse();
