interface ProgressProps {
    value: number;
  }
  
  const Progress: React.FC<ProgressProps> = ({ value }) => (
    <div className="w-full bg-[#111111] rounded-none h-4">
      <div
        className="bg-[#FAFF00] h-4 rounded-none transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
  
  export default Progress;
  