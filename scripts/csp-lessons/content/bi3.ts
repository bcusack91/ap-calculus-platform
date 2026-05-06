import type { Topic } from '../types';
import { bi3AlgorithmsTopics } from './bi3-algorithms';
import { bi3VariablesProceduresTopics } from './bi3-variables-procedures';
import { bi3ExtraTopics } from './bi3-extra';

export const bi3Topics: Topic[] = [
  ...bi3AlgorithmsTopics,
  ...bi3VariablesProceduresTopics,
  ...bi3ExtraTopics,
];
