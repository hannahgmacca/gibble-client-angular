export interface GoalModel {
    goalId: number;
    type?: string;
    isAchieved?: boolean;
    metric?: number;
    progress?: number;
    updateOnStrengthWorkoutCompletion?: boolean;
    updateOnCardioWorkoutCompletion?: boolean;
    updateOnHiitWorkoutCompletion?: boolean;
    updateOnWorkoutCompletion?: boolean
  }