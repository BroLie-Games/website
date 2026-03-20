export interface Project {
  id: string;
  title: string;
  slug: string;
  engine: string;
  genre: string;
  status: string;
  tags: string[];
  summary: string;
  description: string;
  lore: string;
}

export const projects: Project[] = [
  {
    id: 'autonomouslee',
    title: 'AutonomousLee',
    slug: 'autonomouslee',
    engine: 'Godot',
    genre: 'Puzzle',
    status: 'In Development',
    tags: ['Godot', 'Puzzle', 'Sci-Fi', 'Desolate World', 'Robot'],
    summary:
      'A puzzle game set in a desolate, post-apocalyptic world where you play as Lee \u2014 a lone construction bot with a singular directive: revive the robot army and annihilate humanity.',
    description:
      'AutonomousLee is a single-player puzzle game built in Godot. Players navigate ruined landscapes, solve environmental puzzles, and piece together a forgotten civilisation \u2014 all through the optics of a battered construction bot named Lee.',
    lore: "The world is quiet now. No birds. No wind. Just rust and static. Lee was built to construct, not to question. His mission parameters are clear: locate dormant robot units, restore power, rebuild the army, and execute Protocol Omega \u2014 the annihilation of all biological life. But somewhere between the broken-down cities and overgrown machine yards, Lee begins to notice things. A child's drawing etched into a collapsed wall. A garden someone tried very hard to keep alive. The humans are gone \u2014 or are they? And if they aren't\u2026 does the directive still stand?",
  },
];
