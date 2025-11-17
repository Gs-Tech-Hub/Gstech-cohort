export type Program = {
  slug: string
  title: string
  subtitle: string
  image: string
  duration?: string
  benefits?: string[]
}

export const programs: Program[] = [
  {
    slug: 'accelerator',
    title: 'Accelerator Program',
    subtitle: 'Fast-track your startup with mentorship & funding',
    image: '/img-1.jpg',
    duration: '12 weeks',
    benefits: ['Mentorship', 'Funding prep', 'Investor demo day']
  },
  {
    slug: 'incubator',
    title: 'Incubator Program',
    subtitle: 'Turn ideas into real products with structured support',
    image: '/img-2.jpg',
    duration: '24 weeks',
    benefits: ['Workspace', 'Technical support', 'Prototype funding']
  },
  {
    slug: 'tech-skills',
    title: 'Tech Skills & Internship',
    subtitle: 'Learn skills + gain real experience with projects',
    image: '/img-3.jpg',
    duration: '8-16 weeks',
    benefits: ['Project-based learning', 'Mentor matching', 'Internships']
  }
]
