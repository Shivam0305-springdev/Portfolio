import { useEffect, useState } from 'react';

const roles = [
  'Backend Engineer',
  'React Developer',
  'Flutter Developer',
];

const RoleTypewriter = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <span className="text-red-500">
    {text}
      <span className="animate-pulse">_</span>
    </span>
  );
};

export default RoleTypewriter;
