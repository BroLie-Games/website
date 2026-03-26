export type BlogContentBlock =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'bullet-list'; items: string[] }
  | { type: 'ordered-list'; items: string[] }
  | { type: 'image'; url: string; alt: string }
  | { type: 'youtube'; url: string };

export interface BlogPost {
  id: string;
  projectId: string;
  title: string;
  date: string;
  summary: string;
  content: BlogContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '8_WvqB0x1bg',
    projectId: 'autonomouslee',
    title: 'Devlog #6 — Polishing the Puzzle Flow',
    date: '2026-03-25',
    summary: `This is quick recording of gameplay for the upcoming game “Autonomouslee”.`,
    content: [
      {
        type: 'paragraph',
        text: `We're working on the levels themselves. Our goal is build levels that are interconnected, to create a sense of a "realistic" world, instead of teleporting to a new level. 

You see our auto tiling in action, and also some y-sorting that finally works as intended.
#gamedev #gamedevelopment #gameplay #godot`,
      },
      { type: 'youtube', url: 'https://youtu.be/8_WvqB0x1bg' },
    ],
  },
  {
    id: 'ArbDoRSSoLM',
    projectId: 'autonomouslee',
    title: 'Devlog #5 — New Environment Art & Atmosphere',
    date: '2026-03-19',
    summary: `This is quick recording of gameplay for the upcoming game “Autonomouslee”.`,
    content: [
      {
        type: 'paragraph',
        text: "We're going to autotiles! That way the general terrain looks better, and that gives the player a better sense of what's what.",
      },
      { type: 'youtube', url: 'https://youtu.be/ArbDoRSSoLM' },
    ],
  },
  {
    id: 'yuLT__NqZQc',
    projectId: 'autonomouslee',
    title: 'Devlog #4 — Lee Gets New Abilities',
    date: '2026-03-16',
    summary: `This is quick recording of gameplay for the upcoming game “Autonomouslee”.`,
    content: [
      {
        type: 'paragraph',
        text: `We have added a dialogue/info system. This will grant us the possibility to add lore specific conversations/thoughts/whatever. Also look at that water stream stopping.

#gameplay #gamedev #gamedevelopment #godot`,
      },
      { type: 'youtube', url: 'https://youtu.be/yuLT__NqZQc' },
    ],
  },
  {
    id: 'GeBPu8IF-X4',
    projectId: 'autonomouslee',
    title: 'Devlog #3 ',
    date: '2026-03-13',
    summary: `This is quick recording of gameplay for the upcoming game “Autonomouslee”.`,
    content: [
      { type: 'youtube', url: 'https://youtu.be/GeBPu8IF-X4' },
    ],
  },
  {
    id: 'O0V2iXAM71U',
    projectId: 'autonomouslee',
    title: 'Devlog #2 ',
    date: '2026-03-12',
    summary: `This is quick recording of gameplay for the upcoming game “Autonomouslee”.`,
    content: [
      {
        type: 'paragraph',
        text: `We have been working on a few more mechanics. In this video you see flowing water, prohibiting the player from reaching the exit, but by pushing in a crate, the water flow stops and we can actually reach it. 
Also there will be recharge spots available to give the player just that little bit of extra juice. (It's now that green placeholder sprite)

#gameplay #gamedev #gamedevelopment #godot`,
      },
      { type: 'youtube', url: 'https://youtu.be/O0V2iXAM71U' },
    ],
  },
  {
    id: 'SneHGRAjd2k',
    projectId: 'autonomouslee',
    title: 'Devlog #1 — Introducing AutonomousLee',
    date: '2026-03-09',
    summary: `This is quick recording of gameplay for the upcoming game “Autonomouslee”.`,
    content: [
      {
        type: 'paragraph',
        text: `
The basic mechanics are in, we enter a sequence of commands and each turn the entity executes the command. 

The battery is limited, so after depleting, time rewinds so that you can retry. But are all things affected by the time-rewind?

#gameplay #gamedev #gamedevelopment #godot`,
      },
      { type: 'youtube', url: 'https://youtu.be/SneHGRAjd2k' },
    ],
  },
];

export function getPostsByProjectId(projectId: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.projectId === projectId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
