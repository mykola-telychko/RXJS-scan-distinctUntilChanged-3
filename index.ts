import { interval } from 'rxjs';
import { scan, map, distinctUntilChanged } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/scan
// Example 3: Emitting random values from the accumulated array.

// Accumulate values in an array, emit random values from this array.
const scanObs = interval(1000)
  .pipe(
    scan((a, c) => [...a, c], []),
    map((r) => r[Math.floor(Math.random() * r.length)]),
    distinctUntilChanged()
  )
  .subscribe(console.log);
