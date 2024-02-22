'use client';

interface ProgressBarProps {
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
    progress
}) => {
    return (
        <div className="flex flex-col items-center">
            <div className="mb-4 w-full max-w-lg">
                <div className="relative h-2.5 w-full bg-primary-purple bg-opacity-40 rounded-full overflow-hidden">
                    <div
                        className="absolute rounded-md top-0 left-0 h-full bg-primary-purple bg-opacity-65 transition-all duration-300"
                        style={{ width: `${progress}%` }}>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p className="text-lg font-normal font-playfair-display">{progress}% Completed</p>
            </div>
        </div>
    );
};

export default ProgressBar;
