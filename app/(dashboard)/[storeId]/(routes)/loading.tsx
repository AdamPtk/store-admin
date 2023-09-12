import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <Skeleton className="w-[200px] h-[50px]" />
        </div>
        <Separator />
        <Skeleton className="w-full h-[500px]" />
        <Skeleton className="w-[200px] h-[50px]" />
        <Separator />
        <Skeleton className="w-full h-[500px]" />
      </div>
    </div>
  );
};

export default Loading;
