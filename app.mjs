import * as Sentry from "@sentry/node";
import { FibonacciDpWithoutRecursion } from "./fibonacci.mjs";

Sentry.init({
    dsn: 'http://b51f3e905b89f8348908e7ba99625226@d45e-34-16-190-227.ngrok-free.app/5',
    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  });

const res = FibonacciDpWithoutRecursion(100)

console.log(res)