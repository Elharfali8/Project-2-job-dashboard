

const JobInfo = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-2">
      <span className='icon text-gray-600 dark:text-gray-400 text-lg lg:text-xl'>{icon}</span>
      <span className='text-lg'>{text}</span>
    </div>
  );
};

export default JobInfo;