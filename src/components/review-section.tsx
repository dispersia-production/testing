'use client';
import { Clipboard } from 'lucide-react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';

export default function ReviewSection() {
  return (
    <section className='layout min-h-screen flex'>
      <BentoGrid className='max-w-4xl mx-auto'>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const Skeleton = () => (
  <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br  from-neutral-900 to-neutral-800'></div>
);
const items = [
  {
    title: 'The Dawn of Innovation',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: <Skeleton />,
    icon: <Clipboard className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    header: <Skeleton />,
    icon: <Clipboard className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton />,
    icon: <Clipboard className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
    icon: <Clipboard className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Pursuit of Knowledge',
    description: 'Join the quest for understanding and enlightenment.',
    header: <Skeleton />,
    icon: <Clipboard className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Joy of Creation',
    description: 'Experience the thrill of bringing ideas to life.',
    header: <Skeleton />,
    icon: <Clipboard className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Spirit of Adventure',
    description: 'Embark on exciting journeys and thrilling discoveries.',
    header: <Skeleton />,
    icon: <Clipboard className='h-4 w-4 text-neutral-500' />,
  },
];
