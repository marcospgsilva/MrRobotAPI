export type Actions = 'D' | 'E' | 'C' | 'B' | 'M' | 'GE' | 'GD'
export interface SetRobotMovementRequest {
  body: { move: Actions[] }
}
