/**
 * Game-mode picker cards shared by every competitive topic queue page (they
 * previously each carried an identical inline copy). Add/modify modes HERE.
 */
export interface GameModeCard {
  key: string;
  icon: string;
  title: string;
  desc: string;
}

export const GAME_MODE_CARDS: GameModeCard[] = [
  { key: 'SPEED_RACE', icon: '⚡', title: 'Speed Race', desc: 'First to 10 correct wins!' },
  { key: 'ACCURACY_CHALLENGE', icon: '🎯', title: 'Accuracy', desc: 'Highest accuracy on 20 wins!' },
  { key: 'TEAM_BATTLE', icon: '👥', title: 'Team 2v2', desc: 'First team to 15 wins!' },
  { key: 'CHAOS', icon: '🎲', title: 'Chaos Mode', desc: 'Power-ups & comebacks — unranked!' },
];
