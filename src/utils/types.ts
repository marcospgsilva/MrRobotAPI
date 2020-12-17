export interface SetRobotMovementRequest {
  body: { move: string[] }
}

export type Actions = 'D' | 'E' | 'C' | 'B' | 'M' | 'GE' | 'GD'
