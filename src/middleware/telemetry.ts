import type { Request, Response, NextFunction } from 'express'

/**
 * Request telemetry middleware — placeholder for future observability hooks
 * (e.g. structured latency recording, trace-id propagation, Prometheus counters).
 * Currently a no-op pass-through so routes that use it compile and run without
 * requiring a full observability stack to be wired in.
 */
export function requestTelemetry(_req: Request, _res: Response, next: NextFunction): void {
  next()
}
